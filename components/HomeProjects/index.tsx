import { Box, Container, Flex, Stack, Text } from '@chakra-ui/react';
import { IPost } from 'models/post_model';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import Section from 'components/Section';
import Link from 'next/link';
import { BiChevronRight } from 'react-icons/bi';
import lodash from 'lodash';
import { getDataFromAPI } from 'services/handler/handlerAPI';
import { IProject } from 'models/project_model';
import Image from 'next/image';

export default function HomeProjects() {
	const [data, setData] = useState<Array<IPost>>([]);

	const settings = {
		dots: true,
		infinite: data.length > 3,
		arrows: false,
		autoplay: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
	};

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then((response) => response.json())
			.then((json: Array<IPost>) => {
				setData(json);
			});
	}, []);

	const listMobile = [
		{
			id: 1,
			text: 'Android Native',
			isClicked: false,
			code: 'n',
			platform: 'mobile',
		},
		{
			id: 2,
			text: 'React Native',
			isClicked: false,
			code: 'rn',
			platform: 'mobile',
		},
		{
			id: 3,
			text: 'Flutter',
			isClicked: false,
			code: 'f',
			platform: 'mobile',
		},
		{
			id: 4,
			text: 'Ionic',
			isClicked: false,
			code: 'i',
			platform: 'mobile',
		},
	];

	const [loading, setLoading] = useState(true);

	const [listMobileApp, setListMobileApp] = useState(listMobile);

	const [dataListMobile, setDataListMobile] = useState<Array<IProject>>([]);
	const [filteredListMobile, setFilteredListMobile] =
		useState<Array<IProject>>(dataListMobile);

	useEffect(() => {
		setLoading(true);

		getDataFromAPI('mobile').then((res: any) => {
			console.log('ressss datacoy', res);
			const sortYear = lodash.orderBy(res, 'year', 'desc');
			console.log('sortYear', sortYear);
			const slice5 = sortYear.slice(0, 4);

			setDataListMobile(slice5);
			setFilteredListMobile(sortYear);
		});
		setTimeout(() => {
			setLoading(false);
		}, 2000);
		return () => {
			console.log('');
			// setLoading(false);
		};
	}, []);

	return (
		<Box bg='#192841'>
			<Section>
				<Container maxWidth='4xl'>
					<Stack spacing={5}>
						<Stack
							direction='row'
							spacing='4'
							align='center'
							justify='space-between'
						>
							<Stack direction='row' spacing='4' align='center'>
								<Text
									color='white'
									fontWeight='bold'
									fontSize='16px'
									letterSpacing='3px'
								>
									PROJECTS
								</Text>
								<Box h='3px' w='45px' bg='white' />
							</Stack>
							<Link href='#'>
								<Stack
									direction='row'
									align='center'
									_hover={{ color: 'yellow' }}
								>
									<Text
										color='white'
										fontSize={12}
										fontWeight='semibold'
										cursor='pointer'
									>
										View More
									</Text>
									<BiChevronRight color='white' fontSize={20} />
								</Stack>
							</Link>
						</Stack>
						<Box overflow='hidden' w='100%'>
							<Slider {...settings}>
								{dataListMobile.map((o: IProject, i: number) => (
									<Box key={o.key} p='10px'>
										<Stack
											spacing={10}
											borderRadius={15}
											bg='#1e3f66'
											_hover={{
												boxShadow: 'rgba(255, 255, 255, 0.8) 0px 8px 24px',
											}}
										>
											<Box width='100%' height='100px'>
												<img
													src={o.display}
													// width='100%'
													// height='100%'
													alt='image'
													// fill
													// objectFit='contain'
													style={{
														objectFit: 'cover',
														objectPosition: 'center',
														width: '100%',
														height: '100%',
														overflow: 'hidden',
														borderTopRightRadius: 15,
														borderTopLeftRadius: 15,
													}}
													// fill
												/>
											</Box>
											<Text color='white'>{o.name}</Text>
										</Stack>
									</Box>
								))}
							</Slider>
						</Box>
					</Stack>
				</Container>
			</Section>
		</Box>
	);
}
