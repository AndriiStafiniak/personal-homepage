import styled from "styled-components";

export const PortfolioWrapper = styled.ul`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 32px;
    padding: 0;

    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        grid-template-columns: auto;
        grid-gap: 16px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        grid-template-columns: auto;
        grid-gap: 16px;
    }
`;

export const PortfolioItemStyled = styled.li`
    border-radius: 4px;
    border: 6px solid var(--diff-bg-neutral, ${({ theme }) => theme.colors.semiGrey});
    box-shadow: 0px 16px 58px 0px rgba(9, 10, 51, 0.03), 0px -2px 50px 0px rgba(9, 10, 51, 0.02);
    background-color: ${({ theme }) => theme.backgroundItem};
    transition: background 0.3s;
    padding: 56px;
    transition: border 0.3s;
    max-width: 582px;
    list-style: none;

    &:hover {
        border: 6px solid var(--diff-bg-neutral, ${({ theme }) => theme.colors.anakiwa});
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        max-width: 100%;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding: 24px;
        max-width: 100%;
    }
`;

export const Title = styled.h3`
    color: ${({ theme }) => theme.portfolioHeading};
    transition: color 0.3s;
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 1.2px;
    padding: 0;
    margin: 0;
    cursor: s-resize;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 16px;
        letter-spacing: 0.8px;
    }
`;

export const Description = styled.p`
    color: ${({ theme }) => theme.paragraph};
    transition: color 0.3s;
    font-size: 18px;
    line-height: 140%;
    letter-spacing: 0.9px;
    padding: 0;
    margin: 24px 0;
    cursor: s-resize;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        margin: 16px 0;
        font-size: 14px;
        letter-spacing: 0.7px;
    }
`;

export const LinkWrapper = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 8px;
`;


export const StyledLink = styled.a`
    color: ${({ theme }) => theme.colors.scienceBlue};
    font-size: 18px;
    line-height: 140%;
    letter-spacing: 0.9px;
    word-break: break-all;
    transition: color 0.3s;
    cursor: pointer;

    &:hover {
        color: ${({ theme }) => theme.colors.azureRadiance};
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 14px;
        letter-spacing: 0.7px;
    }
`;

export const Paraghaph = styled.p`
    color: ${({ theme }) => theme.paragraph};
    transition: color 0.3s;
    font-size: 18px;
    line-height: 140%;
    letter-spacing: 0.9px;
    margin: 0;
    padding: 0;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {  
        font-size: 14px;
        letter-spacing: 0.7px;
    }
`;