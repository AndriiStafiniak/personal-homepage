import { useQuery } from "@tanstack/react-query";
import { fethProjects } from "./fetchProjects";

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
      <>
         {data.map((project) =>
            <li key={project.id}>name: {project.name} link: {project.html_url}</li>)}
      </>
   )

}