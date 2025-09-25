import styled from "styled-components";

export const CategoriesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 48px;
`;

export const CategoryTitle = styled.h2`
    font-size: 28px;
    font-weight: 700;
    color: ${({ theme }) => theme.colorText};
    margin-bottom: 24px;
    border-bottom: 2px solid ${({ theme }) => theme.primary};
    padding-bottom: 8px;
`;

export const PortfolioWrapper = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 24px;
    padding: 0;
    margin: 0;

    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        grid-template-columns: 1fr;
        gap: 20px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        grid-template-columns: 1fr;
        gap: 16px;
    }
`;

export const PortfolioItemStyled = styled.li`
    border-radius: 16px;
    background: ${({ theme }) => theme.backgroundItem};
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    padding: 0;
    list-style: none;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(135deg, rgba(74, 144, 226, 0.1), rgba(80, 200, 120, 0.1));
        opacity: 0;
        transition: opacity 0.3s ease;
        z-index: 1;
    }

    &:hover {
        transform: translateY(-8px);
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15), 0 4px 16px rgba(0, 0, 0, 0.1);
        
        &::before {
            opacity: 1;
        }
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        &:hover {
            transform: translateY(-4px);
        }
    }
`;

export const Title = styled.h3`
    color: ${({ theme }) => theme.portfolioHeading};
    transition: color 0.3s;
    font-size: 22px;
    font-weight: 600;
    letter-spacing: 0.5px;
    padding: 0 24px;
    margin: 20px 0 12px 0;
    position: relative;
    z-index: 2;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 18px;
        padding: 0 20px;
        margin: 16px 0 8px 0;
    }
`;

export const Description = styled.p`
    color: ${({ theme }) => theme.paragraph};
    transition: color 0.3s;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0.2px;
    padding: 0 24px 24px 24px;
    margin: 0;
    opacity: 0.8;
    position: relative;
    z-index: 2;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 14px;
        padding: 0 20px 20px 20px;
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

export const ProjectImage = styled.img`
    width: 100%;
    height: 220px;
    object-fit: cover;
    border-radius: 0;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    z-index: 2;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        height: 180px;
    }
`;