import {
	Box,
	Container,
	Image,
	keyframes,
	Stack,
	Text,
} from '@chakra-ui/react';
import Section from 'components/Section';

const animation = keyframes`
	from {
		transform: translateX(100%);
	}
	to {
		transform: translateX(-100%);
	}
`;

export default function Stacks() {
	const myAnimation = `${animation} infinite 90s linear`;
	const arrImages = [
		{
			id: 1,
			name: 'Android',
			path: '/img/1. Android.png',
		},
		{
			id: 2,
			name: 'Javascript',
			path: '/img/2. Javascript.png',
		},
		{
			id: 3,
			name: 'React',
			path: '/img/3. React.webp',
		},
		{
			id: 4,
			name: 'Typescript',
			path: '/img/4. Typescript.png',
		},
		{
			id: 5,
			name: 'Firebase',
			path: '/img/5. Firebase.png',
		},
		{
			id: 6,
			name: 'Flutter',
			// path: '/img/6. Flutter.png',
			path: 'https://www.kindpng.com/picc/m/355-3557482_flutter-logo-png-transparent-png.png',
		},
		{
			id: 7,
			name: 'Ionic',
			path: '/img/7. Ionic.png',
		},
		{
			id: 8,
			name: 'Dart',
			path: '/img/8. Dart.png',
		},
		{
			id: 9,
			name: 'Kotlin',
			path: '/img/9. Kotlin.png',
		},
	];
	return (
		<Box bg='grey'>
			<Section>
				<Container maxWidth='4xl'>
					<Stack spacing={5} position='relative' overflow='hidden'>
						<Stack direction='row' spacing='4' align='center'>
							<Text
								fontWeight='bold'
								fontSize='16px'
								color='white'
								letterSpacing='3px'
							>
								STACKS
							</Text>
							<Box h='3px' w='45px' bg='white' />
						</Stack>
						<Stack direction='row' maxWidth='4xl'>
							<Stack
								direction='row'
								columnGap={10}
								animation={myAnimation}
								// overflow='hidden'
								w='100%'
							>
								{arrImages.map(
									(
										o: { id: number; name: string; path: string },
										i: number
									) => (
										<Box key={o.id} cursor='pointer'>
											<Image
												src={o.path}
												boxSize='80px'
												alt={o.name}
												// style={{ filter: 'grayscale(100%)' }}
												filter='grayscale(100%)'
												_hover={{ filter: 'grayscale(0%)' }}
											/>
										</Box>
									)
								)}
							</Stack>
						</Stack>
					</Stack>
				</Container>
			</Section>
		</Box>
	);
}
