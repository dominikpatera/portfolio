import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Menu as StyledMenu, Item as StyledItem, MobileMenuIndicator } from './styles';

const MENU_ITEMS = [
	{ href: '/', title: 'Home' },
	{ href: '/about', title: 'About' },
	{ href: '/projects', title: 'Projects' },
	{ href: '/blog', title: 'Blog' },
	{ href: '/contact', title: 'Contact' },
];

const Menu = () => {
	const [menuIsExpanded, setMenuIsExpanded] = useState(false);
	const { pathname } = useRouter();

	const toggleMenu = () => {
		setMenuIsExpanded(prevState => {
			document.querySelector('body')?.classList.remove('d-scroll-none');

			if (!prevState) document.querySelector('body')?.classList.add('d-scroll-none');
			return !prevState;
		});
	};

	return (
		<nav>
			<MobileMenuIndicator expanded={menuIsExpanded} onClick={toggleMenu}>
				<div className="menu-toggle-wrap"></div>
			</MobileMenuIndicator>
			<StyledMenu expanded={menuIsExpanded}>
				{MENU_ITEMS.map(({ title, href }) => (
					<StyledItem key={title} active={pathname === href} onClick={toggleMenu}>
						<Link href={href}>{title}</Link>
					</StyledItem>
				))}
			</StyledMenu>
		</nav>
	);
};

export default Menu;
