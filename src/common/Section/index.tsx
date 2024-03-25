
import { StyledSection, Heading, Body, StyledList, ListItem, Span, Image } from "./styled";
import { ReactNode } from "react";

export interface SectionProps {
   title: ReactNode;
   body: string[];
}
export const Section = ({ title, body } : SectionProps) => {
   return (
      <StyledSection>
         <Heading>
            {title}
         </Heading>
         <Body>
            <StyledList>
               {body ? body.map((skill: string, index: number) => (
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