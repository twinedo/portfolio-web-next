import { Box, Button, Container, Flex, Stack, Text } from '@chakra-ui/react';
import Link from 'next/link';
import styles from 'styles/Home.module.css';

export default function Hero() {
	return (
		<Box bgGradient='linear(to-br,rgba(1, 65, 255, 0),rgba(1, 65, 255, 0),rgba(1, 65, 255, 0.3))'>
			<Container maxW='4xl' h='100vh'>
				<Flex
					flexDir='column'
					justifyContent='center'
					alignItems='center'
					height='100%'
				>
					<Stack
						spacing={10}
						zIndex={10}
						justifyContent='center'
						align='center'
					>
						<Text className={styles.nameFont} textAlign='center'>
							HEY, I`M TWIN EDO NUGRAHA
						</Text>
						<Text className={styles.textBody} textAlign='center'>
							A Frontend building the Frontend of Web Applications and Mobile
							Applications
						</Text>
						<Link href='/projects'>
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
								<Text className={styles.textBody} color='white'>
									PROJECTS
								</Text>
							</Button>
						</Link>
					</Stack>
				</Flex>
			</Container>
		</Box>
	);
}
