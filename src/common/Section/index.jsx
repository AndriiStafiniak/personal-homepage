import { StyledSection, Heading, Body, StyledList, ListItem, Span, Image } from "./styled";

export const Section = ({ title, body }) => {
   return (
      <StyledSection>
         <Heading>
            {title}
         </Heading>
         <Body>
            <StyledList>
               {body ? body.map((skill) => (
                  <ListItem key="skill">
                     <Image />
                     <Span>{skill}</Span>
                  </ListItem>
               )) : ""}
            </StyledList>
         </Body>
      </StyledSection>
   )
};