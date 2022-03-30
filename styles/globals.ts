import { css } from 'styled-components';
import { media } from './theme';
export const layout = css`
	padding-inline: 1.5rem;

	@media (min-width: ${media.lg}) {
		padding-inline: 4rem;
	}

	@media (min-width: ${media.xxl}) {
		padding-inline: 8rem;
	}
`;
