import {
  Description,
  PortfolioItemStyled,
  PortfolioWrapper,
  Title,
  ProjectImage,
  CategoriesWrapper,
  CategoryTitle,
} from "./styled";
import { ReactElement } from "react";

interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
  url: string;
}

interface ProjectCategory {
  title: string;
  projects: Project[];
}
const projectCategories: ProjectCategory[] = [
  {
    title: "Regular web pages",
    projects: [
      {
        id: "1",
        name: "Photo Gallery",
        description: "A simple photo gallery.",
        image: `${process.env.PUBLIC_URL}/projectsIMG/gallery.png`,
        url: "https://photo-galery-ruby.vercel.app/",
      },
      {
        id: "2",
        name: "Cofo Page",
        description: "Cofo company landing page.",
        image: `${process.env.PUBLIC_URL}/projectsIMG/cofo.png`,
        url: "https://cofo.pl/",
      },
      {
        id: "3",
        name: "TVGreen",
        description: "TVGreen multimedia platform.",
        image: `${process.env.PUBLIC_URL}/projectsIMG/tvGreen.png`,
        url: "https://tvgreen.eu/",
      },
    ],
  },
  {
    title: "Three.js with 3D model pages",
    projects: [
      {
        id: "4",
        name: "Advanced Convai Avatar",
        description: "Advanced conversational avatar.",
        image: `${process.env.PUBLIC_URL}/projectsIMG/advanAv.png`,
        url: "https://avatar-for-portfolio.vercel.app/",
      },
      {
        id: "5",
        name: "Animated 3D Logo",
        description: "An animated 3D logo.",
        image: `${process.env.PUBLIC_URL}/projectsIMG/animatedLogo3d.png`,
        url: "https://carbon-tax-five.vercel.app/",
      },

      {
        id: "6",
        name: "Haunted House 3D",
        description: "A haunted house in 3D.",
        image: `${process.env.PUBLIC_URL}/projectsIMG/house.png`,
        url: "https://haunted-house-3d-blue.vercel.app/",
      },
      {
        id: "7",
        name: "Galaxy 3D",
        description: "A 3D galaxy.",
        image: `${process.env.PUBLIC_URL}/projectsIMG/galaxy3D.png`,
        url: "https://galaxy-3d-theta.vercel.app/",
      },
    ],
  },
];

export const PortfolioProjects = (): ReactElement | null => {
  const handleProjectClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <CategoriesWrapper>
      {projectCategories.map((category) => (
        <div key={category.title}>
          <CategoryTitle>{category.title}</CategoryTitle>
          <PortfolioWrapper>
            {category.projects.map(({ id, name, image, url, description }) => (
              <PortfolioItemStyled
                key={id}
                onClick={() => handleProjectClick(url)}
              >
                <ProjectImage src={image} alt={name} />
                <Title>{name}</Title>
                <Description>{description}</Description>
              </PortfolioItemStyled>
            ))}
          </PortfolioWrapper>
        </div>
      ))}
    </CategoriesWrapper>
  );
};
