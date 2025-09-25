import { useState } from "react";
import {
  Button,
  Content,
  Description,
  HeaderWrapper,
  Heading,
  ImgStyled,
  Paragraph,
  ThemeToggleWrapper,
  ModalOverlay,
  ModalContent,
  ModalImage,
  CloseButton,
} from "./styled";
import avatar from "../../common/images/avPortfolio.jpg";
import { ReactComponent as HireMe } from "../../common/images/icons/hireMe.svg";
import { ThemeToggle } from "../ThemeToggle";

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <HeaderWrapper>
        <ThemeToggleWrapper>
          <ThemeToggle />
        </ThemeToggleWrapper>
        <ImgStyled src={avatar} onClick={openModal} />
        <Content>
          <Paragraph>This is</Paragraph>
          <Heading>Andrii Stafiniak</Heading>
          <Description>
            👨🏻‍💻 I'm an experienced Frontend Developer specializing in React, WordPress, and modern web technologies with a strong background in corporate environments. I build business process automations to streamline workflows and improve efficiency. I'm eager to tackle new programming challenges, explore emerging technologies, and continue expanding my skill set while collaborating with other professionals in the field.
          </Description>
          <Button href="mailto:andrii.stafiniak@gmail.com">
            <HireMe />
            Hire Me
          </Button>
        </Content>
      </HeaderWrapper>

      {isModalOpen && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={closeModal}>×</CloseButton>
            <ModalImage src={avatar} alt="Andrii Stafiniak - Full Size" />
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};
