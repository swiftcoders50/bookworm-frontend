import React from "react";
import Link from "next/link";
import UnreleasedBookCarousel from "../UnreleasedBookCarousel/UnreleasedBookCarousel";

const UnreleasedBooks = () => {
	// demo array of books
	const bestBooks = [
		{
			id: 1,
			img: "/assets/unreleased-books/book-1.jpg",
		},
		{
			id: 2,
			img: "/assets/unreleased-books/book-2.jpg",
		},

		{
			id: 3,
			img: "/assets/unreleased-books/graph-algorithm-by-shaphayet-asraf.png",
		},
		{
			id: 4,
			img: "/assets/unreleased-books/maya_vila_krisnendu_mukhopadhoy.jpeg",
		},
		{
			id: 5,
			img: "/assets/unreleased-books/smart-english.jpg",
		},
		{
			id: 6,
			img: "/assets/unreleased-books/Time-Machine_Cover-1.jpg",
		},
	];

	return (
		<>
			<div className="mx-2 sm:mx-4 md:mx-16">
				<div className="flex justify-between my-8 border-b border-gray-200">
					<h1 className="font-oswald text-xl md:text-2xl font-medium text-indigo-900">
						Unreleased Books
					</h1>
					{/* <Link href="/">
						<a className="font-oswald text-indigo-900 hover:text-indigo-500 text-md border border-b-0 p-2 font-medium">
							View All
						</a>
					</Link> */}
				</div>
			</div>
			{/* unreleased books carousel */}
			<div className="px-8 sm:px-16">
				<UnreleasedBookCarousel bestBooks={bestBooks} />
			</div>
		</>
	);
};

export default UnreleasedBooks;
