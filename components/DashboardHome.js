import React from "react";
import { useAuth } from "../contexts/AuthContext";

const DashboardHome = ({ books, orders }) => {
  const { currentUser } = useAuth();
  return (
    <div className="h-full">
      <h1 className="p-8 text-2xl md:text-3xl text-indigo-800">
        Hello, {currentUser.displayName}
      </h1>
      <div className="flex justify-around items-center">
        <div className="p-4 m-4 h-32 w-48 text-2xl text-indigo-800 bg-indigo-200 border border-gray-300 shadow-lg rounded flex justify-center items-center">
          {orders.length} Orders
        </div>
        <div className="p-4 m-4 h-32 w-48 text-2xl text-indigo-800 bg-indigo-200 border border-gray-300 shadow-lg rounded flex justify-center items-center">
          {books.length} Books
        </div>
        <div className="p-4 m-4 h-32 w-48 text-2xl text-indigo-800 bg-indigo-200  border border-gray-300 shadow-lg rounded flex justify-center items-center">
          21 Users
        </div>
        <div className="p-4 m-4 h-32 w-48 text-2xl text-indigo-800 bg-indigo-200 border border-gray-300 shadow-lg rounded flex justify-center items-center">
          24/7 Support
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
