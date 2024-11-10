interface Project {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  pushed_at: string;
  updated_at: string;
}
export const fethProjects = (): Promise<Project[]> =>
  fetch("https://api.github.com/users/AndriiStafiniak/repos")
    .then((response) => response.json())
    .then((data) => data as Project[]);
