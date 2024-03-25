import styled from "styled-components";
import { ReactComponent as Ellipse } from "../../common/images//icons/ellipse.svg";

export const StyledSection = styled.section`
    max-width: 1216px;
    background-color: ${({ theme }) => theme.backgroundItem};
    padding: 32px;
    box-shadow: 0px 16px 58px 0px rgba(9, 10, 51, 0.03), 0px -2px 50px 0px rgba(9, 10, 51, 0.02);

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding: 16px;
    }
`;

export const Heading = styled.h2`
    font-size: 30px;
    font-weight: 900;
    letter-spacing: 1.5px;
    color: ${({ theme }) => theme.sectionHeading};
    padding-bottom: 15px;
    padding-top: 0;
    margin: 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.littleGrey};

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 18px;
        letter-spacing: 0.9px;
    }
`;

export const Body = styled.div`
    padding: 0;
    margin: 0;
`;

export const StyledList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 8px;
    padding: 30px 32px;
    padding-left: 0;
    margin: 0;

    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}){
        grid-template-columns: 1fr;
        padding: 16px;
        padding-left: 0;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        grid-template-columns: 1fr;
        padding: 16px;
        padding-left: 0;
    }
`;

export const ListItem = styled.li`
    color: ${({ theme }) => theme.colors.scienceBlue};
    font-size: 18px;
    font-weight: 400;
    line-height: 140%;
    letter-spacing: 0.9px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 14px;
        letter-spacing: 0.7px;
    }
`;

export const Span = styled.span`
    color: ${({ theme }) => theme.paragraph};
    transition: color 0.3s;
    padding: 0 16px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding: 0 8px;
    }
`;

export const Image = styled(Ellipse)`
    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: 6px;
        height: 6px;
    }
`;