import React from "react";

const DashboardInventory = ({ books }) => {
  console.log({ books });
  return (
    <div className="h-full">
      <h1 className="p-8 text-xl text-gray-500 text-center">
        All Books Collection
      </h1>
      <div className="mx-auto mb-10 p-10 max-w-5xl bg-white border border-gray-300 rounded-md shadow">
        <div className="p-2 flex justify-between items-center border-b border-gray-300 font-semibold">
          <h1 className="w-10 sm:w-16 md:w-28 overflow-hidden">Book Name</h1>
          <h1 className="w-10 sm:w-16 md:w-28 overflow-hidden">Author Name</h1>
          <h1 className="w-10 sm:w-16 md:w-28 overflow-hidden">
            Book Category
          </h1>
          <h1 className="w-10 sm:w-16 md:w-28 overflow-hidden">Book Price</h1>
        </div>
        <div className="p-2">
          {books.map((book) => (
            <div
              key={book._id}
              className="py-2 min-h-20 flex justify-between items-center text-sm border-b border-gray-300 overflow-hidden"
            >
              <p className="w-10 sm:w-16 md:w-28 overflow-hidden">
                {book.bookName}
              </p>
              <p className="w-10 sm:w-16 md:w-28 overflow-hidden">
                {book.authorName}
              </p>
              <p className="w-10 sm:w-16 md:w-28 overflow-hidden">
                {book.bookCategory}
              </p>
              <p className="w-10 sm:w-16 md:w-28 overflow-hidden">
                $ {book.bookPrice}
              </p>
              {/* <p>{book.bookPrice.slice(0, 15)}</p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardInventory;
