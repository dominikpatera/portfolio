import Head from 'next/head';

const Layout: React.FC<Props> = ({ children, title, description }) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
				<link rel="icon" href="/favicon.ico" />
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<link rel="manifest" href="/site.webmanifest" />
				<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
				<meta name="msapplication-TileColor" content="#000000" />
				<meta name="theme-color" content="#000000" />
			</Head>

			<main>{children}</main>

			<footer></footer>
		</>
	);
};

type Props = {
	title: string;
	description: string;
};

export default Layout;
