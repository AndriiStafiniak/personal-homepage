import styled from "styled-components";

export const StyledSection = styled.section`
    max-width: 1216px;
    background-color: ${({ theme }) => theme.backgroundItem};
    padding: 32px;
    box-shadow: 0px 16px 58px 0px rgba(9, 10, 51, 0.03), 0px -2px 50px 0px rgba(9, 10, 51, 0.02);
    border-radius: 16px;

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
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 16px;
    padding: 32px 0 0;
    margin: 0;

    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}){
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        grid-template-columns: 1fr;
    }
`;

export const ListItem = styled.li`
    display: flex;
    align-items: center;
    gap: 16px;
`;

export const Span = styled.span`
    color: ${({ theme }) => theme.paragraph};
    font-size: 18px;
    line-height: 1.5;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 14px;
    }
`;

export const Image = styled.img`
    width: 48px;
    height: 48px;
`;