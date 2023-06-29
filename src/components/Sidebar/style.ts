import styled, { css } from "styled-components";
import close from 'assets/images/close.png';
import menu from 'assets/images/menu.png';

interface ToggleContainerProps {
    isActive: boolean;
    onClick: () => void;
}

export const ToggleContainer = styled.div<ToggleContainerProps>`
    ${({ isActive, theme }) => css`
        position: fixed;
        top: 2.6rem;
        right: 1.5rem;
        width: 50px;
        height: 50px;
        background: ${theme.colors.bgColorDark} url(${menu});
        background-size: 30px;
        background-position: center;
        background-repeat: no-repeat;
        transition: 0.2s;
        cursor: pointer;
        z-index: 1000;
  
        ${isActive && css`
            background: ${theme.colors.bgColorDark} url(${close});
            background-size: 25px;
            background-position: center;
            background-repeat: no-repeat;
        `}
    `}
`;

interface SidebarProps {
    isActive: boolean;
  }

export const Sidebar = styled.div<SidebarProps>`
    ${({isActive, theme}) => css`
        position: fixed;
        background: ${theme.colors.bgColorDark};
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.5s;
        padding: 40px;
        z-index: 100;
        right: -100%;

        ${isActive && css`
            right: 0;
        `}
    `}
`;
