import React from "react";
import Head from "next/head";
import BestSellerViewAll from "../../components/BestSellerViewAll/BestSellerViewAll";

export async function getStaticProps() {
	// fetch best seller books
	const response = await fetch(
		"https://bookworm-backend.vercel.app/books/best-seller-books"
	);
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
				<title>Bookworm | Best seller books</title>
				<meta name="bookworm" content="Best seller books" />
			</Head>
			<BestSellerViewAll books={books} />
		</div>
	);
};

export default BestSellerBooks;
