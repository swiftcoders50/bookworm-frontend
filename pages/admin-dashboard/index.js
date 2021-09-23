import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { useState } from "react";
import ordersData from "../../data/ordersData/ordersData";
import usersData from "../../data/usersData/usersData";
import { useAuth } from "../../contexts/AuthContext";
import { withProtected } from "../../hook/route";
import axios from "axios";

const index = () => {
  const { currentUser } = useAuth();
  const [section, setSection] = useState("addNewBook");
  const [orders] = useState(ordersData);
  const [users] = useState(usersData);
  const sidebarRef = useRef(null);
  const newBookRef = useRef(null);
  const [newBookInfo, setNewBookInfo] = useState({
    bookName: "",
    authorName: "",
    bookImg: "",
    bookCategory: "",
    bookPrice: "",
  });

  const showSidebar = () => {
    sidebarRef.current.classList.toggle("-translate-x-full");
  };

  const newBookInfoHandler = (e) => {
    e.preventDefault();

    fetch("https://bookworm-backend.vercel.app/books/addNewBook", {
      method: "POST",
      body: JSON.stringify({ ...newBookInfo }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        newBookRef.current.innerText = data.message;
        setTimeout(() => {
          newBookRef.current.innerText = "";
        }, 2000);
      })
      .catch((err) => console.error(err));

    //   Reset the input fields
    setNewBookInfo({
      bookName: "",
      authorName: "",
      bookImg: "",
      bookCategory: "",
      bookPrice: "",
    });
  };

  return (
    <div className="relative min-h-screen md:flex">
      {/* Mobile Menu*/}
      <div className="bg-gray-200 text-gray-500 flex justify-between md:hidden">
        <a href="/" className="block p-4 text-indigo-900 font-bold">
          Bookworm
        </a>

        {/* mobile menu button */}
        <button
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700"
          onClick={showSidebar}
        >
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* sidebar */}
      <div
        id="dashboard-sidebar"
        ref={sidebarRef}
        className="sidebar bg-indigo-900 text-blue-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out"
      >
        {/* logo */}
        <a href="/" className="text-white flex items-center space-x-2 px-4">
          <span className="text-2xl font-extrabold">Bookworm</span>
        </a>

        {/* nav */}
        <nav>
          <Link href="#addNewBook">
            <a
              className="block my-2 py-2.5 px-4 text-xl rounded transition duration-200 bg-indigo-800 hover:bg-indigo-500 hover:text-white"
              onClick={() => setSection("addNewBook")}
            >
              Add New Book
            </a>
          </Link>
          {/* <Link href="#users">
            <a
              className="block my-2 py-2.5 px-4 text-xl rounded transition duration-200 bg-indigo-800 hover:bg-indigo-500 hover:text-white"
              onClick={() => setSection("users")}
            >
              Users
            </a>
          </Link> */}
          <Link href="#orders">
            <a
              className="block my-2 py-2.5 px-4 text-xl rounded transition duration-200 bg-indigo-800 hover:bg-indigo-500 hover:text-white"
              onClick={() => setSection("orders")}
            >
              Orders
            </a>
          </Link>
        </nav>
      </div>

      {/* content */}
      <div className="flex-1 p-10">
        {section === "addNewBook" ? (
          <div className="h-full flex justify-center items-center ">
            <div className="p-4 w-72 md:w-2/5 border border-gray-200 shadow-md">
              <h4 className="mb-4 font-bold text-center text-lg">
                Add New Book
              </h4>
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
        ) : (
          // : section === "users" ? (
          //   <div>
          //     <h1 className="font-bold text-center text-2xl">Users</h1>
          //     <div className="flex justify-center flex-wrap">
          //       {users.map((user) => {
          //         return (
          //           <div
          //             key={user.id}
          //             className="mx-2 my-4 p-8 text-base text-black-200 w-64 h-64 rounded shadow-lg border border-grey"
          //           >
          //             <p className="font-semibold">User Id: {user.id}</p>
          //             <p className="pt-3">Name: {user.name}</p>
          //             <p className="pt-3">Email: {user.email}</p>
          //             <p className="pt-3">Phone: {user.phone}</p>
          //             <p className="pt-3">Role: {user.role}</p>
          //           </div>
          //         );
          //       })}
          //     </div>
          //   </div>
          // )
          <div>
            <h1 className="font-bold text-center text-2xl">Orders</h1>
            {/* <div className="flex justify-center flex-wrap">
              {orders.map((order) => {
                return (
                  <div
                    key={order.id}
                    className="mx-2 my-4 p-8 text-base text-black-200 w-64 h-72 rounded shadow-lg border border-grey"
                  >
                    <p className="font-semibold">Order Id: {order.id}</p>
                    <p className="pt-3">Book Name: {order.bookName}</p>
                    <p className="pt-3">Ordered By: {order.name}</p>
                    <p className="pt-3">Email: {order.email}</p>
                    <p className="pt-3">Phone: {order.phone}</p>
                    <p className="pt-3">
                      Order Status:{" "}
                      <span className="capitalize font-semibold">
                        {order.orderStatus}
                      </span>
                    </p>
                  </div>
                );
              })}
            </div> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default withProtected(index);
