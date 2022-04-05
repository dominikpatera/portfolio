import styled from 'styled-components';
import { media } from '../../../styles/theme';

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	/* width: 100%; */
	justify-content: center;
	transform: scale(0.5);

	@media (min-width: ${media.sm}) {
		transform: scale(0.75);
	}
	/* align-items: center; */
	@media (min-width: ${media.lg}) {
		transform: scale(1);
	}
`;

export const HelloSection = styled.section`
	display: flex;
	flex-direction: column;
	width: 100%;
	min-height: 400px;
	justify-content: center;
	align-items: center;
`;
