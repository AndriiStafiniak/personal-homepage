import {
  Button,
  Content,
  Description,
  HeaderWrapper,
  Heading,
  ImgStyled,
  Paragraph,
} from "./styled";
import avatar from "../../common/images/avPortfolio.jpg";
import { ReactComponent as HireMe } from "../../common/images/icons/hireMe.svg";
export const Header = () => {
  return (
    <HeaderWrapper>
      <ImgStyled src={avatar} />
      <Content>
        <Paragraph>This is</Paragraph>
        <Heading>Andrii Stafiniak</Heading>
        <Description>
          👨🏻‍💻 I’m an experienced Frontend Developer with a strong focus on React
          and a background in corporate environments. I’m eager to tackle new
          programming challenges, explore emerging technologies, and continue
          expanding my skill set while collaborating with other professionals in
          the field.
        </Description>
        <Button href="mailto:andrii.stafiniak@gmail.com">
          <HireMe />
          Hire Me
        </Button>
      </Content>
    </HeaderWrapper>
  );
};
