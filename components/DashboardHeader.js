import React from "react";
import Link from "next/link";
import { useAuth } from "../contexts/AuthContext";

const DashboardHeader = ({ sectionTitle }) => {
  const { currentUser, logout } = useAuth();
  return (
    <div className="px-5 py-3 flex justify-between items-center bg-white shadow">
      <div>
        <h2 className="text-gray-700 text-lg">{sectionTitle}</h2>
      </div>
      <div className="flex justify-end items-center ">
        <p
          className="mx-2 text-gray-700 text-lg cursor-pointer "
          onClick={logout}
        >
          Logout
        </p>
        <Link href="/my-profile">
          <a className="mx-2 text-gray-700 text-lg cursor-pointer">
            {currentUser.displayName}
          </a>
        </Link>
      </div>
    </div>
  );
};

export default DashboardHeader;
