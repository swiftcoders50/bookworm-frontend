import Head from 'next/head';
<<<<<<< HEAD
import Authors from '../components/Authors/Authors';
import BestSeller from '../components/BestSeller/BestSeller';
import UnreleasedBooks from '../components/UnreleasedBooks/UnreleasedBooks';
=======
import TopRatedCarousel from '../components/TopRatedCarousel';
>>>>>>> samiha-carousel-comp

export default function Home() {
	return (
		<div>
<<<<<<< HEAD
			{/* best seller book component */}
			<BestSeller />
			{/* Unreleased books carousel component */}
			<UnreleasedBooks />
			{/* Authors carousel component*/}
			<Authors />
=======
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			{/* samiha */}
			<TopRatedCarousel></TopRatedCarousel>
			{/* samiha */}
>>>>>>> samiha-carousel-comp
		</div>
	);
}
