import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { CartContext } from "../../pages/_app";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [cartData, setCardData] = useContext(CartContext);

  const changeBackground = () => {
    if (window.scrollY >= 70) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);
  return (
    <>
      <nav
        className={`fixed w-full z-10 flex items-center p-3 flex-wrap lg:px-20 ${
          navbar ? "bg-blue-300" : "bg-gray-200"
        }`}
      >
        <a href="#" className="p-2 mr-4 inline-flex items-center">
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-current text-indigo-900  h-8 w-8 mr-2"
          >
            <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
          </svg>
          <span className="text-xl text-indigo-900 font-bold uppercase tracking-wide">
            BOOKWORM
          </span>
        </a>
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="text-gray-600 font-bold inline-flex p-3 hover:bg-gray-900 rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler"
        >
          <svg
            className="w-10"
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
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
        <div
          // hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto
          className={`${
            showMenu === false ? "hidden" : ""
          } top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto">
            <a
              href="#"
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-600 font-bold items-center justify-center hover:bg-indigo-900 hover:text-white"
            >
              <span>Home</span>
            </a>
            <a
              href="#"
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-600 font-bold items-center justify-center hover:hover:bg-indigo-900 hover:text-white"
            >
              <div className="flex">
                <span>Categories</span>
                {/* <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span> */}
              </div>
            </a>

            {/* this is dropdown */}
            {/* <div class="group inline-block relative">
              <div class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-600 font-bold items-center justify-center hover:hover:bg-indigo-900 hover:text-white">
                <span class="mr-1">Categories</span>
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                </svg>
              </div>
              <ul class="absolute hidden group-hover:block text-gray-700 lg:pt-5">
                <li class="">
                  <a
                    class="rounded-t bg-gray-200 text-gray-600 hover:hover:bg-indigo-900 hover:text-white py-3 px-24 block whitespace-no-wrap"
                    href="#"
                  >
                    Story books
                  </a>
                </li>
                <li class="">
                  <a
                    class="bg-gray-200 text-gray-600 hover:hover:bg-indigo-900 hover:text-white py-3 px-24 block whitespace-no-wrap"
                    href="#"
                  >
                    Nobel books
                  </a>
                </li>
                <li class="">
                  <a
                    class="rounded-b bg-gray-200 text-gray-600 hover:hover:bg-indigo-900 hover:text-white py-3 px-24 block whitespace-no-wrap"
                    href="#"
                  >
                    Text books
                  </a>
                </li>
              </ul>
            </div> */}
            {/* end of dropdown */}

            <a
              href="#"
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-600 font-bold items-center justify-center hover:hover:bg-indigo-900 hover:text-white"
            >
              <span>Best Sellers</span>
            </a>
            <a
              href="#"
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-600 font-bold items-center justify-center hover:hover:bg-indigo-900 hover:text-white"
            >
              <span>Contact</span>
            </a>
            <a
              href="#"
              // className="lg:inline-flex lg:w-auto w-10 px-6 text-gray-800 rounded-full   cursor-pointer tracking-wider bg-red-400 border-2 hover:bg-indigo-900 hover:text-white items-center  p-2 font-bold"
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-600 font-bold items-center justify-center hover:hover:bg-indigo-900 hover:text-white"
            >
              <span>Login</span>
            </a>

            {/* cart icon*/}
            <Link href="/order_review">
            <div className="flex ml-3 sm:mt-0 mt-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <h1
                style={{ marginTop: "-10px", color: "red", fontWeight: "700" }}
              >
                {cartData.length}
              </h1>
            </div>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
