import Logo from '../../components/Header/Logo';
import Menu from '../../components/Header/Menu';
import { Header as StyledHeader } from './styles';

const Header: React.FC<Props> = props => {
	return (
		<StyledHeader>
			<nav>
				<Logo />
			</nav>
			<Menu />
		</StyledHeader>
	);
};

type Props = {};

export default Header;
