import { Box, Container, Flex, Stack, Text } from '@chakra-ui/react';
import Section from 'components/Section';

export default function CVPage() {
	return (
		<Box bg='white'>
			<Section>
				<Container maxWidth='4xl'>
					<Stack spacing='5'>
						<Text textAlign='center' fontWeight='bold' fontSize={48}>
							Curriculum Vitae
						</Text>
						<Stack direction='row' spacing='4' align='center'>
							<Text fontWeight='bold' fontSize='16px' letterSpacing='3px'>
								EXPERIENCES
							</Text>
							<Box h='3px' w='45px' bg='black' />
						</Stack>
						<Stack position='relative'>
							<Stack direction='row' spacing='5'>
								<Flex flex={1}>
									<Text>Jan 2022 - Currently</Text>
								</Flex>
								<Flex flex={4}>
									<Box borderLeft='2px solid grey' pl='30px'>
										<Box p='20px' borderRadius={20} bg='lightpink'>
											<Text fontWeight='bold'>
												DigitSense Ltd - Mobile Developer
											</Text>
											<Text>
												- Build web app Cointelegraph
												<br /> - Build web app Neuropix
												<br /> - Build mobile app Myrlabs
											</Text>
										</Box>
									</Box>
								</Flex>
							</Stack>
							<Stack direction='row' spacing='5' position='relative'>
								<Flex flex={1}>
									<Text>Mar 2021 - Des 2021</Text>
								</Flex>
								<Flex flex={4}>
									<Box borderLeft='2px solid grey' pl='30px'>
										<Box p='20px' borderRadius={20} bg='lightblue'>
											<Text fontWeight='bold'>
												PT Trucking Lintas Sarana - Mobile Developer
											</Text>
											<Text>
												- Build TruckkingDriver app to track and monitoring
												status update when driver delivering the package
												(version 2).
												<br />- Build Vendor Management System web based.
												<br />- Pair Programmer to build Truckking web based
												application.
												<br />- Helping Operation how to operate application,
												collecting bug report from user, fix bug.
											</Text>
										</Box>
									</Box>
								</Flex>
							</Stack>
							<Stack direction='row' spacing='5' position='relative'>
								<Flex flex={1}>
									<Text>Mar 2020 – Feb 2021</Text>
								</Flex>
								<Flex flex={4}>
									<Box borderLeft='2px solid grey' pl='30px'>
										<Box p='20px' borderRadius={20} bg='lightgreen'>
											<Text fontWeight='bold'>
												PT Dejavu Express - Mobile Developer
											</Text>
											<Text>
												- Build TruckkingDriver app to track and monitoring
												status update when driver delivering the package
												(version 1).
												<br />- Pair Programmer to build Truckking web based
												application.
												<br />- Helping Operation how to operate application,
												collecting bug report from user, fix bug.
											</Text>
										</Box>
									</Box>
								</Flex>
							</Stack>
							<Stack direction='row' spacing='5' position='relative'>
								<Flex flex={1}>
									<Text>Jun 2019 – Feb 2020</Text>
								</Flex>
								<Flex flex={4}>
									<Box borderLeft='2px solid grey' pl='30px'>
										<Box p='20px' borderRadius={20} bg='yellow'>
											<Text fontWeight='bold'>
												Universitas Pertamina - Programmer
											</Text>
											<Text>
												- Build MONAS (Monitoring Asset) application, android
												based.
												<br />- Build Employee Presence application with Face
												Recognition feature.
											</Text>
										</Box>
									</Box>
								</Flex>
							</Stack>
							<Stack direction='row' spacing='5' position='relative'>
								<Flex flex={1}>
									<Text>Jan 2018 – Dec 2018</Text>
								</Flex>
								<Flex flex={4}>
									<Box borderLeft='2px solid grey' pl='30px'>
										<Box p='20px' borderRadius={20} bg='lightyellow'>
											<Text fontWeight='bold'>
												PT JASARAHARJA PUTERA - Administration Staff
											</Text>
											<Text>
												- Input/Process/Provide client registered data
												<br />- IT Support at Kelapa Gading Branch office. Make
												sure that IT Pheriperal work well during working hours.
												<br />- Help manage asset stock (paper, policy, receipt,
												operational needs, etc.) at Kelapa Gading branch office.
											</Text>
										</Box>
									</Box>
								</Flex>
							</Stack>
						</Stack>
					</Stack>
				</Container>
			</Section>
		</Box>
	);
}
