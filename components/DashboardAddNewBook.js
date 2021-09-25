import React, { useContext } from "react";
import { DashboardContext } from "../contexts/dashboardContext";

const DashboardAddNewBook = () => {
  const { newBookRef, newBookInfo, setNewBookInfo, newBookInfoHandler } =
    useContext(DashboardContext);
  return (
    <div className="h-full flex justify-center items-center ">
      <div className="p-4 w-72 md:w-2/5 border border-gray-200 shadow-md">
        <h4 className="mb-4 font-bold text-center text-lg">Add New Book</h4>
        <form className="mx-4 w-auto" onSubmit={newBookInfoHandler}>
          <input
            className="mb-4 p-2 pl-4 block border border-gray-300 rounded placeholder-gray-400 text-gray-800 text-sm outline-none focus:outline-none w-full"
            type="text"
            value={newBookInfo.bookName}
            onChange={(e) =>
              setNewBookInfo({ ...newBookInfo, bookName: e.target.value })
            }
            placeholder="Book Name"
            required
          />
          <input
            className="mb-4 p-2 pl-4 block border border-gray-300 rounded placeholder-gray-400 text-gray-800 text-sm outline-none focus:outline-none w-full"
            type="text"
            value={newBookInfo.authorName}
            onChange={(e) =>
              setNewBookInfo({
                ...newBookInfo,
                authorName: e.target.value,
              })
            }
            placeholder="Author Name"
            required
          />
          <input
            className="mb-4 p-2 pl-4 block border border-gray-300 rounded placeholder-gray-400 text-gray-800 text-sm outline-none focus:outline-none w-full"
            type="text"
            value={newBookInfo.bookCategory}
            onChange={(e) =>
              setNewBookInfo({
                ...newBookInfo,
                bookCategory: e.target.value,
              })
            }
            placeholder="Book Category"
            required
          />
          <input
            className="mb-4 p-2 pl-4 block border border-gray-300 rounded placeholder-gray-400 text-gray-800 text-sm outline-none focus:outline-none w-full"
            type="text"
            value={newBookInfo.bookImg}
            onChange={(e) =>
              setNewBookInfo({ ...newBookInfo, bookImg: e.target.value })
            }
            placeholder="Book Image"
            required
          />
          <input
            className="mb-4 p-2 pl-4 block border border-gray-300 rounded placeholder-gray-400 text-gray-800 text-sm outline-none focus:outline-none w-full"
            type="number"
            value={newBookInfo.bookPrice}
            onChange={(e) =>
              setNewBookInfo({
                ...newBookInfo,
                bookPrice: e.target.value,
              })
            }
            placeholder="Book Price"
            required
          />
          <input
            className="mb-4 p-2 pl-4 text-sm block border border-gray-300 rounded placeholder-gray-400 text-gray-800 outline-none focus:outline-none w-full cursor-pointer hover:bg-indigo-800 hover:text-gray-50"
            type="submit"
            value="Submit"
          />
          <p
            ref={newBookRef}
            className="mb-4 p-2 text-green-700 text-center"
          ></p>
        </form>
      </div>
    </div>
  );
};

export default DashboardAddNewBook;
