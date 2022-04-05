import type { NextPage } from 'next';
import Layout from '../layout';
import { HelloSection, Content } from './styles';
import Text from '../components/Main/Hello/Text';
import { useState } from 'react';

const Home: NextPage = () => {
	return (
		<Layout
			title="Dominik Patera - Frontend Developer"
			description="Dominik Patera - Frontend Developer 🚀"
		>
			<HelloSection>
				<Content>
					<Text
						fontSize="8rem"
						letterSpacing="-0.7rem"
						position={0}
						gradientStyle="linear-gradient(270deg, #FF82DC 32.09%, #AC047D 67.48%)"
					>
						Dominik
					</Text>
					<Text
						fontSize="8rem"
						letterSpacing="0.66rem"
						position={1}
						gradientStyle="linear-gradient(90deg, #0094FF 33.1%, #AAB3FF 67.37%)"
					>
						Patera
					</Text>
					<Text
						fontSize="3.175rem"
						letterSpacing="0.54rem"
						position={2}
						gradientStyle="linear-gradient(270deg, #B4FF9A 23.51%, #00A21A 76.61%)"
						margin="2rem 0 0 0"
						padding="0 0 0.5rem 0.35rem"
					>
						Frontend Dev.
					</Text>
				</Content>
			</HelloSection>
		</Layout>
	);
};

export default Home;
