import Link from "next/link";
import ScrolledTop from "../components/ScrolledTop/ScrolledTop";
import LiveChat from "../components/LiveChat/LiveChat";

const Footer = () => {
  return (
    <footer>
      <div className="px-10 pt-10 pb-4 bg-gray-50 text-gray-700 shadow border border-gray-300">
        <div className="mx-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            <div className="mb-2">
              <h4 className="mb-2">
                <strong>
                  <span className="text-xl text-indigo-800">BOOKWORM</span>
                </strong>
              </h4>
              <p>
                Bookworm is an online library which helps book lovers connect
                with their favorite books without any kind of hassle.
              </p>
              <br />
            </div>
            <div className="mb-2"></div>
            <div className="mb-2">
              <h4 className="text-xl mb-2">
                <strong>Contact Info:</strong>
              </h4>
              <p>Dhaka, Bangladesh.</p>
              <p>Email: swiftcoders50@gmail.com</p>
              {/* <ScrolledTop /> */}
            </div>
            {/* <div className="mb-4">
              <h4 className="text-xl">
                <strong>Help</strong>
              </h4>
              <br />
              <ul>
                <li className="pb-4">
                  <Link href="#">
                    <a className="hover:text-gray-400">Search</a>
                  </Link>
                </li>
                <li className="pb-4">
                  <Link href="#">
                    <a className="hover:text-gray-400">Help</a>
                  </Link>
                </li>
                <li className="pb-4">
                  <Link href="#">
                    <a className="hover:text-gray-400">Information</a>
                  </Link>
                </li>
                <li className="pb-4">
                  <Link href="#">
                    <a className="hover:text-gray-400">Privacy Policy</a>
                  </Link>
                </li>
                <li className="pb-4">
                  <Link href="#">
                    <a className="hover:text-gray-400">Shipping Information</a>
                  </Link>
                </li>
              </ul>
            </div> */}
            {/* <div className="mb-4">
              <h4 className="text-xl">
                <strong>Support</strong>
              </h4>
              <br />
              <ul>
                <li className="pb-4">
                  <Link href="#">
                    <a className="hover:text-gray-400">Search Terms</a>
                  </Link>
                </li>
                <li className="pb-4">
                  <Link href="#">
                    <a className="hover:text-gray-400">Advanced Search</a>
                  </Link>
                </li>
                <li className="pb-4">
                  <Link href="#">
                    <a className="hover:text-gray-400">Helps & Faqs</a>
                  </Link>
                </li>
                <li className="pb-4">
                  <Link href="#">
                    <a className="hover:text-gray-400">Store Location</a>
                  </Link>
                </li>
                <li className="pb-4">
                  <Link href="#">
                    <a className="hover:text-gray-400">Orders & Returns</a>
                  </Link>
                </li>
              </ul>
            </div> */}
            {/* <div className="mb-4">
              <h4 className="text-xl">
                <strong>Information</strong>
              </h4>
              <br />
              <ul>
                <li className="pb-4">
                  <Link href="#">
                    <a className="hover:text-gray-400">Contact</a>
                  </Link>
                </li>
                <li className="pb-4">
                  <Link href="#">
                    <a className="hover:text-gray-400">About</a>
                  </Link>
                </li>
                <li className="pb-4">
                  <Link href="#">
                    <a className="hover:text-gray-400">Carrers</a>
                  </Link>
                </li>
                <li className="pb-4">
                  <Link href="#">
                    <a className="hover:text-gray-400">Refund & Returns</a>
                  </Link>
                </li>
                <li className="pb-4">
                  <Link href="#">
                    <a className="hover:text-gray-400">Deliveries</a>
                  </Link>
                </li>
              </ul>
            </div> */}
          </div>
          {/* jahid */}
          <ScrolledTop className="absolute right-4 bottom-4" />
          <hr className="mt-2 border-gray-300" />
          <div className="my-2 text-center">
            <p className="text-gray-800">
              <b>&copy; 2021 | Swift Coders</b>
            </p>
          </div>
        </div>
      </div>
      <LiveChat />
    </footer>
  );
};

export default Footer;
