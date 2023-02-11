import { Box, Container, Image, Stack, Text } from '@chakra-ui/react';
import Section from 'components/Section';
import Slider from 'react-slick';

export default function Stacks() {
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

	const settings = {
		dots: true,
		infinite: arrImages.length > 3,
		arrows: false,
		autoplay: true,
		speed: 500,
		slidesToShow: 6,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 6,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 5,
					initialSlide: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
		],
	};

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
						<Slider {...settings}>
							{arrImages.map(
								(o: { id: number; name: string; path: string }, i: number) => (
									<Box key={o.id} cursor='pointer' mx='5px'>
										<Image
											src={o.path}
											width={[50, 70, 100]}
											// boxSize={['30px', '80px']}
											alt={o.name}
											filter='grayscale(100%)'
											_hover={{ filter: 'grayscale(0%)' }}
										/>
									</Box>
								)
							)}
						</Slider>
					</Stack>
				</Container>
			</Section>
		</Box>
	);
}
