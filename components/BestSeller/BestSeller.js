import React, { useContext, useState } from "react";
import Books from "../Books/Books";
import Link from "next/link";
import { CartContext } from "../../pages/_app";

const BestSeller = () => {
<<<<<<< HEAD
	// demo array of books
	const bestBooks = [
		{
			id: 1,
			name: "Hate kolome javascript",
			author: "Zonayed Ahmed",
			price: 42,
			img: "/assets/book-images/hate-kolome-javascript-by-zonayed-ahmed.jpg",
		},

		{
			id: 4,
			name: "Computer Programming",
			author: "Subeen",
			price: 70,
			img: "/assets/book-images/computer-programming-data-structure-part-3-by-tamim-shariayer-subben.jpg",
		},
		{
			id: 22,
			name: "Computer Programming",
			author: "Subeen",
			price: 70,
			img: "/assets/book-images/recharge_your-down_battery_jhankar_mahbub.jpg",
		},
		{
			id: 98,
			name: "Computer Programming",
			author: "Subeen",
			price: 70,
			img: "/assets/book-images/computer-programming-data-structure-part-3-by-tamim-shariayer-subben.jpg",
		},
		{
			id: 552,
			name: "Computer Programming",
			author: "Subeen",
			price: 70,
			img: "/assets/book-images/recharge_your-down_battery_jhankar_mahbub.jpg",
		},
		{
			id: 5,
			name: "Hate kolome javascript",
			author: "Zonayed Ahmed",
			price: 42,
			img: "/assets/book-images/hate-kolome-javascript-by-zonayed-ahmed.jpg",
		},
	];

	return (
		// best seller container
		<div className="mx-2 sm:mx-4 md:mx-16">
			<div className="flex justify-between my-8 border-b border-gray-200">
				<h1 className="text-2xl md:text-3xl font-semibold text-indigo-900">
					Best Seller Books
				</h1>
				<Link href="/">
					<a className="text-indigo-900 hover:text-indigo-500 text-md border border-b-0 p-2 font-semibold">
						View All
					</a>
				</Link>
			</div>

			{/* best seller Cart container */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 my-4 cursor-pointer">
				{/* cart */}
				{bestBooks.map((book) => (
					<Books key={book.id} book={book} />
				))}
			</div>
=======
  // demo array of books
  const bestBooks = [
    {
      id: 1,
      name: "Hate kolome javascript",
      author: "Zonayed Ahmed",
      price: 42,
      img: "/assets/book-images/hate-kolome-javascript-by-zonayed-ahmed.jpg",
    },

    {
      id: 4,
      name: "Computer Programming",
      author: "Subeen",
      price: 70,
      img: "/assets/book-images/computer-programming-data-structure-part-3-by-tamim-shariayer-subben.jpg",
    },
    {
      id: 22,
      name: "Computer Programming",
      author: "Subeen",
      price: 70,
      img: "/assets/book-images/recharge_your-down_battery_jhankar_mahbub.jpg",
    },
    {
      id: 98,
      name: "Computer Programming",
      author: "Subeen",
      price: 70,
      img: "/assets/book-images/computer-programming-data-structure-part-3-by-tamim-shariayer-subben.jpg",
    },
    {
      id: 552,
      name: "Computer Programming",
      author: "Subeen",
      price: 70,
      img: "/assets/book-images/recharge_your-down_battery_jhankar_mahbub.jpg",
    },
    {
      id: 5,
      name: "Hate kolome javascript",
      author: "Zonayed Ahmed",
      price: 42,
      img: "/assets/book-images/hate-kolome-javascript-by-zonayed-ahmed.jpg",
    },
  ];

  const [cartData, setCardData] = useContext(CartContext);
  const handleBuy = (singleBook) => {
    setCardData([...cartData, singleBook]);
  };

  return (
    // best seller container
    <div className="mx-2 sm:mx-4 md:mx-16">
      <div className="flex justify-between my-8 border-b border-gray-200">
        <h1 className="text-2xl md:text-3xl font-semibold text-indigo-900">
          Best Seller Books
        </h1>
        <Link href="/">
          <a className="text-indigo-900 hover:text-indigo-500 text-md border border-b-0 p-2 font-semibold">
            View All
          </a>
        </Link>
      </div>

      {/* best seller Cart container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 my-4 cursor-pointer">
        {/* cart */}
        {bestBooks.map((book) => (
          <Books handleBuy={handleBuy} key={book.id} book={book} />
        ))}
      </div>
>>>>>>> d2f787ad37d2d1361e9a5462d0abfd0ea960e47f

			{/* load more button */}
			<div className="mx-auto text-center  bg-gray-100 rounded-md w-full md:w-1/2 p-2 my-8">
				<Link href="/">
					<a className="text-indigo-900 hover:text-indigo-500 uppercase text-lg font-semibold ">
						More Best seller books
					</a>
				</Link>
			</div>
		</div>
	);
};

export default BestSeller;
