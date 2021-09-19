import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../pages/_app";
import Link from "next/link";

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
        <Link href="/">
          <a className="p-2 mr-4 inline-flex items-center">
            <span className="text-xl text-indigo-900 font-bold uppercase tracking-wide">
              BOOKWORM
            </span>
          </a>
        </Link>

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
          className={`${
            showMenu === false ? "hidden" : ""
          } top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto">
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-600 font-bold items-center justify-center hover:bg-indigo-900 hover:text-white">
                <span>Home</span>
              </a>
            </Link>

            <Link href="/categories">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-600 font-bold items-center justify-center hover:hover:bg-indigo-900 hover:text-white">
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
            </Link>
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
            <Link href="/bestSeller">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-600 font-bold items-center justify-center hover:hover:bg-indigo-900 hover:text-white">
                <span>Best Sellers</span>
              </a>
            </Link>

            <Link href="/contact">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-600 font-bold items-center justify-center hover:hover:bg-indigo-900 hover:text-white">
                <span>Contact</span>
              </a>
            </Link>

            <Link href="/login">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-600 font-bold items-center justify-center hover:hover:bg-indigo-900 hover:text-white">
                <span>Login</span>
              </a>
            </Link>
            {/* cart icon*/}
            {/* <Link href="/order_review">
              <div className="flex ml-3 sm:mt-0 mt-3 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-indigo-900"
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
                  style={{
                    marginTop: "-10px",
                    color: "rgba(49, 46, 129, var(--tw-bg-opacity))",
                    fontWeight: "700",
                  }}
                >
                  {cartData.length}
                </h1>
              </div>
            </Link> */}
          </div>
        </div>
        <Link href="/order_review">
          <div className="flex ml-3 sm:mt-0 mt-3 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-indigo-900"
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
              style={{
                marginTop: "-10px",
                color: "rgba(49, 46, 129, var(--tw-bg-opacity))",
                fontWeight: "700",
              }}
            >
              {cartData.length}
            </h1>
          </div>
        </Link>
      </nav>
    </>
  );
};

export default Header;
