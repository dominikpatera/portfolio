import styled, { keyframes } from 'styled-components';
import { colors } from '../../../../../styles/theme';

const gradientAnimation = keyframes`
  0% {
    opacity: 1;
  }
  25% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
`;

export const Text = styled.div<TextProps>`
	/* width: 100%; */
	position: relative;
	font-family: 'Inter';
	font-style: normal;
	font-weight: 800;
	font-size: ${p => p.fontSize};
	letter-spacing: ${p => p.letterSpacing};
	padding: ${p => p.padding};
	margin: ${p => p.margin};
	line-height: 90%;

	background: ${p => p.color};
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	background-clip: text;
	text-fill-color: transparent;
`;

export const GradientText = styled.div<GradientTextProps>`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0%;
	background: ${colors.foreground};
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	background-clip: text;
	text-fill-color: transparent;
	opacity: 1;
	animation: ${gradientAnimation} 15s ${p => p.delay * 5}s infinite;
`;

type TextProps = {
	fontSize: string;
	letterSpacing: string;
	padding: string;
	margin: string;
	color: string;
};

type GradientTextProps = {
	delay: number;
};
