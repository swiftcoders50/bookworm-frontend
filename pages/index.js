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

// fetch foreign books
export const getStaticProps = async () => {
	const res = await fetch("http://localhost:5000/books/foreign-books");
	const data = await res.json();

	return {
		props: { foreignBooks: data },
	};
};

export default function Home({ foreignBooks }) {
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
			<BestSeller />

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
