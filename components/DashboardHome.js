import React from "react";
import { useAuth } from "../contexts/AuthContext";
import {
  faBookOpen,
  faUsers,
  faShoppingBasket,
  faBook,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DashboardHome = ({ books, orders }) => {
  const { currentUser } = useAuth();
  return (
    <div className="h-full">
      <h1 className="p-8 text-2xl md:text-3xl text-indigo-800">
        Hello, {currentUser.displayName}
      </h1>
      <div className="mx-4 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 m-2 text-2xl text-indigo-800 bg-white border border-gray-200 shadow-lg rounded flex justify-center items-center">
          <FontAwesomeIcon icon={faShoppingBasket} />
          <p className="ml-4 text-lg"> {orders.length} Orders </p>
        </div>
        <div className="p-4 m-2 text-2xl text-indigo-800 bg-white border border-gray-200 shadow-lg rounded flex justify-center items-center">
          <FontAwesomeIcon icon={faBook} />
          <p className="ml-4 text-lg">{books.length} Books</p>
        </div>
        <div className="p-4 m-2 text-2xl text-indigo-800 bg-white  border border-gray-200 shadow-lg rounded flex justify-center items-center">
          <FontAwesomeIcon icon={faUsers} />
          <p className="ml-4 text-lg">21 Users</p>
        </div>
        <div className="p-4 m-2 text-2xl text-indigo-800 bg-white border border-gray-200 shadow-lg rounded flex justify-center items-center">
          <FontAwesomeIcon icon={faPhoneAlt} />
          <p className="ml-4 text-lg text-indigo-800">24/7 Support</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
