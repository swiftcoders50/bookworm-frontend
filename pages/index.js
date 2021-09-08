import Head from 'next/head';
import BestSeller from '../components/BestSeller/BestSeller';
import Blogs from '../components/Blogs/Blogs';
import UnreleasedBooks from '../components/UnreleasedBooks/UnreleasedBooks';

export default function Home() {
	return (
		<div>
			{/* best seller book component */}
			<BestSeller />
			{/* Unreleased books carousel component */}
			<UnreleasedBooks />
			<Blogs/>
		</div>
	);
}
