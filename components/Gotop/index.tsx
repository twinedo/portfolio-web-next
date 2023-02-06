import { Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { BiChevronUpCircle } from 'react-icons/bi';

export default function Gotop() {
	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
		function handleScroll() {
			setScrollY(window.pageYOffset);
		}

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	function _onClick() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	}

	return (
		<Box
			position='fixed'
			right={5}
			bottom='2%'
			transform='translateY(-50%)'
			cursor='pointer'
			zIndex={10}
			display={['none', 'none', scrollY > 0 ? 'flex' : 'none']}
			onClick={_onClick}
		>
			<BiChevronUpCircle size={50} color='black' />
		</Box>
	);
}
