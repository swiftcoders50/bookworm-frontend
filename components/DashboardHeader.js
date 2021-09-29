import React from "react";
import Link from "next/link";
import { useAuth } from "../contexts/AuthContext";
// import { FiLogOut } from "react-icons/fi";

const DashboardHeader = ({ sectionTitle }) => {
  const { currentUser, logout } = useAuth();
  return (
    <div className="px-5 py-3 flex justify-between items-center bg-white shadow">
      <div>
        <h2 className="text-gray-700 text-lg">{sectionTitle}</h2>
      </div>
      <div className="flex justify-end items-center ">
        <Link href="/my-profile">
          <a className="mx-2 text-indigo-800 text-lg font-semibold cursor-pointer">
            {currentUser.displayName}
          </a>
        </Link>
        <div className="text-red-600 flex justify-center items-center">
          <p className="mx-2 text-lg cursor-pointer " onClick={logout}>
            Logout
          </p>
          {/* <FiLogOut /> */}
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
