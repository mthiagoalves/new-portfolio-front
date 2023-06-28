import styled, { css } from "styled-components";

export const Home = styled.section`
	${({ theme }) => css`
		background: ${theme.colors.bgColor};
		min-width: 100vw;
		min-height: 100vh;
		color: ${theme.colors.textColor};
		display: flex;
		justify-content: space-between;
	`}
`;

export const HomeContent = styled.main`
	${() => css`
		width: 100%;
		overflow: hidden;
		box-sizing: border-box;
	`}
`;

export const HomeNavBar = styled.nav`
    
`;

const StyledHomeNavbarTitle = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.textColor};
    text-transform: uppercase;
    margin: 0;
    font-size: 20px;
  `}
`;

export const HomeNavbarTitle = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.textColor};
    text-transform: uppercase;
    margin: 0;
    font-size: 20px;
  `}
`;

export const ContainerFluid = styled.div`
    ${() => css `
		max-width: 80rem;
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
		color: ${theme.colors.textColor};
		padding: 0.5rem;
		margin: 0rem 2rem;
		text-decoration: none;
		font-size: 16px;

		&:hover {
			color: ${theme.colors.hoverColor};
		}
	`}
`;