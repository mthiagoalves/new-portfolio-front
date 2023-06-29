import styled, { css } from "styled-components";

export const FirstSection = styled.div`
    ${() => css `
        position: relative;
        width: 100%;
        min-height: 100vh;
	`}
`;

export const LogoText = styled.h5`
    ${({theme}) => css`
        position: absolute;
        top: 3.5rem;
        left: 6.25rem;
        max-width: 10.438rem;
        font-size: 1.3rem;
        text-transform: uppercase;
        letter-spacing: 0.063rem;
        background: ${theme.colors.bgColorGreen};
        color: ${theme.colors.bgColorWhite};
        padding: 0 0.313rem;
    `}
`;

export const ContentBx = styled.div`
    ${() => css`
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 6.25rem;
        
    `}
`;

export const TitleH5 = styled.h4`
    ${({theme}) => css ` 
        position: absolute;
        top: 2.5rem;
        left: 6.25rem;
        font-size: 1.5rem;
        text-transform: uppercase;
        letter-spacing: 0.063rem;
        background: ${theme.colors.bgColorWhite};
        color: ${theme.colors.textColorDark};
        padding: 0 0.313px;
	`}
`;

export const TitleH4 = styled.h4`
    ${({theme}) => css ` 
        font-size: 1.6rem;
        color: ${theme.colors.textColorWhite};
        font-weight: 300;
	`}
`;

export const TitleH2 = styled.h2`
    ${({theme}) => css ` 
        font-size: 3rem;
        color: ${theme.colors.textColorWhite};
        line-height: 2rem;
	`}
`;

export const TextP = styled.p`
    ${({theme}) => css ` 
        font-size: 1.2rem;
        margin: 0.188rem 0;
        color: ${theme.colors.textColorWhite};
        font-weight: 300;
	`}
`;

export const DivImage = styled.div`
    ${() => css ` 
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
	`}
`;

export const Photothumb = styled.img`
    ${() => css ` 
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
	`}
`;

export const BtnDownloadCV = styled.a`
    ${({theme}) => css`
        background: ${theme.colors.bgColorGreen};
        color: ${theme.colors.textColorWhite};
        max-width: 12rem;
        padding: 0.625rem 1.875rem;
        margin: 1.5rem 0;
        text-decoration: none;
        font-weight: 500;
        letter-spacing: 0.125rem;
        text-align: center;
    `}
`;


