import Head from "next/head";
import BestSeller from "../components/BestSeller/BestSeller";
import Blogs from "../components/Blogs/Blogs";
import Categories from "../components/Categories";
import Authors from "../components/Authors/Authors";
import ForeignBooks from "./../components/ForeignBooks/ForeignBooks";
import UnreleasedBooks from "./../components/UnreleasedBooks/UnreleasedBooks";
import HeaderCarousel from "../components/HeaderCarousel/HeaderCarousel";
import MixedBooks from "../components/MixedBooks/MixedBooks";
import Subscribe from "./../components/SubscribeGmail/Subscribe";
import { useAdmin } from "../contexts/AdminContext";
import { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";

// fetch books
let currentUserEmail = "apelmahmud@gmail.com";
export async function getStaticProps() {
	const [
		bestSellerBooksRes,
		foreignBooksRes,
		unreleasedBooksRes,
		mixedBooksRes,
		checkedAdminRes,
	] = await Promise.all([
		fetch("https://bookworm-backend.vercel.app/books/best-seller-books"),
		fetch("https://bookworm-backend.vercel.app/books/foreign-books"),
		fetch("https://bookworm-backend.vercel.app/books/unreleased-books"),
		fetch("https://bookworm-backend.vercel.app/books"),
		fetch("http://localhost:5000/admin"),
	]);

	const [
		bestSellerBook,
		foreignBooks,
		unreleasedBooks,
		mixedBooks,
		checkedAdmin,
	] = await Promise.all([
		bestSellerBooksRes.json(),
		foreignBooksRes.json(),
		unreleasedBooksRes.json(),
		mixedBooksRes.json(),
		checkedAdminRes.json(),
	]);
	return {
		props: {
			bestSellerBook,
			foreignBooks,
			unreleasedBooks,
			mixedBooks,
			checkedAdmin,
		},
	};
}

export default function Home({
	bestSellerBook,
	foreignBooks,
	unreleasedBooks,
	mixedBooks,
	checkedAdmin,
}) {
	const { currentUser } = useAuth();
	const { admin, setAdmin } = useAdmin();
	console.log(admin);

	// console.log(checkedAdmin);

	// admin checking...
	useEffect(() => {
		const adminFounder = () => {
			checkedAdmin.forEach((admin) => {
				if (admin.email === currentUser?.email) {
					setAdmin({ ...admin, isAdmin: true });
				}
			});
		};
		adminFounder();
	}, []);

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

			{/* apel*/}
			<MixedBooks books={mixedBooks} />

			{/* apel */}
			<UnreleasedBooks books={unreleasedBooks} />

			{/* samiha */}
			<Categories />

			{/* opu */}
			<Blogs />

			{/* apel */}
			<Authors />

			{/* jahid */}
			<Subscribe />
		</div>
	);
}
