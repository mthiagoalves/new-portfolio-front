import styled, { css } from "styled-components";

export const Home = styled.section`
	${({ theme }) => css`
		background: ${theme.colors.bgColorDark};
		position: relative;
		width: 100%;
		min-height: 100vh;
		color: ${theme.colors.textColorWhite};
	`}
`;

export const HomeContent = styled.main`
	${() => css`
		width: 100%;
		overflow: hidden;
		box-sizing: border-box;
		margin: 0 auto;
	`}
`;

