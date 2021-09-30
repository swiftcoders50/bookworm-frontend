import React, { useState } from "react";
import Link from "next/link";
import { BsHeartFill, BsHeart } from "react-icons/bs";
const Books = ({ book, handleBuy }) => {
	return (
		<div className="mx-auto rounded-md shadow overflow-hidden w-72 md:w-full">
			<div className="md:flex h-auto md:h-48 border border-gray-100 bg-gray-20">
				<div className="flex sm:flex-shrink-0 justify-center p-3 md:p-0">
					<img
						className="h-48 w-auto md:w-32 md:h-full rounded object-cover"
						src={book.bookImg}
						alt={book.authorName}
					/>
				</div>
				<div className="flex flex-col justify-around p-2 md:p-3 w-full">
					<h2 className="text-xl text-indigo-900 font-medium">
						{book.bookName}
					</h2>
					<p className="font-medium text-md text-gray-600 my-2 md:my-0">
						{book.authorName}
					</p>
					<h3 className="text-xl font-bold text-indigo-900 mb-3 md:my-0">
						<span>$</span>
						{book.bookPrice}
					</h3>
					<div className="flex items-center justify-between">
						<button
							onClick={() => handleBuy(book)}
							className="bg-indigo-900 active:bg-indigo-800 inline-block text-white rounded-full text-md px-5 py-1 font-medium focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 cursor-auto sm:cursor-pointer"
						>
							Add to cart
						</button>

						{/* icon
						{book.favorite && (
							<BsHeartFill
								className="cursor-pointer"
								size="1.2rem"
								color="gray"
							/>
						)}
						{!book.favorite && (
							<BsHeart className="cursor-pointer" size="1.2rem" color="gray" />
						)} */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Books;
