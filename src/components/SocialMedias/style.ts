import styled, { css } from "styled-components";

export const SocialMediasUl = styled.ul`
    ${() => css`
        position: absolute;
        left: 6.25rem;
        bottom: 1.25rem;
        display: flex;
        align-items: center;
    `}
`;

export const SocialMediasLi = styled.li`
    ${() => css`
        margin-right: 10px;
        list-style: none;
    `}
`;

export const SocialMediasImg = styled.img`
    ${() => css`
        max-width: 2.5rem;
        transform: scale(0.5);
        opacity: 0.7;
        transition: 0.7s;
        filter: invert(100%);
        &:hover{
            transform: scale(0.7);
            opacity: 1;
        }
    `}
`;