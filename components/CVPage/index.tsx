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
			.catch((error) => alert(JSON.stringify(error)));
	};

	return (
		<Box bg='white'>
			<Section>
				<Container maxWidth='4xl'>
					<Flex
						flexDirection={['column', 'row']}
						justifyContent='space-between'
						alignItems={['flex-start', 'center']}>
						<Text fontWeight='bold' fontSize={[24, 36, 48]}>
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
								dateText='Jan 2022 - May 2023'
								bgCard={generateRandomLightColor()}>
								<Text fontWeight='bold'>DIGITSENSE LTD - Mobile Developer</Text>
								<Text>
									- Build Myrlabs app to guide user as travel navigation
									<br />- Not only build, i analyze the requirement from client,
									give and take an advice to build an app, improvement
									<br />- Help Colleague to complete small task in web
									application
								</Text>
							</Timeline>
							<Timeline
								dateText='Mar 2020 - Des 2021'
								bgCard={generateRandomLightColor()}>
								<Text fontWeight='bold'>
									PT TRUCKKING LINTAS SARANA - Mobile Developer
								</Text>
								<Text>
									- Build TruckkingDriver app to track and monitoring status
									update when driver delivering the package (version 1 & version
									2).
									<br />- Pair Programmer to build Truckking web based
									application and Vendor Management System web based.
									<br />- Socialize The Truck Driver and Operation how to use
									app, what’s do and don’t, receive any bugs/error, then fixing
								</Text>
							</Timeline>
							<Timeline
								dateText='Jun 2019 – Feb 2020'
								bgCard={generateRandomLightColor()}>
								<Text fontWeight='bold'>PERTAMINA UNIVERSITY - Programmer</Text>
								<Text>
									- Build MONAS (Monitoring Asset) application, android based.
									<br />- Build Employee Attendance Application with Face
									Recognition feature.
									<br />- Not only build, i socialize the use of application to
									the office boy (for MONAS)
									<br />- Receive any complaint, bugs. error and fixing
								</Text>
							</Timeline>

							<Timeline
								dateText='Jan 2018 – Dec 2018'
								bgCard={generateRandomLightColor()}>
								<Text fontWeight='bold'>
									PT JASARAHARJA PUTERA - Administration & IT Support
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
