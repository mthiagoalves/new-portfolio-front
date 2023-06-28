import styled, { css } from "styled-components";

export const FirstSection = styled.div`
    ${() => css `
		max-width: 70rem;
        margin: 0 auto;
        position: relative;
	`}
`;

export const BorderContainer = styled.div`
    ${({theme}) => css `
        position: relative;
        margin: 30px 0;
        padding: 0 20px;
        border: 1px solid #575151;

        &::after{
            content: "";
            position: absolute;
            height: 20px;
            width: 20px;
            background-color:  #fff;
            transform: rotate(45deg);
        },
        &::after{
            top: -11px;
            right: -10px;
            border-bottom: 1px solid #575151;
        },
        
    `}
`;

export const DivImage = styled.div`
    ${() => css ` 
   
	`}
`;
