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

						<Stack>
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
											<Text>Description</Text>
										</Box>
									</Box>
								</Flex>
							</Stack>
							<Stack direction='row' spacing='5' opacity={0.5}>
								<Flex flex={1}>
									<Text>Mar 2021 - Des 2021</Text>
								</Flex>
								<Flex flex={4}>
									<Box borderLeft='2px solid grey' pl='30px'>
										<Box p='20px' borderRadius={20} bg='lightblue'>
											<Text fontWeight='bold'>
												PT Trucking Lintas Sarana - Mobile Developer
											</Text>
											<Text>Description</Text>
										</Box>
									</Box>
								</Flex>
							</Stack>
							<Flex
								direction='row'
								columnGap={5}
								alignItems='center'
								justifyContent='center'
								position='absolute'
								bottom='10px'
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
