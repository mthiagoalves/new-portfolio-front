import styled, {css} from "styled-components";

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

export const HomeHeaderDetails = styled.div`
	${() => css`
		display: flex;
		justify-content: space-between;
        padding: 10px 20px;
	`}
`;

export const HomeHeaderDetailsLogo = styled.h1`
	${({ theme }) => css`
		${theme.mixins.logoStyle};
		text-transform: uppercase;
		margin: 0;
        font-size:
	`}
`;

export const HomeHeaderDetailsDate = styled.p`
	${() => css`
		text-transform: capitalize;
	`}
`;

export const HomeHeaderNavBar = styled.div`
	${({ theme }) => css`
		display: flex;
        justify-content: space-between;
		gap: 10px;
        margin: 0px 20px
	
	`}
`;