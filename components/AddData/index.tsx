import {
	Box,
	Card,
	Container,
	Flex,
	FormControl,
	FormLabel,
	Input,
	Stack,
	Text,
	useColorModeValue,
	Select,
	Button,
} from '@chakra-ui/react';
import Section from 'components/Section';
import { IProject } from 'models/project_model';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { addDataToAPI, LogoutHandler } from 'services/handler/handlerAPI';

export default function AddData() {
	const router = useRouter();
	const [data, setData] = useState<IProject>({
		bucket: '',
		description: '',
		display: '',
		id: '',
		link_appstore: '',
		link_playstore: '',
		link_website: '',
		name: '',
		platform: '',
		tag: '',
		year: '',
	});

	const _onSubmit = () => {
		addDataToAPI(data)
			.then((res) => {
				console.log('ress add data', res);
			})
			.catch((err) => {
				console.log('err add data', err);
			});
		setData({} as IProject);
	};

	const _onLogout = () => {
		LogoutHandler()
			.then((res) => {
				if (res) {
					console.log('res logout', res);
					router.reload();
				}
			})
			.catch((err) => {
				console.log('err logout', err);
			});
	};

	return (
		<Flex
			minH={'100vh'}
			align={'center'}
			justify={'center'}
			bg={useColorModeValue('gray.50', 'gray.800')}
		>
			<Container maxW='4xl'>
				<Box maxW='4xl' p='30px'>
					<Flex
						flexDirection='row'
						justifyContent='space-between'
						alignItems='center'
					>
						<Text fontWeight='bold' fontSize={48}>
							Add Projects
						</Text>
						<Button variant='outline' onClick={_onLogout}>
							<Text>Logout</Text>
						</Button>
					</Flex>
					<Card bg='#192841' p='20px' color='white'>
						<Stack spacing={5}>
							<FormControl id='bucket'>
								<FormLabel>Bucket</FormLabel>
								<Input
									type='text'
									value={data.bucket}
									onChange={(e) =>
										setData({ ...data, bucket: e.currentTarget.value })
									}
								/>
							</FormControl>
							<FormControl id='description'>
								<FormLabel>Description</FormLabel>
								<Input
									type='text'
									value={data.description}
									onChange={(e) =>
										setData({ ...data, description: e.currentTarget.value })
									}
								/>
							</FormControl>
							<FormControl id='display'>
								<FormLabel>Display</FormLabel>
								<Input
									type='text'
									value={data.display}
									onChange={(e) =>
										setData({ ...data, display: e.currentTarget.value })
									}
								/>
							</FormControl>
							<FormControl id='id'>
								<FormLabel>ID</FormLabel>
								<Input
									type='text'
									value={data.id}
									onChange={(e) =>
										setData({ ...data, id: e.currentTarget.value })
									}
								/>
							</FormControl>
							{data.platform === 'mobile' && (
								<>
									<FormControl id='link_appstore'>
										<FormLabel>Link Appstore</FormLabel>
										<Input
											type='text'
											value={data.link_appstore}
											onChange={(e) =>
												setData({
													...data,
													link_appstore: e.currentTarget.value,
												})
											}
										/>
									</FormControl>
									<FormControl id='link_playstore'>
										<FormLabel>Link Playstore</FormLabel>
										<Input
											type='text'
											value={data.link_playstore}
											onChange={(e) =>
												setData({
													...data,
													link_playstore: e.currentTarget.value,
												})
											}
										/>
									</FormControl>
								</>
							)}
							<FormControl id='link_website'>
								<FormLabel>Link Website</FormLabel>
								<Input
									type='text'
									value={data.link_website}
									onChange={(e) =>
										setData({ ...data, link_website: e.currentTarget.value })
									}
								/>
							</FormControl>
							<FormControl id='project_name'>
								<FormLabel>Project Name</FormLabel>
								<Input
									type='text'
									value={data.name}
									onChange={(e) =>
										setData({ ...data, name: e.currentTarget.value })
									}
								/>
							</FormControl>
							<FormControl id='platform'>
								<FormLabel>Platform</FormLabel>
								<Select
									placeholder='Select option'
									value={data.platform}
									onChange={(e) =>
										setData({ ...data, platform: e.currentTarget.value })
									}
								>
									<option value='mobile'>Mobile</option>
									<option value='website'>Website</option>
								</Select>
							</FormControl>
							<FormControl id='tag'>
								<FormLabel>Tag</FormLabel>
								<Select
									placeholder='Select option'
									value={data.tag}
									onChange={(e) =>
										setData({ ...data, tag: e.currentTarget.value })
									}
								>
									<option value='React'>React</option>
									<option value='NextJs'>NextJs</option>
									<option value='React Native'>React Native</option>
									<option value='Flutter'>Flutter</option>
								</Select>
							</FormControl>
							<FormControl id='year'>
								<FormLabel>Year</FormLabel>
								<Input
									type='text'
									value={data.year}
									onChange={(e) =>
										setData({ ...data, year: e.currentTarget.value })
									}
								/>
							</FormControl>
							<Button variant='Outline' bg='white' onClick={_onSubmit}>
								<Text color='black'>Submit</Text>
							</Button>
						</Stack>
					</Card>
				</Box>
			</Container>
		</Flex>
	);
}
