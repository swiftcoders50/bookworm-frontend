import Head from 'next/head';
import TopRatedCarousel from '../components/TopRatedCarousel';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			{/* samiha */}
			<TopRatedCarousel></TopRatedCarousel>
			{/* samiha */}
		</div>
	);
}
