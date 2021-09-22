import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import BestSeller from "../components/BestSeller/BestSeller";
import Blogs from "../components/Blogs/Blogs";
import Categories from "../components/Categories";
import Authors from "../components/Authors/Authors";
import ForeignBooks from "./../components/ForeignBooks/ForeignBooks";
import UnreleasedBooks from "./../components/UnreleasedBooks/UnreleasedBooks";
import Footer from "../components/Footer";
import HeaderCarousel from "../components/HeaderCarousel/HeaderCarousel";

// fetch books
export async function getStaticProps() {
	const [bestSellerBooksRes, foreignBooksRes] = await Promise.all([
		fetch("https://bookworm-backend.vercel.app/books/best-seller-books"),
		fetch("https://bookworm-backend.vercel.app/books/foreign-books"),
	]);
	const [bestSellerBook, foreignBooks] = await Promise.all([
		bestSellerBooksRes.json(),
		foreignBooksRes.json(),
	]);
	return { props: { bestSellerBook, foreignBooks } };
}

export default function Home({ bestSellerBook, foreignBooks }) {
	return (
		<div>
			<Head>
				<title>Bookworm</title>
				<link rel="icon" href="/favicon.ico" />
				<meta
					name="bookworm"
					content="Bookworm is book library for book lovers"
				/>
			</Head>
			{/* Google font */}
			<style jsx global>{`
				html,
				body {
					font-family: "Roboto", sans-serif;
				}
			`}</style>
			{/* Google font */}

			{/* apel */}
			<HeaderCarousel />

			{/* apel */}
			<BestSeller books={bestSellerBook} />

			{/* opu */}
			<ForeignBooks books={foreignBooks} />

			{/* apel */}
			<UnreleasedBooks />

			{/* samiha */}
			<Categories />

			{/* opu */}
			<Blogs />

			{/* apel */}
			<Authors />
		</div>
	);
}
