import { Box, Stack, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { IoMdMail, IoLogoLinkedin, IoLogoGithub } from 'react-icons/io';

export default function Socmed() {
	return (
		<Box
			position='fixed'
			left={0}
			top='50%'
			transform='translateY(-50%)'
			bg='white'
			p='20px'
			boxShadow='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
			borderTopRightRadius={10}
			borderBottomRightRadius={10}
			zIndex={10}
			display={['none', 'none', 'flex']}
		>
			<Stack spacing={15}>
				<Link
					href='mailto:twinedo.dev@gmail.com'
					rel='noreferrer'
					target='_blank'
				>
					<IoMdMail size={24} />
				</Link>
				<Link
					href='https://www.linkedin.com/in/twinedo/'
					rel='noreferrer'
					target='_blank'
				>
					<IoLogoLinkedin size={24} />
				</Link>
				<Link
					href='https://www.github.com/twinedo/'
					rel='noreferrer'
					target='_blank'
				>
					<IoLogoGithub size={24} />
				</Link>
				{/* <Text>Instagram</Text> */}
			</Stack>
		</Box>
	);
}
