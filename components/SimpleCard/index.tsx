import {
	Flex,
	Box,
	FormControl,
	FormLabel,
	Input,
	Checkbox,
	Stack,
	Link,
	Button,
	Heading,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { LoginHandler } from 'services/handler/handlerAPI';

export default function SimpleCard() {
	const [data, setData] = useState({
		username: 'admin@twinedo.dev',
		password: '',
	});
	const router = useRouter();

	const _onSubmit = () => {
		LoginHandler(data)
			.then((res) => {
				console.log('res login', res);
				router.reload();
			})
			.catch((err) => {
				console.log('err login', err);
			});
	};
	return (
		<Flex
			minH={'100vh'}
			align={'center'}
			justify={'center'}
			bg={useColorModeValue('gray.50', 'gray.800')}
		>
			<Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
				<Stack align={'center'}>
					<Heading fontSize={'4xl'}>Sign in to your account</Heading>
				</Stack>
				<Box
					rounded={'lg'}
					bg={useColorModeValue('white', 'gray.700')}
					boxShadow={'lg'}
					p={8}
				>
					<Stack spacing={4}>
						<FormControl id='email'>
							<FormLabel>Email address</FormLabel>
							<Input
								type='email'
								value={data.username}
								onChange={(e) =>
									setData({ ...data, username: e.currentTarget.value })
								}
							/>
						</FormControl>
						<FormControl id='password'>
							<FormLabel>Password</FormLabel>
							<Input
								type='password'
								value={data.password}
								onChange={(e) =>
									setData({ ...data, password: e.currentTarget.value })
								}
							/>
						</FormControl>
						<Stack spacing={10}>
							<Button
								bg={'blue.400'}
								color={'white'}
								_hover={{
									bg: 'blue.500',
								}}
								onClick={_onSubmit}
							>
								Sign in
							</Button>
						</Stack>
					</Stack>
				</Box>
			</Stack>
		</Flex>
	);
}
