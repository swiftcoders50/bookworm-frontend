import React, { useContext } from "react";
import Link from "next/link";
import { withProtected } from "../../hook/route";
import { DashboardContext } from "../../contexts/DashboardContext";
import DashboardAddNewBook from "../../components/DashboardAddNewBook";

const index = () => {
  const {
    section,
    setSection,
    sidebarRef,
    newBookRef,
    newBookInfo,
    setNewBookInfo,
    showSidebar,
    newBookInfoHandler,
  } = useContext(DashboardContext);

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
              className="block my-2 py-2.5 px-4 text-lg rounded transition duration-200 bg-indigo-800 hover:bg-indigo-500 hover:text-white"
              onClick={() => setSection("addNewBook")}
            >
              Add New Book
            </a>
          </Link>
          <Link href="#users">
            <a
              className="block my-2 py-2.5 px-4 text-lg rounded transition duration-200 bg-indigo-800 hover:bg-indigo-500 hover:text-white"
              onClick={() => setSection("inventory")}
            >
              Books Inventory
            </a>
          </Link>
          <Link href="#orders">
            <a
              className="block my-2 py-2.5 px-4 text-lg rounded transition duration-200 bg-indigo-800 hover:bg-indigo-500 hover:text-white"
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
          <DashboardAddNewBook
            newBookInfo={newBookInfo}
            setNewBookInfo={setNewBookInfo}
            newBookInfoHandler={newBookInfoHandler}
            newBookRef={newBookRef}
          />
        ) : section === "inventory" ? (
          <div>
            <h1 className="font-bold text-center text-2xl">Inventory</h1>
          </div>
        ) : section === "orders" ? (
          <div>
            <h1 className="font-bold text-center text-2xl">Orders</h1>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default withProtected(index);
