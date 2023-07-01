import styled, { css } from "styled-components";

export const CardProject = styled.div`
    ${() => css`

    `}
`;

export const TitleCard = styled.h1`
    ${({theme}) => css`
        color: ${theme.colors.textColorDark}; 
    `}
`;

export const SmallDescriptionCard = styled.p`
    ${({theme}) => css`
        color: ${theme.colors.textColorDark};
    `}
`;

export const TechnologiesCard = styled.p`
    ${({theme}) => css`
        color: ${theme.colors.textColorDark};
    `}
`;

export const DivImg = styled.div`
    ${() => css`
        max-width: 100%;
        height: auto;
    `}
`;