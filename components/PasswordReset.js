import React, { useRef, useState } from "react";
import { BsPersonFill } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import { HiLockClosed } from "react-icons/hi";
import Link from "next/link";
import { useAuth } from "../contexts/AuthContext";

const PasswordReset = () => {
	const [error, setError] = useState("");
	const [message, setMessage] = useState("");
	const [loading, setLoading] = useState(false);
	const { passwordResetEmail } = useAuth();
	const emailRef = useRef();

	// submit user information for reset password
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			setError("");
			setLoading(true);
			await passwordResetEmail(emailRef.current.value);
			setMessage("Check your email for further instructions");
		} catch (err) {
			setError(err.message);
		}
		setLoading(false);
	};

	return (
		<div className="md:pt-20 pt-32 pb-16 bg-gradient-to-r from-gray-200 via-indigo-50 to-pink-50">
			<div className="mx-4 md:mx-16 md:grid place-items-center grid-cols-2">
				<div className="hidden md:block w-2/3">
					<img src="/assets/auth-bg.svg" alt="Auth-page-reading-book" />
				</div>
				<div className="md:w-4/5 w-full bg-white shadow-md p-5 rounded">
					<h1 className="mb-5 text-3xl text-indigo-900 font-semibold text-center">
						Password Reset
					</h1>
					<div className="text-md text-red-600 font-semibold">{message}</div>
					<form onSubmit={handleSubmit}>
						{/* email field */}
						<div className="my-4 flex items-center border border-gray-300 text-indigo-900 p-2 rounded">
							<div className="mr-1 text-indigo-900 font-bold text-xl">@</div>
							<input
								type="email"
								ref={emailRef}
								placeholder="Enter email"
								className="text-lg text-indigo-900 outline-none flex-1"
								required
							/>
						</div>
						<div>
							<input
								type="submit"
								disabled={loading}
								value={`${loading ? "Sending" : "Submit"}`}
								className="my-4 w-full bg-indigo-900 text-white text-lg block font-semibold p-2 hover:ring-2 ring-indigo-400 rounded"
							/>
						</div>
					</form>
					<div className="flex justify-between">
						<p className="text-indigo-900 text-md">Already have an account ?</p>
						<Link href="/login">
							<a>
								<button className="text-indigo-900 text-md hover:font-bold">
									Login
								</button>
							</a>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PasswordReset;
