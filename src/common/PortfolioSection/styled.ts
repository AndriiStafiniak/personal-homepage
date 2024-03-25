import styled from "styled-components";
import { ReactComponent as PortfolioIcon } from "../images/icons/portfolio.svg";

export const Wrapper = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 8px;
    padding-bottom: 24px;
`;

export const Icon = styled(PortfolioIcon)`
    width: 40px;
    height: 40px;
    margin: 0;
    padding: 0;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: 32px;
        height: 32px;
    }
`;

export const Title = styled.h2`
    color: ${({ theme }) => theme.sectionHeading};
    text-align: center;
    font-size: 30px;
    font-weight: 900;
    letter-spacing: 1.5px;
    margin: 0;
    padding: 0;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 18px;
        letter-spacing: 0.9px;
    }
`;

export const Paragraph = styled.p`
    color: ${({ theme }) => theme.sectionHeading};
    font-size: 20px;
    line-height: 140%;
    letter-spacing: 1px;
    margin: 0;
    padding: 0;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 17px;
        letter-spacing: 0.85px;
    }
`;