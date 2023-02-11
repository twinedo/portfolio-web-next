import { Box, Container, Stack, Text } from '@chakra-ui/react';
import Section from 'components/Section';
import Timeline from 'components/Timeline';
import { generateRandomLightColor } from 'services/utils/fun';

export default function Certifications() {
	return (
		<Section>
			<Container maxWidth='4xl'>
				<Stack spacing={5}>
					<Stack direction='row' spacing='4' align='center'>
						<Text fontWeight='bold' fontSize='16px' letterSpacing='3px'>
							CERTIFICATIONS
						</Text>
						<Box h='3px' w='45px' bg='black' />
					</Stack>

					<Timeline dateText='Feb 2021' bgCard={generateRandomLightColor()}>
						<Text fontWeight='bold'>
							Belajar Membuat Aplikasi Flutter untuk Pemula
						</Text>
						<Text>Dicoding.com</Text>
					</Timeline>
					<Timeline dateText='Jan 2020' bgCard={generateRandomLightColor()}>
						<Text fontWeight='bold'>Memulai Pemrograman Dengan Kotlin</Text>
						<Text>Dicoding.com</Text>
					</Timeline>
					<Timeline dateText='Oct 2019' bgCard={generateRandomLightColor()}>
						<Text fontWeight='bold'>Belajar Fundamental Aplikasi Android</Text>
						<Text>Dicoding.com</Text>
					</Timeline>
					<Timeline dateText='Jun 2019' bgCard={generateRandomLightColor()}>
						<Text fontWeight='bold'>
							Belajar Membuat Aplikasi Android untuk Pemula
						</Text>
						<Text>Dicoding.com</Text>
					</Timeline>
				</Stack>
			</Container>
		</Section>
	);
}
