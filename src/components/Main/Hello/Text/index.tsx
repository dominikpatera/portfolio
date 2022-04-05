import { Text as StyledText, GradientText } from './styles';

const Text: React.FC<Props> = ({
	position,
	gradientStyle,
	fontSize,
	letterSpacing,
	padding = '0',
	margin = '0',
	children,
}) => {
	return (
		// <CSSTransition in={gradient} timeout={5000} classNames="gradient">
		<StyledText
			fontSize={fontSize}
			letterSpacing={letterSpacing}
			padding={padding}
			margin={margin}
			color={gradientStyle}
		>
			{children}
			<GradientText delay={position}>{children}</GradientText>
		</StyledText>
		// </CSSTransition>
	);
};

type Props = {
	position: number;
	gradientStyle: string;
	fontSize: string;
	letterSpacing: string;
	padding?: string;
	margin?: string;
};

export default Text;
