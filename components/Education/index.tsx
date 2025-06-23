import { Box, Container, Flex, Stack, Text } from '@chakra-ui/react';
import Section from 'components/Section';
import Timeline from 'components/Timeline';
import { generateRandomLightColor } from 'services/utils/fun';

export default function Education() {
	return (
		<Box bgGradient='linear(to-b , #add8e6,#c2cdd1)'>
			<Section>
				<Container maxWidth='4xl'>
					<Stack spacing={5}>
						<Stack direction='row' spacing='4' align='center'>
							<Text fontWeight='bold' fontSize='16px' letterSpacing='3px'>
								EDUCATION
							</Text>
							<Box h='3px' w='45px' bg='black' />
						</Stack>

						<Timeline
							dateText='2013 - 2017'
							bgCard={generateRandomLightColor()}
						>
							<Text fontWeight='bold'>
								Informatics Engineering - Gunadarma University
							</Text>
							<Text>Bachelor`s degree graduate</Text>
						</Timeline>
						{/* <Timeline
							dateText='2010 - 2013'
							bgCard={generateRandomLightColor()}
						>
							<Text fontWeight='bold'>Science - SMAN 51 Jakarta</Text>
							<Text>High school graduate</Text>
						</Timeline>
						<Timeline
							dateText='2007 - 2010'
							bgCard={generateRandomLightColor()}
						>
							<Text fontWeight='bold'>SMPN 91 Jakarta</Text>
							<Text>Junior school graduate</Text>
						</Timeline>
						<Timeline
							dateText='2001 – 2007'
							bgCard={generateRandomLightColor()}
						>
							<Text fontWeight='bold'>SDN Pekayon 03 Pagi</Text>
							<Text>Elementary School</Text>
						</Timeline> */}
					</Stack>
				</Container>
			</Section>
		</Box>
	);
}
