import Head from 'next/head';
import Authors from '../components/Authors/Authors';
import BestSeller from '../components/BestSeller/BestSeller';
import UnreleasedBooks from '../components/UnreleasedBooks/UnreleasedBooks';

export default function Home() {
	return (
		<div>
			{/* best seller book component */}
			<BestSeller />
			{/* Unreleased books carousel component */}
			<UnreleasedBooks />
			{/* Authors carousel component*/}
			<Authors />
		</div>
	);
}
