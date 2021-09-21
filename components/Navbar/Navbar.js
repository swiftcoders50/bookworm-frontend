import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { CartContext } from "../../pages/_app";
import { useAuth } from "../../contexts/AuthContext";
import { BiUser, BiArrowToBottom } from "react-icons/bi";

const Header = () => {
  const { currentUser, logout } = useAuth();
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
        className={`fixed w-full z-10 flex items-center py-3 flex-wrap px-3 shadow border border-gray-300 sm:px-4 md:px-11 ${
          navbar ? "bg-gray-200" : "bg-gray-200"
        }`}
      >
        <Link href="/">
          <a className="p-2 mr-4 inline-flex items-center">
            <img src="./logo.svg" alt="logo" />
          </a>
        </Link>

        <button
          onClick={() => setShowMenu(!showMenu)}
          className="text-gray-600 font-bold inline-flex p-3 hover:bg-indigo-900 rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler"
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
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-indigo-900 font-medium tracking-widest items-center justify-center hover:bg-indigo-900 hover:text-white">
                <span>Home</span>
              </a>
            </Link>

            {/* <Link href="/categories">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-indigo-900 font-semibold items-center justify-center hover:hover:bg-indigo-900 hover:text-white">
                <div className="flex">
                  <span>Categories</span>
                  <span>
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
                  </span>
                </div>
              </a>
            </Link> */}
            {/* this is dropdown */}
            {/* <div class="group inline-block relative">
              <div class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-indigo-900 font-medium items-center justify-center hover:hover:bg-indigo-900 hover:text-white flex">
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
                    class="rounded-t bg-white text-indigo-900 font-medium hover:hover:bg-indigo-900 hover:text-white px-10 p-2 rounded  block whitespace-no-wrap border-b-2 border-gray-200"
                    href="#"
                  >
                    Profile
                  </a>
                </li>
                <li class="">
                  <a
                    class="rounded-t bg-white text-indigo-900 font-medium hover:hover:bg-indigo-900 hover:text-white px-10 p-2 rounded  block whitespace-no-wrap"
                    href="#"
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </div> */}
            {/* end of dropdown */}

            <Link href="/contact">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-indigo-900 items-center justify-center hover:hover:bg-indigo-900 hover:text-white font-medium tracking-widest">
                <span>Contact</span>
              </a>
            </Link>

            <Link href="/admin-dashboard">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-indigo-900 font-medium tracking-widest items-center justify-center hover:hover:bg-indigo-900 hover:text-white">
                <span>Dashboard</span>
              </a>
            </Link>
            {/* cart icon*/}

            <Link href="/order_review">
              <a>
                <div className="flex ml-3 my-3 lg:my-0 text-indigo-900 cursor-pointer">
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
                  <div
                    className="text-gray-500"
                    style={{
                      marginTop: "-10px",
                      fontWeight: "700",
                    }}
                  >
                    {cartData.length}
                  </div>
                </div>
              </a>
            </Link>

            {/* login button menu */}
            {!currentUser && (
              <Link href="/login">
                <div className="group inline-block relative">
                  <a className="lg:inline-flex lg:w-auto w-full lg:mt-0 lg:mx-5 px-3 sm:px-4 py-2 rounded text-indigo-900 font-medium tracking-widest items-center justify-center lg:border-2 border-0 border-indigo-900 hover:text-white hover:hover:bg-indigo-900 cursor-pointer flex">
                    <span>Login</span>
                    {/* <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                    </svg> */}
                  </a>

                  {/* dropDown menu*/}
                  {/* <ul className="absolute hidden group-hover:block text-gray-700 lg:pt-5">
                  <li className="">
                    <Link href="/my-profile">
                      <a className="rounded-t bg-gray-200 text-indigo-900 font-medium hover:hover:bg-indigo-900 hover:text-white px-10 p-2   block whitespace-no-wrap border-b border-gray-400">
                        Profile
                      </a>
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/login">
                      <a className="rounded-t bg-gray-200 text-indigo-900 font-medium hover:hover:bg-indigo-900 hover:text-white px-10 p-2 rounded  block whitespace-no-wrap">
                        Login
                      </a>
                    </Link>
                  </li>
                </ul> */}
                </div>
              </Link>
            )}

            {/* user name show on the menu */}
            {currentUser && (
              <div className="group inline-block relative">
                <a>
                  <div className="flex items-center font-medium tracking-widest text-indigo-900 lg:border-2 border-0 border-indigo-900 rounded lg:mx-5 px-3 sm:px-3 py-2">
                    <BiUser className="mr-1" size="1.2rem" />
                    <span>{currentUser.displayName}</span>

                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                    </svg>
                  </div>
                </a>

                {/* dropDown menu */}
                <ul className="absolute hidden group-hover:block text-gray-700 lg:pt-5">
                  <li className="">
                    <Link href="/my-profile">
                      <a className="rounded-t bg-gray-200 text-indigo-900 font-medium hover:hover:bg-indigo-900 hover:text-white px-10 p-2   block whitespace-no-wrap border-b border-gray-400">
                        Profile
                      </a>
                    </Link>
                  </li>
                  <li className="">
                    <button onClick={logout}>
                      <div className="rounded-t bg-gray-200 text-indigo-900 font-medium hover:hover:bg-indigo-900 hover:text-white px-10 p-2 rounded  block whitespace-no-wrap">
                        Logout
                      </div>
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
