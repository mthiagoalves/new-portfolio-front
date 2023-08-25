import styled, { css } from "styled-components";

export const KnowledgesBx = styled.div`
    ${({theme}) => css`
        padding: 2.5rem 1.25rem;
        transition: 0.2s;
        text-align: center;
        &:hover{
            background: ${theme.colors.bgColorIce};
            color: ${theme.colors.textColorDark};
            & ${KnowledgesImg} {
                filter: invert(0);
            }
        }
        @media(max-width: 48rem){
            padding: 1.5rem 0rem;
        }
    `}
`;

export const KnowledgesImg = styled.img`
    ${() => css`
        max-width: 5rem;
        transition: 0.5s;
        filter: invert(1);
    `}
`;

export const KnowledgesH2 = styled.h2`
    ${({theme}) => css`
        margin-top: 1.25rem;
        margin-bottom: 0.625rem;
        font-size: ${theme.constants.headingFontSize};
        font-weight: 600;
        transition: 0.5s;
        @media(max-width: 48rem){
            font-size: 1.4rem
        }
    `}
`;
export const KnowledgesP = styled.p`
    ${({theme}) => css`
        margin: 0;
        transition: 0.5s;
        font-size: ${theme.constants.bodyTextFontSize};
        @media(max-width: 48rem){
            font-size: 1rem;
        }
    `}
`;