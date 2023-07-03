import styled, { css } from "styled-components";

export const FourthSection = styled.div`
    ${({ theme }) => css`
        background-color: ${theme.colors.bgColorWhite};
        padding: 3rem 5rem;
        @media(max-width: 767px){
            padding: 3rem 2.25rem;
        }
    `}
`;

export const DivTitleSection = styled.div`
    ${() => css`
        text-align:center;
    `}
`;

export const TitleSection = styled.h2`
    ${({ theme }) => css`
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
    ${({ theme }) => css`
        display: inline-block;
        font-size: ${theme.constants.bodyTextFontSize};
        margin: 1rem 0;
        color: ${theme.colors.textColorDark};
        text-align: justify;
    `}
`;

export const TextA = styled.a`
        ${({ theme }) => css`
            text-decoration: none;
            color: ${theme.colors.textColorGreen};
            font-weight: bold;
            transition: 0.5s;
            &:hover {
                border-bottom: 1px solid ${theme.colors.textColorGreen}
            }
        `}
`;