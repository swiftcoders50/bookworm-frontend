import React from "react";
import Link from "next/link";
import { useAuth } from "../contexts/AuthContext";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DashboardHeader = ({ sectionTitle }) => {
  const { currentUser, logout } = useAuth();
  return (
    <div className="px-5 py-3 flex justify-between items-center bg-white shadow">
      <div>
        <h2 className="text-gray-700 text-lg">{sectionTitle}</h2>
      </div>
      <div className="flex justify-end items-center ">
        <Link href="/my-profile">
          <a className="mx-2 text-gray-800 text-lg font-semibold cursor-pointer">
            {currentUser.displayName}
          </a>
        </Link>
        <div
          className="text-red-600 flex justify-center items-center cursor-pointer"
          onClick={logout}
        >
          <p className="mx-2 text-lg">Logout</p>
          <FontAwesomeIcon icon={faSignOutAlt} />
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
