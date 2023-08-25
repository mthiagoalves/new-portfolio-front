import styled, { css } from "styled-components";

export const SecondSection = styled.div`
    ${({theme}) => css`
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
        font-size: ${theme.constants.bodyTextFontSize};
        margin: 1rem 0;
        color: ${theme.colors.textColorDark};
        text-align: justify;
    `}
`;

export const ImgSection = styled.img`
    ${() => css`
        max-width: 70%;
        height: auto;
        margin: 1.5rem;
        @media(min-width: 1350px){
            max-width: 40%;
        }
    `}
`;

export const ProgressBar = styled.div`
    ${({theme}) => css`
        position: relative;
        width: 100%;
        height: 1.25rem;
        background-color: ${theme.colors.bgColorDark};
        border-radius: 0.625rem;
    `}
`;

export const ProgressBarInner = styled.div`
    ${() => css`
        position: relative;
        height: 100%;
        border-radius: 0.625rem;
    `}
`;

export const ProgressBarInnerFilled = styled.div`
    ${({theme}) => css`
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        background-color: ${theme.colors.bgColorGreen};
        border-radius: 0.625rem;
        display: flex;
        align-items: center;
        padding-left: 0.625rem;
        padding-bottom: .18rem;
    `}
`;

export const ProgressBarInnerLabel = styled.div`
    ${({theme}) => css`
        position: absolute;
        top: 50%;
        right: 0.313rem;
        transform: translateY(-54%);
        font-size: 0.875rem;
        font-weight: bold;
        color: ${theme.colors.textColorWhite};
    `}
`;

export const LabelLanguages = styled.label`
    ${({theme}) => css`
        color: ${theme.colors.textColorDark};
        font-size: ${theme.colors.bodyTextFontSize};
        margin-bottom: 0.2rem;
    `}
`;