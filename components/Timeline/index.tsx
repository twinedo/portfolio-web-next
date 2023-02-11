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
		<Stack
			direction={['column', 'row']}
			spacing={['2', '5']}
			{...containerProps}
		>
			<Flex flex={1}>
				<Text>{dateText}</Text>
			</Flex>
			<Flex flex={4}>
				<Box
					borderLeft={['0px', '2px solid grey']}
					pl={['0px', '30px']}
					mb={['30px', 0]}
				>
					<Box p='20px' borderRadius={20} bg={bgCard}>
						{children}
					</Box>
				</Box>
			</Flex>
		</Stack>
	);
}
