import {
	Box,
	Button,
	Container,
	Divider,
	Flex,
	Stack,
	Text,
} from '@chakra-ui/react';
import Section from 'components/Section';
import Timeline from 'components/Timeline';
import { generateRandomLightColor } from 'services/utils/fun';
import styles from 'styles/Home.module.css';

export default function Experiences() {
	return (
		<Box bg='white'>
			<Section>
				<Container maxWidth='4xl'>
					<Stack spacing={5}>
						<Stack direction='row' spacing='4' align='center'>
							<Text fontWeight='bold' fontSize='16px' letterSpacing='3px'>
								EXPERIENCES
							</Text>
							<Box h='3px' w='45px' bg='black' />
						</Stack>

						<Stack position='relative'>
							<Timeline
								dateText='Jan 2022 - Current'
								bgCard={generateRandomLightColor()}
							>
								<Text fontWeight='bold'>DigitSense Ltd - Mobile Developer</Text>
								<Text>
									- Build web app Cointelegraph
									<br /> - Build web app Neuropix
									<br /> - Build mobile app Myrlabs
								</Text>
							</Timeline>
							<Timeline
								dateText='Mar 2021 - Des 2021'
								bgCard={generateRandomLightColor()}
								containerProps={{ opacity: 0.5, position: 'relative' }}
							>
								<Text fontWeight='bold'>
									PT Trucking Lintas Sarana - Mobile Developer
								</Text>
								<Text>
									- Build TruckkingDriver app to track and monitoring status
									update when driver delivering the package (version 2).
									<br />- Build Vendor Management System web based.
									<br />- Pair Programmer to build Truckking web based
									application.
									<br />- Helping Operation how to operate application,
									collecting bug report from user, fix bug.
								</Text>
							</Timeline>

							<Flex
								direction='row'
								columnGap={5}
								alignItems='center'
								justifyContent='center'
								// position='absolute'
								// bottom='0px'
								// width='100%'
								maxWidth='4xl'
								bg='rgba(255, 255, 255, 0.9)'
								py='20px'
							>
								<Button
									bg='black'
									px='20px'
									py='10px'
									borderRadius={8}
									cursor='pointer'
									_hover={{
										boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px',
									}}
								>
									<Text className={styles.textBody} fontSize={12} color='white'>
										View More
									</Text>
								</Button>
							</Flex>
						</Stack>
					</Stack>
				</Container>
			</Section>
		</Box>
	);
}
