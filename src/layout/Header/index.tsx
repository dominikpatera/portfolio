import Logo from '../../components/Header/Logo';
import Menu from '../../components/Header/Menu';
import { Header as StyledHeader } from './styles';

const Header = () => {
	return (
		<StyledHeader>
			<Logo />
			<Menu />
		</StyledHeader>
	);
};

export default Header;
