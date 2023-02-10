import { Box, ChakraComponent, ChakraProps } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

interface ISection {
	children: ReactNode;
	chakraProps?: ChakraProps;
}

function Section(props: ISection) {
	const { children, chakraProps } = props;
	return (
		<Box pt='100px' pb='50px' px='0px' {...chakraProps}>
			{children}
		</Box>
	);
}

export default Section;
