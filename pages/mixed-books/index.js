import React from "react";
import Head from "next/head";
import MixedViewAll from "../../components/MixedViewAll/MixedViewAll";

export async function getStaticProps() {
	// fetch best seller books
	const response = await fetch("https://bookworm-backend.vercel.app/books");
	const books = await response.json();

	return {
		props: {
			books,
		},
	};
}

const BestSellerBooks = ({ books }) => {
	return (
		<div>
			<Head>
				<title>Bookworm | Mixed books</title>
				<meta name="bookworm" content="Mixed books" />
			</Head>
			<MixedViewAll books={books} />
		</div>
	);
};

export default BestSellerBooks;
