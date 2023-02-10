import {
	Box,
	ChakraComponent,
	ChakraProps,
	Flex,
	Stack,
	Text,
} from '@chakra-ui/react';
import React, { ReactNode } from 'react';

interface IProps {
	bgCard: string;
	children: ReactNode;
	dateText: string;
	containerProps?: ChakraProps;
}

export default function Timeline(props: IProps) {
	const { bgCard, children, dateText, containerProps } = props;

	return (
		<Stack direction='row' spacing='5' {...containerProps}>
			<Flex flex={1}>
				<Text>{dateText}</Text>
			</Flex>
			<Flex flex={4}>
				<Box borderLeft='2px solid grey' pl='30px'>
					<Box p='20px' borderRadius={20} bg={bgCard}>
						{children}
					</Box>
				</Box>
			</Flex>
		</Stack>
	);
}
