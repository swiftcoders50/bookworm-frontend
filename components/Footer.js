import Link from "next/link";
import ScrolledTop from "../components/ScrolledTop/ScrolledTop";

const Footer = () => {
  return (
    <footer>
      <div className="p-10 bg-gray-200 text-gray-700 shadow border border-gray-300">
        <div className="mx-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            <div className="mb-4">
              <h4>
                <strong>
                  <span className="text-xl text-indigo-800">BOOKWORM</span>
                </strong>
              </h4>
              <br />
              1203 Town Center
              <br />
              Drive FL 33458 BD
              <br />
              <br />
              +0000 123 456 789
              <br />
              info@example.com
            </div>
            <div className="mb-4">
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
            </div>
            <div className="mb-4">
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
            </div>
            <div className="mb-4">
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
            </div>
          </div>
          <hr className="mt-8 border-gray-400" />
          <div className=" mb-4 mt-4 text-center">
            <p className="text-gray-800">
              <b>&copy; 2021 | Swift Coders</b>
            </p>
          </div>
        </div>
        {/* jahid */}
        <ScrolledTop />
      </div>
    </footer>
  );
};

export default Footer;
