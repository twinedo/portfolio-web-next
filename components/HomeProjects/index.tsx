import { Box, Container, Divider, Flex, Stack, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import Section from 'components/Section';
import Link from 'next/link';
import { BiChevronRight } from 'react-icons/bi';
import lodash from 'lodash';
import { getDataFromAPI } from 'services/handler/handlerAPI';
import { IProject } from 'models/project_model';
import { AiOutlineMobile } from 'react-icons/ai';
import { TbWorld } from 'react-icons/tb';

export default function HomeProjects() {
	const [loading, setLoading] = useState(true);
	const [dataListMobile, setDataListMobile] = useState<Array<IProject>>([]);

	useEffect(() => {
		setLoading(true);

		getDataFromAPI('mobile').then((res: any) => {
			const sortYear = lodash.orderBy(res, 'year', 'desc');
			const slice5 = sortYear.slice(0, 4);

			setDataListMobile(slice5);
		});
		setTimeout(() => {
			setLoading(false);
		}, 2000);
		return () => {
			setLoading(false);
		};
	}, []);

	const settings = {
		dots: true,
		infinite: dataListMobile.length > 3,
		arrows: false,
		autoplay: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

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
							<Link href='/projects'>
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
									<Box key={o.key} px='10px' py='20px'>
										<Stack
											spacing={3}
											borderRadius={8}
											bg='#1e3f66'
											cursor='pointer'
											_hover={{
												boxShadow: 'rgba(255, 255, 255, 0.8) 0px 2px 8px 0px',
											}}
										>
											<Box width='100%' height='100px'>
												<img
													src={o.display}
													alt='image'
													style={{
														objectFit: 'cover',
														objectPosition: 'center',
														width: '100%',
														height: '100%',
														overflow: 'hidden',
														borderTopRightRadius: 8,
														borderTopLeftRadius: 8,
													}}
												/>
											</Box>
											<Box pt='5px' pb='10px' px='10px'>
												<Stack spacing='2'>
													<Flex
														flexDirection='row'
														align='center'
														justify='space-between'
													>
														<Flex flex='1'>
															<Text
																color='white'
																fontWeight='semibold'
																noOfLines={1}
															>
																{o.name}
															</Text>
														</Flex>
														{o.platform === 'mobile' ? (
															<AiOutlineMobile color='white' />
														) : (
															<TbWorld color='white' />
														)}
													</Flex>
													<Divider width='100%' bg='white' />
													<Stack
														direction='row'
														justifyContent='space-between'
														alignItems='center'
													>
														<Text
															color='white'
															fontSize={12}
															textAlign='center'
														>
															{o.year}
														</Text>
														<Link
															href={{
																pathname: `projects/${o.key}`,
																query: { platform: o.platform },
															}}
															passHref
														>
															<Text
																color='white'
																border='1px solid white'
																borderRadius={15}
																py='5px'
																px='20px'
																fontSize={12}
																textAlign='center'
																_hover={{ bg: 'white', color: 'black' }}
															>
																Detail
															</Text>
														</Link>
													</Stack>
												</Stack>
											</Box>
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
