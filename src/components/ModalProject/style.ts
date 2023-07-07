import styled, { css } from "styled-components";


const ModifyVisibilityModal = {
    closing: () => css`
      opacity: 1;
      visibility: visible;
    `,
  };
  
type ModalStyled = { closing: boolean };

export const Modal = styled.div<ModalStyled>`
    ${({ closing }) => css`
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0;
        visibility: hidden;
        ${closing && ModifyVisibilityModal.closing()};
        transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
    `}
`;

export const Content = styled.div`
    ${({theme}) => css`
        position: relative; 
        background-color: ${theme.colors.bgColorWhite};
        color: ${theme.colors.textColorDark};
        padding: 20px;
        max-width: 70%;
        text-align: justify;
        text-align-last: center;
    `}
`;

export const DivIcons = styled.div`
  ${() => css`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  `}
`;

export const CardImg = styled.img`
  ${() => css` 
    max-width: 30px;
    height: auto;
    margin: 0 50px;
  `}
`;

export const CloseImg = styled.img`
  ${() => css` 
    max-width: 30px;
    height: auto;
  `}
`;

export const BtnClose = styled.div`
    ${() => css`
        position: absolute;
        top: 0.313rem;
        right: 0.313rem;
        cursor: pointer;
    `}
`;

