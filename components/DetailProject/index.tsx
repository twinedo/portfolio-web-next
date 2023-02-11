import {
	Box,
	Button,
	Container,
	Divider,
	Flex,
	Image,
	Stack,
	Text,
} from '@chakra-ui/react';
import Section from 'components/Section';
import { useRouter } from 'next/router';
import { BiChevronLeft } from 'react-icons/bi';
import { IProject } from 'models/project_model';
import Slider from 'react-slick';
import { AiFillApple } from 'react-icons/ai';
import { TbWorld } from 'react-icons/tb';
import { FaGooglePlay } from 'react-icons/fa';
import Link from 'next/link';

export default function DetailProject({
	data,
	imageData,
}: {
	data: IProject;
	imageData: Array<string>;
}) {
	const router = useRouter();
	const imageSettings = {
		dots: true,
		infinite: imageData?.length > 3,
		arrows: true,
		autoplay: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	const imageMSettings = {
		dots: true,
		infinite: imageData?.length > 3,
		arrows: true,
		autoplay: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<Box bg='white'>
			<Section>
				<Container maxWidth='4xl'>
					<Stack spacing={5}>
						<Flex
							flexDirection='row'
							justifyContent='space-between'
							alignItems='center'
						>
							<Text fontWeight='bold' fontSize={[24, 36, 48]}>
								{data?.name}
							</Text>
							<Button variant='outline' onClick={() => router.back()}>
								<BiChevronLeft />
								<Text ml='10px'>Back</Text>
							</Button>
						</Flex>
						<Stack spacing={5} direction='row' alignItems='center'>
							<Stack>
								<Text fontWeight='bold'>Date</Text>
								<Text color='grey'>{data?.year}</Text>
							</Stack>
							<Divider orientation='vertical' h='50px' borderColor='grey' />
							<Stack>
								<Text fontWeight='bold'>Platform</Text>
								<Text color='grey' textTransform='capitalize'>
									{data?.platform}
								</Text>
							</Stack>
							<Divider orientation='vertical' h='50px' borderColor='grey' />
							<Stack>
								<Text fontWeight='bold'>Tech</Text>
								<Text color='grey'>{data?.tag}</Text>
							</Stack>
						</Stack>
						{data?.platform === 'website' && (
							<Slider {...imageSettings}>
								{imageData.map((o, i) => (
									<Box key={i} justifyContent='center' alignItems='center'>
										<Image
											src={o}
											w='100%'
											h='100%'
											alt={data?.name}
											borderRadius={10}
										/>
									</Box>
								))}
							</Slider>
						)}
						{data?.platform === 'mobile' && (
							<Slider {...imageMSettings}>
								{imageData.map((o, i) => (
									<Box
										key={i}
										p='30px'
										justifyContent='center'
										alignItems='center'
									>
										<Image src={o} alt={data?.name} borderRadius={10} />
									</Box>
								))}
							</Slider>
						)}
						<Stack>
							<Text fontWeight='bold'>Description</Text>
							<Text>{data?.description}</Text>
						</Stack>
						<Stack>
							<Text fontWeight='bold'>Avaiable on</Text>
							{data?.platform === 'website' && data?.link_website !== '-' && (
								<Link
									href={data?.link_playstore}
									target='_blank'
									rel='noopener noreferrer'
								>
									<TbWorld />
								</Link>
							)}
							{data?.platform === 'mobile' && (
								<Stack direction='row' spacing={5} alignItems='center'>
									{data?.link_appstore !== '-' && (
										<Stack direction='row' alignItems='center' spacing={5}>
											<Link
												href={data?.link_appstore}
												target='_blank'
												rel='noopener noreferrer'
											>
												<AiFillApple />
											</Link>
											<Divider
												orientation='vertical'
												h='20px'
												borderColor='grey'
											/>
										</Stack>
									)}
									{data?.link_playstore !== '-' && (
										<Stack direction='row' alignItems='center' spacing={5}>
											<Link
												href={data?.link_playstore}
												target='_blank'
												rel='noopener noreferrer'
											>
												<FaGooglePlay />
											</Link>
											<Divider
												orientation='vertical'
												h='20px'
												borderColor='grey'
											/>
										</Stack>
									)}
									{data?.link_website !== '-' && (
										<Link
											href={data?.link_playstore}
											target='_blank'
											rel='noopener noreferrer'
										>
											<TbWorld />
										</Link>
									)}
								</Stack>
							)}
						</Stack>
					</Stack>
				</Container>
			</Section>
		</Box>
	);
}
