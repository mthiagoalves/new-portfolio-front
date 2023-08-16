import styled, { css } from "styled-components";

export const FiveScetion = styled.div`
    ${({ theme }) => css`
        background-color: ${theme.colors.bgColorDark};
        padding: 3rem 6.25rem;
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
        color: ${theme.colors.textColorWhite};
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
            background: ${theme.colors.bgColorWhite}
        }
    `}
`;

export const TextSection = styled.p`
    ${({ theme }) => css`
        display: inline-block;
        font-size: ${theme.constants.bodyTextFontSize};
        margin: 1rem 0;
        color: ${theme.colors.textColorWhite};
        text-align: justify;
    `}
`;

export const GroupForm = styled.div`
    ${() => css`
        display: flex;
        flex-direction: column;
        margin-bottom: .5rem;
    `}
`;

export const LabelForm = styled.label`
    ${({ theme }) => css`
        font-size: ${theme.constants.bodyTextFontSize};
        color: ${theme.colors.textColorWhite};
    `}
`;

export const TransparentInput = styled.input`
  background-color: transparent;
  color: white;
  border: 1px solid white;
  padding: 8px;
  border-radius: 8px;
`;

export const BtnSubmit = styled.button`
    ${({ theme }) => css`
        background: ${theme.colors.bgColorGreen};
        color: ${theme.colors.textColorWhite};
        max-width: 12rem;
        padding: 0.625rem 1.875rem;
        margin: .5rem 0;
        text-decoration: none;
        font-weight: 500;
        letter-spacing: 0.125rem;
        border: none;
        @media(max-width: 767px){ 
            margin-top: 3rem;
        }
    `}
`;

export const ImgContact = styled.img`
    ${() => css`
        /* transform: scale(0.5); */
        opacity: 0.7;
        transition: 0.7s;
        filter: invert(100%);
        &:hover{
            transform: scale(0.9);
            opacity: 1;
        }
    `}
`;

export const AContact = styled.a`
    ${() => css`
        text-decoration: none;
    `}
`;