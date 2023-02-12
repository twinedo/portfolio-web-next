import { Flex, Spinner, useColorModeValue } from '@chakra-ui/react';
import AddData from 'components/AddData';
import SimpleCard from 'components/SimpleCard';
import { useEffect, useState } from 'react';
import { CheckAuth } from 'services/handler/handlerAPI';

export default function Forbidden() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(true);
		CheckAuth()
			.then((res) => {
				console.log('rescheck auth', res);
				setIsLoggedIn(true);
				setIsLoading(false);
			})
			.catch((err) => {
				setIsLoggedIn(false);
				setIsLoading(false);
				console.log('err checkauth', err);
			});
	}, []);

	if (isLoading) {
		return (
			<Flex minH={'100vh'} align={'center'} justify={'center'} bg={'gray.50'}>
				<Spinner size='xl' />
			</Flex>
		);
	}

	return isLoggedIn ? <AddData /> : <SimpleCard />;
}
