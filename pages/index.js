import Head from 'next/head';
import BestSeller from '../components/BestSeller/BestSeller';

export default function Home() {
	return (
		<div>
			{/* best seller component */}
			<BestSeller />
		</div>
	);
}
