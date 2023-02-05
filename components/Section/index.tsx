import { Box } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

interface ISection {
	children: ReactNode;
}

function Section(props: ISection) {
	const { children } = props;
	return (
		<Box pt='100px' pb='50px' px='0px'>
			{children}
		</Box>
	);
}

export default Section;
