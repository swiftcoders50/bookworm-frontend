import React, { useContext, useState } from "react";
import Books from "../Books/Books";
import Link from "next/link";
import { CartContext } from "../../pages/_app";

const BestSeller = () => {
	// demo array of books
	const bestBooks = [
		{
			id: 1,
			name: "Hate kolome javascript",
			author: "Zonayed Ahmed",
			price: 42,
			favorite: true,
			img: "/assets/book-images/hate-kolome-javascript-by-zonayed-ahmed.jpg",
		},

		{
			id: 4,
			name: "Computer Programming",
			author: "Subeen",
			price: 70,
			favorite: false,
			img: "/assets/book-images/computer-programming-data-structure-part-3-by-tamim-shariayer-subben.jpg",
		},
		{
			id: 22,
			name: "Computer Programming",
			author: "Subeen",
			price: 70,
			favorite: true,
			img: "/assets/book-images/recharge_your-down_battery_jhankar_mahbub.jpg",
		},
		{
			id: 98,
			name: "Computer Programming",
			author: "Subeen",
			price: 70,
			favorite: false,
			img: "/assets/book-images/computer-programming-data-structure-part-3-by-tamim-shariayer-subben.jpg",
		},
		{
			id: 552,
			name: "Computer Programming",
			author: "Subeen",
			price: 70,
			favorite: false,
			img: "/assets/book-images/recharge_your-down_battery_jhankar_mahbub.jpg",
		},
		{
			id: 5,
			name: "Hate kolome javascript",
			author: "Zonayed Ahmed",
			price: 42,
			favorite: true,
			img: "/assets/book-images/hate-kolome-javascript-by-zonayed-ahmed.jpg",
		},
	];

	const [cartData, setCardData] = useContext(CartContext);
	const handleBuy = (singleBook) => {
		let isAdded = false;
		if (cartData.length == 0) {
			singleBook = { ...singleBook, quantity: 1 };
			setCardData([...cartData, singleBook]);
		}
		cartData.map((item) => {
			if (item.id == singleBook.id) {
				isAdded = true;
			}
		});
		if (!isAdded) {
			singleBook = { ...singleBook, quantity: 1 };
			setCardData([...cartData, singleBook]);
		}
	};

	return (
		// best seller container
		<div className="mx-3 sm:mx-4 md:mx-16">
			<div className="flex justify-between my-8 border-b border-gray-200">
				<h1 className="font-oswald text-xl md:text-2xl font-medium text-indigo-900">
					Best Seller Books
				</h1>
				{/* <Link href="/">
					<a className="font-oswald text-indigo-900 hover:text-indigo-500 text-md border border-b-0 p-2 font-medium">
						View All
					</a>
				</Link> */}
			</div>

			{/* best seller Cart container */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 my-4 ">
				{/* cart */}
				{bestBooks.map((book) => (
					<Books handleBuy={handleBuy} key={book.id} book={book} />
				))}
			</div>

			{/* load more button */}
			<div className="mx-auto text-center  bg-gray-100 rounded-md w-full md:w-1/2 p-2 my-8">
				<Link href="/">
					<a className="text-indigo-900 hover:text-indigo-500 uppercase text-md font-medium">
						More Best seller books
					</a>
				</Link>
			</div>
		</div>
	);
};

export default BestSeller;
