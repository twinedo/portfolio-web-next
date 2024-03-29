import {
	Avatar,
	Box,
	Button,
	Container,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
	Flex,
	Stack,
	Text,
	useDisclosure,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import { FiMenu } from 'react-icons/fi';

export default function Header() {
	const router = useRouter();
	const path = router.pathname;
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = useRef();
	const redirects = [
		{
			id: '1',
			text: 'Home',
			url: '/',
		},
		{
			id: '2',
			text: 'Projects',
			url: '/projects',
		},
		{
			id: '3',
			text: 'CV',
			url: '/cv',
		},
	];

	return (
		<Box
			id='boxx'
			bg='white'
			position='fixed'
			top='0'
			left='0'
			zIndex={11}
			width='100%'
			boxShadow='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'>
			<Container maxWidth='4xl' marginLeft='auto' marginRight='auto'>
				<Flex
					flexDirection='row'
					justifyContent='space-between'
					align='center'
					py='10px'>
					<Link href='/'>
						<Stack
							direction='row'
							spacing={15}
							alignItems='center'
							cursor='pointer'>
							<Avatar
								width='50px'
								borderRadius='50%'
								name='Twin Edo'
								src='/img/profile.jpg'
							/>

							<Text fontWeight='bold' fontSize={20}>
								twinedo
							</Text>
						</Stack>
					</Link>
					<Stack
						direction='row'
						spacing={10}
						display={['none', 'none', 'flex']}>
						{redirects.map(
							(o: { id: string; text: string; url: string }, i: number) => (
								<Link href={o.url} key={o.id}>
									<Text
										fontWeight='bold'
										cursor='pointer'
										opacity={
											path === '/' && i === 0
												? 1
												: path.includes('projects') && i === 1
												? 1
												: path === o.url
												? 1
												: 0.5
										}>
										{o.text}
									</Text>
								</Link>
							)
						)}
					</Stack>
					<Button
						cursor='pointer'
						display={['flex', 'flex', 'none']}
						ref={btnRef.current}
						onClick={onOpen}>
						<FiMenu color='black' size={30} />
					</Button>
					<Drawer
						isOpen={isOpen}
						placement='right'
						onClose={onClose}
						finalFocusRef={btnRef.current}>
						<DrawerOverlay />
						<DrawerContent>
							<DrawerCloseButton />
							<DrawerHeader>Menu</DrawerHeader>

							<DrawerBody>
								<Stack spacing={10} height='100%' justify='center'>
									{redirects.map(
										(
											o: { id: string; text: string; url: string },
											i: number
										) => (
											<Link href={o.url} key={o.id}>
												<Text
													fontWeight='bold'
													cursor='pointer'
													opacity={
														path === '/' && i === 0
															? 1
															: path.includes('projects') && i === 1
															? 1
															: path === o.url
															? 1
															: 0.5
													}
													onClick={onClose}>
													{o.text}
												</Text>
											</Link>
										)
									)}
								</Stack>
							</DrawerBody>
						</DrawerContent>
					</Drawer>
				</Flex>
			</Container>
		</Box>
	);
}
