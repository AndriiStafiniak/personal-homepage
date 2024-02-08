import styled from "styled-components";

export const StyledFooter = styled.footer`
    display: flex;
    gap: 66px;

    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        flex-direction: column;
        gap: 32px;
        margin-top: 32px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        flex-direction: column;
        gap: 12px;
        margin-top: 32px;
    }
`;

export const WrapperDescription = styled.div`
    max-width: 624px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding-top: 0;
    }
`;
export const Paragraph = styled.p`
    color: ${({ theme }) => theme.paragraph};
    transition: color 0.3s;
    font-size: 12px;
    font-weight: 700;
    line-height: 130%;
    text-transform: uppercase;
`;
export const Name = styled.a`
    color: ${({ theme }) => theme.sectionHeading};
    transition: color 0.3s;
    font-size: 32px;
    font-weight: 900;
    letter-spacing: 1.6px;
    cursor: pointer;
    text-decoration: none;

    &:hover {
        color: ${({ theme }) => theme.colors.azureRadiance};
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 18px;
        letter-spacing: 0.9px;
    }
`;
export const Description = styled.p`
    color: ${({ theme }) => theme.paragraph};
    transition: color 0.3s;
    font-size: 18px;
    line-height: 140%;
    letter-spacing: 0.9px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) { 
        font-size: 14px;
        letter-spacing: 0.7px;
    }
`;

export const Icons = styled.div`
    display: flex;
    gap: 24px;
    margin-top: 56px;
    color: ${({ theme }) => theme.icon};
    transition: color 0.3s;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) { 
        gap: 16px;
        margin-top: 40px;
    }
`;

export const IconStyle = (Icon) => styled(Icon)`
    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) { 
        width: 32px;
        height: 32px;
    }
`

export const Link = styled.a`
  color: ${({ theme }) => theme.icon};
  transition: color 0.3s;

  &:hover {
        color: ${({ theme }) => theme.colors.scienceBlue};
    }
`;