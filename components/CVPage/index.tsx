import { Box, Button, Container, Flex, Stack, Text } from '@chakra-ui/react';
import Certifications from 'components/Certifications';
import Education from 'components/Education';
import Section from 'components/Section';
import Stacks from 'components/Stacks';
import Timeline from 'components/Timeline';
import { FcDownload } from 'react-icons/fc';
import { downloadHandler } from 'services/handler/handlerAPI';
import { generateRandomLightColor } from 'services/utils/fun';

export default function CVPage() {
	const onDownloadClick = () => {
		downloadHandler()
			.then((res) => {
				window.open(res);
			})
			.catch((error) => console.log('err dl', error));
	};

	return (
		<Box bg='white'>
			<Section>
				<Container maxWidth='4xl'>
					<Flex
						flexDirection='row'
						justifyContent='space-between'
						alignItems='center'
					>
						<Text fontWeight='bold' fontSize={48}>
							Curriculum Vitae
						</Text>
						<Button variant='outline' onClick={onDownloadClick}>
							<Text mr='10px'>Download</Text>
							<FcDownload />
						</Button>
					</Flex>
				</Container>
				<Container maxWidth='4xl' mt='30px'>
					<Stack spacing='5'>
						<Stack direction='row' spacing='4' align='center' id='experiences'>
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
							<Timeline
								dateText='Mar 2020 – Feb 2021'
								bgCard={generateRandomLightColor()}
							>
								<Text fontWeight='bold'>
									PT Dejavu Express - Mobile Developer
								</Text>
								<Text>
									- Build TruckkingDriver app to track and monitoring status
									update when driver delivering the package (version 1).
									<br />- Pair Programmer to build Truckking web based
									application.
									<br />- Helping Operation how to operate application,
									collecting bug report from user, fix bug.
								</Text>
							</Timeline>
							<Timeline
								dateText='Jun 2019 – Feb 2020'
								bgCard={generateRandomLightColor()}
							>
								<Text fontWeight='bold'>
									Universitas Pertamina - Programmer
								</Text>
								<Text>
									- Build MONAS (Monitoring Asset) application, android based.
									<br />- Build Employee Presence application with Face
									Recognition feature.
								</Text>
							</Timeline>

							<Timeline
								dateText='Jan 2018 – Dec 2018'
								bgCard={generateRandomLightColor()}
							>
								<Text fontWeight='bold'>
									PT JASARAHARJA PUTERA - Administration Staff
								</Text>
								<Text>
									- Input/Process/Provide client registered data
									<br />- IT Support at Kelapa Gading Branch office. Make sure
									that IT Pheriperal work well during working hours.
									<br />- Help manage asset stock (paper, policy, receipt,
									operational needs, etc.) at Kelapa Gading branch office.
								</Text>
							</Timeline>
						</Stack>
					</Stack>
				</Container>
			</Section>

			<Education />
			<Certifications />
			<Stacks />
		</Box>
	);
}
