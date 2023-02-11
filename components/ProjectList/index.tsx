import { useState, useEffect } from 'react';
import {
	Box,
	Container,
	Divider,
	Flex,
	SimpleGrid,
	Stack,
	Text,
} from '@chakra-ui/react';
import Section from 'components/Section';
import { AiOutlineMobile } from 'react-icons/ai';
import { TbWorld } from 'react-icons/tb';
import { IProject } from 'models/project_model';
import { getDataFromAPI } from 'services/handler/handlerAPI';
import lodash from 'lodash';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function ProjectList() {
	const router = useRouter();
	const [selectedTab, setSelectedTab] = useState<'mobile' | 'website'>(
		'mobile'
	);

	const [dataList, setDataList] = useState<Array<IProject>>([]);

	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);

		getDataFromAPI(selectedTab).then((res: any) => {
			console.log('ressss datacoy', res);
			const sortYear = lodash.orderBy(res, 'year', 'desc');
			console.log('sortYear', sortYear);

			setDataList(sortYear);
			// setFilteredListMobile(sortYear);
		});
		setTimeout(() => {
			setLoading(false);
		}, 2000);
		return () => {
			console.log('');
			setLoading(false);
		};
	}, [selectedTab]);

	function _onDetail(platform: string, key: string) {
		router.push({
			pathname: 'projects/' + key,
			query: platform,
		});
	}

	return (
		// <Box bgGradient='linear(to-br,rgba(1, 65, 255, 0),rgba(1, 65, 255, 0),rgba(1, 65, 255, 0.3))'>
		<Box>
			<Section>
				<Container maxW='4xl'>
					<Box>
						<Stack spacing='5'>
							<Text textAlign='center' fontWeight='bold' fontSize={48}>
								Projects
							</Text>
							<Box
								borderRadius={5}
								w='75%'
								alignSelf='center'
								boxShadow='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
							>
								<Flex
									flexDirection='row'
									alignItems='center'
									position='relative'
									justifyContent='space-around'
								>
									<Stack
										flex={1}
										direction='row'
										alignItems='center'
										justifyContent='center'
										borderTopLeftRadius={5}
										borderBottomLeftRadius={5}
										cursor='pointer'
										bg={
											selectedTab === 'mobile'
												? 'rgba(1, 65, 255, 0.3)'
												: 'lightgray'
										}
										h='40px'
										fontWeight='semibold'
										onClick={() => setSelectedTab('mobile')}
									>
										<AiOutlineMobile
											color={selectedTab === 'mobile' ? 'black' : 'grey'}
										/>
										<Text
											display={['none', 'flex']}
											color={selectedTab === 'mobile' ? 'black' : 'grey'}
										>
											Mobile Application
										</Text>
									</Stack>
									<Divider
										orientation='vertical'
										borderRadius={20}
										w='1px'
										h='30px'
										bg='lightblue'
										py='5px'
									/>
									<Stack
										flex={1}
										direction='row'
										alignItems='center'
										justifyContent='center'
										borderTopRightRadius={5}
										borderBottomRightRadius={5}
										cursor='pointer'
										bg={
											selectedTab === 'website'
												? 'rgba(1, 65, 255, 0.3)'
												: 'lightgray'
										}
										h='40px'
										onClick={() => setSelectedTab('website')}
									>
										<TbWorld
											color={selectedTab === 'website' ? 'black' : 'grey'}
										/>
										<Text
											display={['none', 'flex']}
											color={selectedTab === 'website' ? 'black' : 'grey'}
										>
											Web Application
										</Text>
									</Stack>
								</Flex>
							</Box>
							<Box>
								<SimpleGrid columns={[1, 2, 3]} spacing={10}>
									{dataList.map((o: IProject, i: number) => (
										<Box key={o.key} px='10px' py='20px'>
											<Stack
												spacing={3}
												borderRadius={8}
												bg='#1e3f66'
												cursor='pointer'
												_hover={{
													boxShadow: 'rgba(0, 0, 0, 0.8) 0px 2px 8px 0px',
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
															borderTopRightRadius: 8,
															borderTopLeftRadius: 8,
														}}
														// fill
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
																	// onClick={() => _onDetail(o.platform, o.key)}
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
								</SimpleGrid>
							</Box>
						</Stack>
					</Box>
				</Container>
			</Section>
		</Box>
	);
}
