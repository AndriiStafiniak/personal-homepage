import { useQuery } from "@tanstack/react-query";
import { fethProjects } from "./fetchProjects";
import {
  Description,
  LinkWrapper,
  Paraghaph,
  PortfolioItemStyled,
  PortfolioWrapper,
  StyledLink,
  Title,
} from "./styled";
import { ReactElement } from "react";

// Define the structure of a project
interface Project {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  pushed_at: string;
  updated_at: string;
}

export const PortfolioProjects = (): ReactElement | null => {
  const { isLoading, isPaused, error, data } = useQuery<Project[]>({
    queryKey: ["projects"],
    queryFn: fethProjects,
  });

  if (isPaused) {
    return <div>Sprawdz połączenie z internetem</div>;
  }
  if (isLoading) {
    return <div>Trwa ładowanie...</div>;
  }
  if (error instanceof Error) {
    return <div>Nie udało się pobrać danych z powodu: {error.message}</div>;
  }

  // Sort data with the specific order
  const sortedData = data
    ? data.sort((a: Project, b: Project) => {
        if (a.name === "HountedHouse3D") return -1;
        if (b.name === "HountedHouse3D") return 1;
        if (a.name === "Movie-browser") return -1;
        if (b.name === "Movie-browser") return 1;

        return (
          new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()
        );
      })
    : [];

  return (
    <PortfolioWrapper>
      {sortedData.map((project: Project) => (
        <PortfolioItemStyled key={project.id}>
          <Title>{project.name}</Title>
          <Description>{project.description}</Description>
          <LinkWrapper>
            {project.homepage && (
              <>
                <Paraghaph>Demo:</Paraghaph>
                <StyledLink href={project.homepage} target="_blank">
                  {project.name}
                </StyledLink>
              </>
            )}
            {project.html_url && (
              <>
                <Paraghaph>Code:</Paraghaph>
                <StyledLink href={project.html_url} target="_blank">
                  check in GitHub
                </StyledLink>
              </>
            )}
          </LinkWrapper>
        </PortfolioItemStyled>
      ))}
    </PortfolioWrapper>
  );
};
