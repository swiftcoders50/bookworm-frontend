import React, { useContext } from "react";
import Link from "next/link";
import { withProtected } from "../../hook/route";
import { DashboardContext } from "../../contexts/DashboardContext";
import DashboardAddNewBook from "../../components/DashboardAddNewBook";
import DashboardHeader from "../../components/DashboardHeader";
import {
  faBookOpen,
  faColumns,
  faUsers,
  faShoppingBasket,
  faSwatchbook,
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DashboardInventory from "../../components/DashboardInventory";

export const getStaticProps = async () => {
  const res = await fetch("https://bookworm-backend.vercel.app/books");
  const books = await res.json();
  return {
    props: { books },
  };
};

const index = ({ books }) => {
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
  console.log(books);

  return (
    <div className="relative h-screen md:flex">
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
        className="sidebar bg-gray-800 text-blue-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out shadow"
      >
        {/* logo */}
        <Link href="/">
          <a className="mb-16 text-center text-white flex items-center space-x-2 px-4 ">
            <div className="w-6">
              <FontAwesomeIcon icon={faBookOpen} size="lg" />
            </div>
            <span className="text-2xl text-center font-bold">Bookworm</span>
          </a>
        </Link>

        {/* nav */}
        <nav>
          <Link href="#dashboard">
            <a
              className="my-4 py-2 px-4 text-lg rounded transition duration-200 flex items-center  space-x-2"
              onClick={() => setSection("dashboard")}
            >
              <div className="w-6">
                <FontAwesomeIcon icon={faColumns} />
              </div>
              <span className="ml-4 hover:text-gray-400 ">Dashboard</span>
            </a>
          </Link>
          <Link href="#users">
            <a
              className="my-4 py-2 px-4 text-lg rounded transition duration-200 flex items-center  space-x-2 "
              onClick={() => setSection("users")}
            >
              <div className="w-6">
                <FontAwesomeIcon icon={faUsers} />
              </div>
              <span className="ml-4 hover:text-gray-400 ">Users</span>
            </a>
          </Link>
          <Link href="#orders">
            <a
              className="my-4 py-2 px-4 text-lg rounded transition duration-200 flex items-center  space-x-2"
              onClick={() => setSection("orders")}
            >
              <div className="w-6">
                <FontAwesomeIcon icon={faShoppingBasket} />
              </div>

              <span className="ml-4 hover:text-gray-400 ">Orders</span>
            </a>
          </Link>
          <Link href="#inventory">
            <a
              className="my-4 py-2 px-4 text-lg rounded transition duration-200 flex items-center  space-x-2"
              onClick={() => setSection("inventory")}
            >
              <div className="w-6">
                <FontAwesomeIcon icon={faSwatchbook} />
              </div>

              <span className="ml-4 hover:text-gray-400 ">Inventory</span>
            </a>
          </Link>
          <Link href="#addNewBook">
            <a
              className="my-4 py-2 px-4 text-lg rounded transition duration-200 flex items-center  space-x-2"
              onClick={() => setSection("addNewBook")}
            >
              <div className="w-6">
                <FontAwesomeIcon icon={faBook} />
              </div>

              <span className="ml-4 hover:text-gray-400 ">New Book</span>
            </a>
          </Link>
        </nav>
      </div>

      {/* content */}
      <div className="flex-1 bg-gray-50 overflow-scroll">
        {section === "dashboard" ? (
          <div className="h-screen">
            <div className="hidden md:block sticky top-0">
              <DashboardHeader sectionTitle={"Dashboard"} />
            </div>
            <h1 className="font-bold text-center text-2xl">Dashboard</h1>
          </div>
        ) : section === "users" ? (
          <div className="h-screen">
            <div className="hidden md:block sticky top-0">
              <DashboardHeader sectionTitle={"Users"} />
            </div>
            <h1 className="font-bold text-center text-2xl">Users</h1>
          </div>
        ) : section === "orders" ? (
          <div className="h-screen">
            <div className="hidden md:block sticky top-0">
              <DashboardHeader sectionTitle={"Orders"} />
            </div>
            <h1 className="font-bold text-center text-2xl">Orders</h1>
          </div>
        ) : section === "inventory" ? (
          <div className="h-screen">
            <div className="hidden md:block sticky top-0">
              <DashboardHeader sectionTitle={"Inventory"} />
            </div>
            <DashboardInventory books={books} />
          </div>
        ) : section === "addNewBook" ? (
          <div className="h-screen">
            <div className="hidden md:block sticky top-0">
              <DashboardHeader sectionTitle={"Add New Book"} />
            </div>
            <DashboardAddNewBook
              newBookInfo={newBookInfo}
              setNewBookInfo={setNewBookInfo}
              newBookInfoHandler={newBookInfoHandler}
              newBookRef={newBookRef}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default withProtected(index);
