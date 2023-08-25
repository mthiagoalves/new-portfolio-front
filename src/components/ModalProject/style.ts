import styled, { css } from "styled-components";
import ReactModal from 'react-modal';

export const Modal = styled(ReactModal)`
  ${() => css`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
    @media(max-width: 47.25rem) {
      overflow-y: auto;
    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    position: relative;
    background-color: ${theme.colors.bgColorWhite};
    color: ${theme.colors.textColorDark};
    padding: 20px;
    max-width: 85%;
    text-align: justify;
    text-align-last: center;
    @media(max-width: 47.25rem){
      margin: 75rem 0rem 3rem 0rem;
    }
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

export const textDescription = styled.p`
  ${() => css`
    font-size: 15px;
  `}
`;
