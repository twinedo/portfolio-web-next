import { Box, Container, Text } from '@chakra-ui/react';
import Section from 'components/Section';

export default function ProjectList() {
	return (
		<Box bgGradient='linear(to-br,rgba(1, 65, 255, 0),rgba(1, 65, 255, 0),rgba(1, 65, 255, 0.3))'>
			<Section>
				<Container maxW='4xl' h='100vh'>
					<Text>Test</Text>
				</Container>
			</Section>
		</Box>
	);
}
