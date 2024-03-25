export interface Projects {
   id: number;
   name: string;
   description: string;
   html_url: string;
   homepage: string;
}
export const fethProjects = () =>
   fetch("https://api.github.com/users/AndriiStafiniak/repos")
   .then(response => response.json())
   .then((data: any) => data as Projects[])