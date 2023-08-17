import styled, { css } from "styled-components";

export const CardProject = styled.div<{ slug: string }>`
  ${({theme, slug}) => css`
    position: relative;
    min-height: 18rem;
    margin: 1px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.bgColorIce};
    transition: .5s;
    &:hover {
      background: url(${require(`assets/images/projects/${slug}.jpg`)});
      background-size: cover;
      background-position: center;
      & ${DivAbsolute} {
        opacity: 1;
      }
    } 
  `}
`;

export const TitleCard = styled.h1`
    ${({ theme }) => css`
        color: ${theme.colors.textColorDark}; 
    `}
`;

export const SmallDescriptionCard = styled.p`
    ${({ theme }) => css`
        color: ${theme.colors.textColorDark};
    `}
`;

export const TechnologiesCard = styled.p`
    ${({ theme }) => css`
        color: ${theme.colors.textColorDark};
    `}
`;

export const DivImg = styled.div`
    ${() => css`
      max-width: 100%;
      height: auto;
  `}
`;

export const DivIcons = styled.div`
  ${() => css`
    width: 100%;
    display: flex;
    justify-content: space-around;
  `}
`;
export const DivAbsolute = styled.div`
  ${() => css`
    position: absolute;
    cursor: pointer;
    top: 3%;
    right: 3%;
    opacity: 0;
    transition: 0.5s;  
  `}
`;

export const CardImg = styled.img`
  ${() => css` 
    max-width: 30px;
    height: auto;
  `}
`;