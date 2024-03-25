import styled from "styled-components";

export const Container = styled.div`
    padding: 20px;
    max-width: 1216px;
    margin: 0 auto;
    display: flex;
    gap: 72px;
    flex-direction: column;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        gap: 50px;
    }
`;