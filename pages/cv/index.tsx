import CVPage from 'components/CVPage';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Head from 'next/head';

export default function CV() {
	return (
		<>
			<Head>
				<title>twinedo.dev</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header />
			<CVPage />
			<Footer />
		</>
	);
}
