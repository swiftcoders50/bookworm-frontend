import Books from "../Books/Books";
import Link from "next/link";
import { CartContext } from "../../pages/_app";
import React, { useContext } from "react";

const ForeignBooks = ({ books }) => {
	const [cartData, setCartData] = useContext(CartContext);
	
	const handleBuy = (singleBook) => {
		let isAdded = false;
		if (cartData.length === 0) {
			singleBook = { ...singleBook, quantity: 1 };
			setCartData([...cartData, singleBook]);
		}
		cartData.map((item) => {
			if (item._id === singleBook._id) {
				isAdded = true;
			}
		});
		if (!isAdded) {
			singleBook = { ...singleBook, quantity: 1 };
			setCartData([...cartData, singleBook]);
		}
	};

	return (
		// Foreign container
		<div className="mx-3 sm:mx-4 md:mx-16">
			<div className="flex justify-between my-8 border-b border-gray-200">
				<h1 className="font-oswald text-xl md:text-2xl font-medium text-indigo-900">
					Foreigner books
				</h1>
				{/* <Link href="/">
          <a className="font-oswald text-indigo-900 hover:text-indigo-500 text-md border border-b-0 p-2 font-medium">
            View All
          </a>
        </Link> */}
			</div>

			{/* Foreign Cart container */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 my-4">
				{/* cart */}
				{books.map((book) => (
					<Books key={book._id} book={book} handleBuy={handleBuy} />
				))}
			</div>

			{/* load more button */}
			<div className="mx-auto text-center  bg-gray-100 rounded-md w-full md:w-1/2 p-2 my-8">
				<Link href="/">
					<a className="text-indigo-900 hover:text-indigo-500 uppercase text-md font-medium">
						More Foreign books
					</a>
				</Link>
			</div>
		</div>
	);
};

export default ForeignBooks;
