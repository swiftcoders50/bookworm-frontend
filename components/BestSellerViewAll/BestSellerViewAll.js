import React, { useContext } from "react";
import { CartContext } from "../../pages/_app";
import Books from "../Books/Books";

const BestSellerViewAll = ({ books }) => {
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
		<div className="mx-3 sm:mx-4 md:mx-16 mb-11">
			<div className="h-16"></div>

			<div className="my-8 border-b border-gray-200">
				<h1 className="text-xl md:text-2xl font-medium text-indigo-900">
					Best Seller Books
				</h1>
			</div>

			{/* best seller Cart container */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 my-4 ">
				{/* cart */}
				{books.map((book) => (
					<Books handleBuy={handleBuy} key={book._id} book={book} />
				))}
			</div>
		</div>
	);
};

export default BestSellerViewAll;
