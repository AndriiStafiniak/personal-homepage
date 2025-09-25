
import { StyledSection, Heading, Body, StyledList, ListItem, Span, Image } from "./styled";
import { ReactNode } from "react";

interface Skill {
  name: string;
  icon: string;
}

export interface SectionProps {
  title: ReactNode;
  body: Skill[];
}

export const Section = ({ title, body }: SectionProps) => {
  return (
    <StyledSection>
      <Heading>
        {title}
      </Heading>
      <Body>
        <StyledList>
          {body.map((skill: Skill, index: number) => (
            <ListItem key={index}>
              <Image src={skill.icon} alt={`${skill.name} icon`} />
              <Span>{skill.name}</Span>
            </ListItem>
          ))}
        </StyledList>
      </Body>
    </StyledSection>
  );
};