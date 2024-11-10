import styled from "styled-components";

export const HeaderWrapper = styled.header`
  margin-top: 115px;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 66px;
  position: relative;

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
export const ImgStyled = styled.img`
  width: 27vw;
  height: 27vw;
  max-width: 400px;
  max-height: 400px;
  object-fit: cover;
  border-radius: 70%;
  transform: scaleX(-1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scaleX(-1) scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    width: 40vw;
    height: 40vw;
  }

  @media (max-width: 480px) {
    width: 60vw;
    height: 60vw;
  }
`;

export const Content = styled.div`
  padding-top: 68px;
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
