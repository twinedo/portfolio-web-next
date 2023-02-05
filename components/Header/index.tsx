import { Avatar, Box, Container, Flex, Stack, Text } from '@chakra-ui/react';

export default function Header() {
	return (
		<Box
			id='boxx'
			bg='white'
			position='fixed'
			top='0'
			left='0'
			zIndex={11}
			width='100%'
			boxShadow='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
		>
			<Container maxWidth='4xl' marginLeft='auto' marginRight='auto'>
				<Flex
					flexDirection='row'
					justifyContent='space-between'
					align='center'
					py='20px'
				>
					<Stack direction='row' spacing={15} alignItems='center'>
						<Avatar
							width='50px'
							borderRadius='50%'
							name='Dan Abrahmov'
							src='https://bit.ly/dan-abramov'
						/>

						<Text fontWeight='bold' fontSize={20}>
							twinedo.dev
						</Text>
					</Stack>
					<Stack direction='row' spacing={10}>
						<Text fontWeight='bold'>Home</Text>
						<Text fontWeight='bold'>Projects</Text>
						<Text fontWeight='bold'>CV</Text>
					</Stack>
				</Flex>
			</Container>
		</Box>
	);
}
