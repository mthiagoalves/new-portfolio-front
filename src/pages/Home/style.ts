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

