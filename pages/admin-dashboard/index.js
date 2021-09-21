import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { useState } from "react";
import ordersData from "../../data/ordersData/ordersData";
import usersData from "../../data/usersData/usersData";
import { useAuth } from "../../contexts/AuthContext";
import { withProtected } from "../../hook/route";

const index = () => {
	const { currentUser } = useAuth();
	const [section, setSection] = useState("users");
	const [orders] = useState(ordersData);
	const [users] = useState(usersData);
	const sidebarRef = useRef(null);

	const showSidebar = () => {
		sidebarRef.current.classList.toggle("-translate-x-full");
	};

	return (
		<div className="relative min-h-screen md:flex">
			{/* Mobile Menu*/}
			<div className="bg-gray-200 text-gray-500 flex justify-between md:hidden">
				<a href="/" className="block p-4 text-indigo-900 font-bold">
					Bookworm
				</a>

				{/* mobile menu button */}
				<button
					className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700"
					onClick={showSidebar}
				>
					<svg
						className="h-5 w-5"
						xmlns="http://www.w3.org/2000/svg"
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
			</div>

			{/* sidebar */}
			<div
				id="dashboard-sidebar"
				ref={sidebarRef}
				className="sidebar bg-indigo-900 text-blue-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out"
			>
				{/* logo */}
				<a href="/" className="text-white flex items-center space-x-2 px-4">
					<span className="text-2xl font-extrabold">Bookworm</span>
				</a>

				{/* nav */}
				<nav>
					<Link href="#users">
						<a
							className="block my-2 py-2.5 px-4 text-xl rounded transition duration-200 bg-indigo-800 hover:bg-indigo-500 hover:text-white"
							onClick={() => setSection("users")}
						>
							Users
						</a>
					</Link>
					<Link href="#orders">
						<a
							className="block my-2 py-2.5 px-4 text-xl rounded transition duration-200 bg-indigo-800 hover:bg-indigo-500 hover:text-white"
							onClick={() => setSection("orders")}
						>
							Orders
						</a>
					</Link>
				</nav>
			</div>

			{/* content */}
			<div className="flex-1 p-10">
				{section === "users" ? (
					<div>
						<h1 className="font-bold text-center text-2xl">Users</h1>
						<div className="flex justify-center flex-wrap">
							{users.map((user) => {
								return (
									<div
										key={user.id}
										className="mx-2 my-4 p-8 text-base text-black-200 w-64 h-64 rounded shadow-lg border border-grey"
									>
										<p className="font-semibold">User Id: {user.id}</p>
										<p className="pt-3">Name: {user.name}</p>
										<p className="pt-3">Email: {user.email}</p>
										<p className="pt-3">Phone: {user.phone}</p>
										<p className="pt-3">Role: {user.role}</p>
									</div>
								);
							})}
						</div>
					</div>
				) : (
					<div>
						<h1 className="font-bold text-center text-2xl">Orders</h1>
						<div className="flex justify-center flex-wrap">
							{orders.map((order) => {
								return (
									<div
										key={order.id}
										className="mx-2 my-4 p-8 text-base text-black-200 w-64 h-72 rounded shadow-lg border border-grey"
									>
										<p className="font-semibold">Order Id: {order.id}</p>
										<p className="pt-3">Book Name: {order.bookName}</p>
										<p className="pt-3">Ordered By: {order.name}</p>
										<p className="pt-3">Email: {order.email}</p>
										<p className="pt-3">Phone: {order.phone}</p>
										<p className="pt-3">
											Order Status:{" "}
											<span className="capitalize font-semibold">
												{order.orderStatus}
											</span>
										</p>
									</div>
								);
							})}
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default withProtected(index);
