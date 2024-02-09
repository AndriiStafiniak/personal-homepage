export const fethProjects = () =>
   fetch("https://api.github.com/users/AndriiStafiniak/repos").then(
      (response) => response.json()
   );