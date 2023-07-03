import styled, { css } from "styled-components";

export const Modal = styled.div`
    ${() => css`
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 1;
        visibility: visible;
        transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
    `}
`;

export const Content = styled.div`
    background-color: white;
    padding: 20px;
    width: 70%;
`;

