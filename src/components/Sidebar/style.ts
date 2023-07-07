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
        top: 3.5rem;
        right: 1.5rem;
        width: 3.125rem;
        height: 3.125rem;
        background: ${theme.colors.bgColorDark} url(${menu});
        background-size: 1.875rem;
        background-position: center;
        background-repeat: no-repeat;
        transition: 0.2s;
        cursor: pointer;
        z-index: 1000;
  
        ${isActive && css`
            background: ${theme.colors.bgColorDark} url(${close});
            background-size: 1.563rem;
            background-position: center;
            background-repeat: no-repeat;
        `}
    `}
`;

interface SidebarProps {
    isActive: boolean;
}

export const Sidebar = styled.div<SidebarProps>`
    ${({ isActive, theme }) => css`
        position: fixed;
        background: ${theme.colors.bgColorDark};
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.5s;
        height: 100%;
        z-index: 100;
        right: -100%;

        ${isActive && css`
            right: 0;
        `}
    `}
`;

export const MenuLi = styled.li`
  ${() => css`
        list-style:none;
  `}
`;

export const MenuA = styled.a`
  ${({theme}) => css`
        color: ${theme.colors.textColorWhite};
        text-decoration: none;
        font-size: ${theme.constants.logoFontSize};
        margin: 10px 0;
        font-weight: 400;
        letter-spacing: 2px;
        text-transform: uppercase;
        transition: .5s;
        &:hover{
            color: ${theme.colors.textColorGreen};
        }
  `}
`;
