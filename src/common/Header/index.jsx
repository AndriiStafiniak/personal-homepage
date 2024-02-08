import { Button, Content, Description, HeaderWrapper, Heading, ImgStyled, Paragraph } from "./styled"
import avatar from "../../common/images/avatar.jpeg"
import { ReactComponent as HireMe } from "../../common/images/icons/hireMe.svg"
export const Header = () => {

   return (
      <HeaderWrapper>
         <ImgStyled src={avatar} />
         <Content>
            <Paragraph>This is</Paragraph>
            <Heading>Andrii Stafiniak</Heading>
            <Description>👨🏻‍💻  I’m a passionate Frontend Developer in love with React. I am looking for my first job and programming challenges. I want to explore new technologies, improve my skills and gain knowledge among other programmers.</Description>
            <Button href="mailto:andrii.stafiniak@gmai.com">
               <HireMe />
               Hire Me
            </Button>
         </Content>
      </HeaderWrapper>
   )
}