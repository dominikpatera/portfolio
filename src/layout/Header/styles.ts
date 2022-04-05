import styled from 'styled-components';
import { layout } from '../../../styles/globals';

export const Header = styled.header`
	${layout}
	position: absolute;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100vw;
	height: 5rem;
	padding-block: 0.75rem;
	z-index: 10000;
	background-color: hsla(0, 0%, 0%, 0.9); ;
`;
