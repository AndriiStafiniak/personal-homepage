import { StyledSection, Heading, Body, StyledList, ListItem, Span, Image } from "./styled";
import { ReactNode, ReactElement } from "react";
interface SectionProps {
   title: ReactNode;
   body: ReactElement[];
}
export const Section = ({ title, body } : SectionProps) => {
   return (
      <StyledSection>
         <Heading>
            {title}
         </Heading>
         <Body>
            <StyledList>
               {body ? body.map((skill: ReactElement, index: number) => (
                  <ListItem key={index}>
                     <Image />
                     <Span>{skill}</Span>
                  </ListItem>
               )) : ""}
            </StyledList>
         </Body>
      </StyledSection>
   )
};