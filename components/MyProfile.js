import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";

const MyProfile = () => {
	const { currentUser, passwordUpdate } = useAuth();
	const [passwordChangedField, setPasswordChangedField] = useState(false);
	const currentPasswordRef = useRef();
	const newPasswordRef = useRef();
	const [message, setMessage] = useState("");
	const [error, setError] = useState("");

	// password change handler
	const passwordChangeHandler = async (e) => {
		e.preventDefault();
		setMessage("");
		setError("");
		try {
			await passwordUpdate(newPasswordRef.current.value);
			setMessage("Successfully changed your password!");
		} catch (error) {
			setError("Password do not update!");
		}
	};

	return (
		<div className="mx-3">
			<div className="h-16"></div>
			<div className="max-w-screen-xl mx-auto bg-white shadow border p-4 sm:p-8 my-8 rounded-md">
				<div className="border-b-2">
					<h1 className="my-5 text-2xl sm:text-3xl font-semibold color-indigo-900 text-gray-900">
						My Account
					</h1>
					<h6 className="my-5 text-gray-600 text-lg font-semibold">
						Personal Information
					</h6>
				</div>
				<div className="max-w-lg">
					<div className="uppercase my-3 text-md font-semibold text-gray-900">
						Name
					</div>
					<div className="text-gray-900 bg-gray-100 text-md font-semibold p-3 rounded-md border">
						{currentUser?.displayName}
					</div>
				</div>
				<div className="max-w-lg">
					<div className="uppercase my-3 text-md font-semibold text-gray-900">
						Email
					</div>
					<div className="text-gray-900 bg-gray-100 text-md font-semibold p-3 rounded-md border">
						{currentUser?.email}
					</div>
				</div>
				{/* Password */}
				<div className="mt-16 border-b-2">
					<h3 className="uppercase mb-3 text-md font-semibold text-gray-900">
						Password
					</h3>
					{/* password changed message */}
					<div className="text-md text-green-600">{message}</div>
					<div className="text-md text-red-600">{error}</div>
				</div>
				<div className="max-w-lg">
					<div className="flex gap-5 flex-wrap uppercase my-3 text-md font-semibold text-gray-900">
						<span>Current Password</span>
						<button
							onClick={() => setPasswordChangedField(!passwordChangedField)}
							className="text-blue-900 text-md hover:underline"
						>
							Change Password
						</button>
					</div>
					<input
						type="password"
						value="01739801364"
						disabled={true}
						className="w-full text-gray-900 bg-gray-100 text-md font-semibold p-3 rounded-md border"
					/>
				</div>
				{/* Password Reset / change */}
				<div
					className={`max-w-lg ${passwordChangedField ? "block" : "hidden"}`}
				>
					<form onSubmit={passwordChangeHandler}>
						{/* new password */}
						<div className="flex gap-5 flex-wrap uppercase my-3 text-md font-semibold text-gray-900">
							<span>New Password</span>
						</div>
						<input
							type="password"
							ref={newPasswordRef}
							required
							className="w-full text-gray-900 bg-gray-100 text-md font-semibold p-3 rounded-md border focus:outline-none"
						/>
						<button
							type="submit"
							className="my-5 bg-indigo-900 text-white text-md uppercase py-2 px-8 rounded-full focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 cursor-auto sm:cursor-pointer"
						>
							Save
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default MyProfile;
