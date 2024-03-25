import { useQuery } from "@tanstack/react-query";
import { Projects, fethProjects } from "./fetchProjects";
import { Description, LinkWrapper, Paraghaph, PortfolioItemStyled, PortfolioWrapper, StyledLink, Title } from "./styled";
import { ReactElement } from "react";
interface Portfolio {
   projects: Projects
}
export const PortfolioProjects = () : ReactElement | null => {
   const { isLoading, isPaused, error, data } = useQuery <Projects[]>({
      queryKey: ["projects"],
      queryFn: fethProjects,
      staleTime: 1000 * 15, //15 seconds
   });
   if (isPaused) {
      return<div>Sprawdz polączenie z internetem</div>
   }
   if (isLoading) {
      return <div>trwa ładowanie</div>
   }
   if (error) {
      return <div>`nie udało się pobrać danych z powodu: ${error.message}`</div>
   }

   return (
      <PortfolioWrapper>
         {data?.map((project) =>
            <PortfolioItemStyled key={project.id}>
               <Title>{project.name}</Title>
               <Description>{project.description}</Description>
               <LinkWrapper>
                  {project.homepage ?
                     <><Paraghaph>Demo:</Paraghaph> <StyledLink href={project.homepage} target="_blank">{project.name}</StyledLink></>
                     : ""}
                  {project.html_url ?
                     <><Paraghaph>Code:</Paraghaph> <StyledLink href={project.html_url} target="_blank">check in GitHub</StyledLink></>
                     : ""}
               </LinkWrapper>

            </PortfolioItemStyled>)}
      </PortfolioWrapper>
   )

}