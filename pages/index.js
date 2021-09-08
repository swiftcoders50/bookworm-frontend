import Head from 'next/head';
import Authors from '../components/Authors/Authors';
import BestSeller from '../components/BestSeller/BestSeller';
import UnreleasedBooks from '../components/UnreleasedBooks/UnreleasedBooks';
import TopRatedCarousel from '../components/TopRatedCarousel';

export default function Home() {
	return (
		<div>
			{/* best seller book component */}
			<BestSeller />
			{/* Unreleased books carousel component */}
			<UnreleasedBooks />
			{/* Authors carousel component*/}
			<Authors />
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
