import DetailProject from 'components/DetailProject';
import Header from 'components/Header';
import { IProject } from 'models/project_model';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import { getDetailProjectbyKey, getImages } from 'services/handler/handlerAPI';

interface IProps {
	data: IProject;
	imageData: Array<string>;
}

export default function Detail(props: IProps) {
	const { data, imageData } = props;
	return (
		<>
			<Head>
				<title>twinedo.dev</title>
				<meta name='description' content='Detail Project' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header />
			<DetailProject data={data} imageData={imageData} />
		</>
	);
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
	const { query, params }: any = context;
	const { platform }: any = query;

	const response: any = await getDetailProjectbyKey(platform, params?.key);

	const resImage = await getImages(response?.platform, response?.bucket);

	return {
		props: {
			query,
			params,
			data: response,
			imageData: resImage,
		}, // will be passed to the page component as props
	};
}
