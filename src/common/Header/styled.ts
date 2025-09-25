import styled from "styled-components";

export const HeaderWrapper = styled.header`
  margin-top: 115px;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 66px;
  position: relative;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 32px;
    margin-top: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 12px;
    margin-top: 32px;
  }
`;

export const ThemeToggleWrapper = styled.div`
  position: absolute;
  top: -60px;
  right: 0;
  z-index: 10;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    top: -40px;
    right: 0;
  }
`;
export const ImgStyled = styled.img`
  width: 27vw;
  height: 27vw;
  max-width: 400px;
  max-height: 400px;
  object-fit: cover;
  border-radius: 50%;
  transform: scaleX(-1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 
    0 10px 30px rgba(0, 0, 0, 0.15),
    0 4px 15px rgba(0, 0, 0, 0.1),
    inset 0 0 0 3px rgba(255, 255, 255, 0.1);
  border: 4px solid transparent;
  background: 
    linear-gradient(135deg, #667eea 0%, #764ba2 100%) padding-box,
    linear-gradient(135deg, #667eea, #764ba2, #f093fb, #f5576c, #4facfe, #00f2fe) border-box;
  position: relative;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: -6px;
    left: -6px;
    right: -6px;
    bottom: -6px;
    background: linear-gradient(135deg, #667eea, #764ba2, #f093fb, #f5576c, #4facfe, #00f2fe);
    border-radius: 50%;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &:hover {
    transform: scaleX(-1) scale(1.08);
    box-shadow: 
      0 20px 40px rgba(0, 0, 0, 0.25),
      0 8px 25px rgba(0, 0, 0, 0.15),
      inset 0 0 0 3px rgba(255, 255, 255, 0.2);
    
    &::before {
      opacity: 0.8;
    }
  }

  @media (max-width: 768px) {
    width: 40vw;
    height: 40vw;
    box-shadow: 
      0 8px 25px rgba(0, 0, 0, 0.12),
      0 3px 12px rgba(0, 0, 0, 0.08);
  }

  @media (max-width: 480px) {
    width: 60vw;
    height: 60vw;
    box-shadow: 
      0 6px 20px rgba(0, 0, 0, 0.1),
      0 2px 10px rgba(0, 0, 0, 0.06);
  }
`;

export const Content = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-top: 0;
  }
`;
export const Heading = styled.h1`
  color: ${({ theme }) => theme.sectionHeading};
  transition: color 0.3s;
  font-size: 38px;
  font-weight: 900;
  letter-spacing: 1.9px;

  @media (max-width: ${({ theme }) => theme.breakpoints.narrow}) {
    font-size: 22px;
    letter-spacing: 1.1px;
  }
`;
export const Paragraph = styled.p`
  color: ${({ theme }) => theme.paragraph};
  transition: color 0.3s;
  font-size: 12px;
  font-weight: 700;
  line-height: 130%;
  text-transform: uppercase;
  display: flex;
`;
export const Description = styled.p`
  color: ${({ theme }) => theme.paragraph};
  transition: color 0.3s;
  font-size: 20px;
  line-height: 140%;
  letter-spacing: 1px;

  @media (max-width: ${({ theme }) => theme.breakpoints.narrow}) {
    font-size: 17px;
    letter-spacing: 0.85px;
  }
`;
export const Button = styled.a`
  color: ${({ theme }) => theme.colors.white};
  display: inline-flex;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  gap: 16px;
  border-radius: 4px;
  border: 1px solid var(--diff-bg-neutral, rgba(209, 213, 218, 0.3));
  background-color: ${({ theme }) => theme.colors.scienceBlue};
  text-decoration: none;
  transition: background 0.3s;
  font-weight: 600;
  letter-spacing: 1.003px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.azureRadiance};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 12px;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
  animation: fadeIn 0.3s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const ModalContent = styled.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  animation: scaleIn 0.3s ease-out;

  @keyframes scaleIn {
    from {
      transform: scale(0.8);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

export const ModalImage = styled.img`
  width: 100%;
  height: 100%;
  max-width: 80vw;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 20px;
  box-shadow: 
    0 25px 50px rgba(0, 0, 0, 0.3),
    0 10px 30px rgba(0, 0, 0, 0.2);
`;

export const CloseButton = styled.button`
  position: absolute;
  top: -15px;
  right: -15px;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.scienceBlue};
  color: white;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  &:hover {
    background: ${({ theme }) => theme.colors.azureRadiance};
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }
`;
