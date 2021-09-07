import Head from 'next/head';
import BestSeller from '../components/BestSeller/BestSeller';
import UnreleasedBooks from '../components/UnreleasedBooks/UnreleasedBooks';

export default function Home() {
	return (
		<div>
			{/* best seller book component */}
			<BestSeller />
			{/* Unreleased books carousel component */}
			<UnreleasedBooks />
		</div>
	);
}
