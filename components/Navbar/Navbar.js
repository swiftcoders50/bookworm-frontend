import React from "react";

const Navbar = () => {
  // const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <div>
      <div className="w-full px-14 border-b border-gray-700 bg-gray-100 h-24">
        <nav>
          <div>
            <h1>
              <a href="/" className="text-2xl font-bold hover:text-gray-600 ">
                BOOKWORM
              </a>
            </h1>
            {/* toggle icon */}
            <div className="px-4 courser-pointer flex justify-end md:hidden  items-center">
              <svg
                className="w-10"
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
          </div>
          {/* hidden md:block */}
          <ul className="text-gray-700 font-bold uppercase flex justify-end">
            {/* <li>
              <a href="#" className="ml-5">
                <span>
                  {" "}
                  <input type="text" name="" id="" w-50 />{" "}
                </span>
              </a>
            </li> */}
            <li>
              <a href="#" className="ml-16 hover:text-gray-500">
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#" className="ml-16 flex hover:text-gray-500">
                <span>Landing</span>
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
              </a>
            </li>
            <li>
              <a href="#" className="ml-16 flex hover:text-gray-500">
                <span>Pages</span>
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
              </a>
            </li>

            <li>
              <a
                href="#"
                className="ml-16  rounded-full py-2 px-3 uppercase  cursor-pointer tracking-wider bg-blue-300 border-2 hover:bg-black hover:text-white"
              >
                <span>Get it now</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
