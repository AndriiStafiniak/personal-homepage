import { useQuery } from "@tanstack/react-query";
import { fethProjects } from "./fetchProjects";
import { Description, LinkWrapper, Paraghaph, PortfolioItemStyled, PortfolioWrapper, StyledLink, Title } from "./styled";

export const PortfolioProjects = () => {
   const { isLoading, isPaused, error, data } = useQuery({
      queryKey: ["projects"],
      queryFn: fethProjects,
      staleTime: 1000 * 15, //15 seconds
   });
   if (isPaused) {
      <p>Sprawdz polączenie z internetem</p>
   }
   if (isLoading) {
      return <p>trwa ładowanie</p>
   }
   if (error) {
      return `nie udało się pobrać danych z powodu: ${error.message}`
   }

   return (
      <PortfolioWrapper>
         {data.map((project) =>
            <PortfolioItemStyled key={project.id}>
               <Title>{project.name}</Title>
               <Description>{project.description}</Description>
               <LinkWrapper>
                  {project.homepage ?
                     <><Paraghaph>Demo:</Paraghaph> <StyledLink href={project.homepage} target="_blank">{project.homepage}</StyledLink></>
                     : ""}
                  {project.html_url ?
                     <><Paraghaph>Code:</Paraghaph> <StyledLink href={project.html_url} target="_blank">{project.html_url}</StyledLink></>
                     : ""}
               </LinkWrapper>

            </PortfolioItemStyled>)}
      </PortfolioWrapper>
   )

}