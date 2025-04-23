import { Box, Container, Text } from '@chakra-ui/react';

export default function Footer() {
	return (
		<Box bg='white'>
			<Container maxWidth='4xl' my='20px'>
				<Text fontSize={12} fontWeight='semibold' textAlign='center'>
					Copyright© 2025 twinedo.dev . All Rights Reserved
				</Text>
			</Container>
		</Box>
	);
}
