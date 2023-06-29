import styled, { css } from "styled-components";

export const HomeNavBar = styled.nav`
	${() => css`
    width:100%;
	position:fixed;
	z-index: 10;
	`}
`;


export const HomeNavbarTitle = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.textColor};
    text-transform: uppercase;
	margin: 0;
    padding-left: 2.5rem;
    font-size: ${theme.constants.logoFontSize};
	@media(max-width: 767px){
		
	}
  `}
`;

export const ContainerNavbar = styled.div`
    
`;

export const HomeUlNavbar = styled.ul`
    
`;

export const HomeLiNavbar = styled.li`
    
`;

export const HomeTagANavbar = styled.a`
	${({ theme }) => css`
		display:block;
		color: ${theme.colors.textColorDark};
		padding: 0.5rem;
		margin: 0rem 1rem;
		text-decoration: none;
		font-size: 1.05rem;

		&:hover {
			color: ${theme.colors.hoverColor};
		}
	`}
`;