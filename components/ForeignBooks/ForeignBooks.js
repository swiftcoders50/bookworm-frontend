import Books from "../Books/Books";
import Link from "next/link";
import { CartContext } from "../../pages/_app";
import React, { useContext } from "react";

const ForeignBooks = () => {
  // demo array of books
  const fBooks = [
    {
      id: 1,
      name: "Origin",
      author: "Dan Brown",
      price: 99,
      img: "/assets/book-images/origin.jpg",
    },
    {
      id: 2,
      name: "The Subtle Art of Not Givig A F*ck",
      author: "Marijn Haverbake",
      price: 70,
      img: "/assets/book-images/subtleArt.jpg",
    },

    {
      id: 4,
      name: "The Da Vinci Code",
      author: "Dan Brown",
      price: 80,
      img: "/assets/book-images/vinci.jpg",
    },
    {
      id: 5,
      name: "Half Girlfriend",
      author: "Chetan Bhagat",
      price: 50,
      img: "/assets/book-images/hgf.jpg",
    },
    {
      id: 6,
      name: "Shophie's World",
      author: "Jostien Gaarder",
      price: 70,
      img: "/assets/book-images/sophie-s-world.jpg",
    },
    {
      id: 7,
      name: "The Girl In Room 105",
      author: "Chetan Bhagat",
      price: 50,
      img: "/assets/book-images/105.jpg",
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
    // Foreign container
    <div className="mx-2 sm:mx-4 md:mx-16">
      <div className="flex justify-between my-8 border-b border-gray-200">
        <h1 className="text-2xl md:text-3xl font-semibold text-indigo-900">
          Foreign Books
        </h1>
        {/* <Link href="/">
          <a className="text-indigo-900 hover:text-indigo-500 text-md border border-b-0 p-2 font-semibold">
            View All
          </a>
        </Link> */}
      </div>

      {/* Foreign Cart container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 my-4 cursor-pointer">
        {/* cart */}
        {fBooks.map((book) => (
          <Books key={book.id} book={book} handleBuy={handleBuy} />
        ))}
      </div>

      {/* load more button */}
      <div className="mx-auto text-center  bg-gray-100 rounded-md w-full md:w-1/2 p-2 my-8">
        <Link href="/">
          <a className="text-indigo-900 hover:text-indigo-500 uppercase text-lg font-semibold ">
            More Foreign books
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ForeignBooks;
