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

export default function Home() {
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

			{/* apel */}
			<HeaderCarousel />

			{/* apel */}
			<BestSeller />

			{/* samiha */}
			<Categories />

			{/* opu */}
			<ForeignBooks />

			{/* apel */}
			<UnreleasedBooks />

			{/* opu */}
			<Blogs />

			{/* apel */}
			<Authors />
		</div>
	);
}
