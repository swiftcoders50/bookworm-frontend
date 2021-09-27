import React from "react";
import Head from "next/head";
import ForeignViewAll from "../../components/ForeignViewAll/ForeignViewAll";

export async function getStaticProps() {
	// fetch best seller books
	const response = await fetch(
		"https://bookworm-backend.vercel.app/books/foreign-books"
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
				<title>Bookworm | foreign books</title>
				<meta name="bookworm" content="foreign books" />
			</Head>
			<ForeignViewAll books={books} />
		</div>
	);
};

export default BestSellerBooks;
