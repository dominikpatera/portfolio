import styled from 'styled-components';
import { colors } from '../../../../styles/theme';

export const MobileMenuIndicator = styled.button<{ expanded: boolean }>`
	width: 2rem;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background: transparent;
	border: none;
	user-select: none;
	cursor: pointer;

	& .menu-toggle-wrap {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
		pointer-events: none;
	}

	& .menu-toggle-wrap::before {
		transform: ${props =>
			props.expanded ? 'translateY(2px) rotate(-45deg)' : 'translateY(-0.25rem) rotate(0deg)'};
	}

	& .menu-toggle-wrap::after {
		transform: ${props =>
			props.expanded ? 'translateY(0) rotate(45deg)' : 'translateY(0.25rem) rotate(0deg)'};
	}

	& .menu-toggle-wrap::before,
	& .menu-toggle-wrap::after {
		content: '';
		display: block;
		height: 2px;
		width: 22px;
		background-color: #fff;
		transition: transform 0.15s ease;
	}
`;

export const Menu = styled.ul<{ expanded: boolean }>`
	display: flex;
	flex-direction: column;
	align-items: center;
	position: absolute;
	opacity: ${props => (props.expanded ? 1 : 0)};
	transition: opacity 0.15s ease;
	left: 0;
	top: 4rem;
	padding: 2rem;
	margin: 0;
	width: 100vw;
	height: calc(100vh - 4rem);
	/* height: fit-content; */
	gap: 1rem;
	font-size: larger;
`;

export const Item = styled.li<{ active: boolean }>`
	list-style-type: none;
	color: ${props => (!props.active ? colors.accents[4] : colors.foreground)};
`;
