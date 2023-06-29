import styled, { css } from "styled-components";

export const SecondSection = styled.div`
    ${({theme}) => css`
        background-color: ${theme.colors.bgColorWhite};
        min-height: 100vh;
        padding: 3rem 6.25rem;
    `}
`;

export const DivTitleSection = styled.div`
    ${() => css`
        text-align:center;
    `}
`;

export const TitleSection = styled.h2`
    ${({theme}) => css`
        position: relative;
        color: ${theme.colors.textColorGreen};
        font-size: ${theme.constants.bodyTitleFontSize};
        font-weight: 700;
        letter-spacing: 0.063rem;
        &::before{
            content: "";
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: -0.8rem;
            width: 3.75rem;
            height: 0.25rem;
            background: ${theme.colors.bgColorGreen}
        }
    `}
`;

export const TextSection = styled.p`
    ${({theme}) => css`
        display: inline-block;
        font-size: 1.2rem;
        margin: 1rem 0;
        color: ${theme.colors.textColorDark};
    `}
`;