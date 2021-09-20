import React, { useRef, useState } from "react";
import { BsPersonFill } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import { HiLockClosed } from "react-icons/hi";
import Link from "next/link";
import { useAuth } from "../contexts/AuthContext";

const Login = () => {
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState("");
	const [error, setError] = useState("");
	const emailRef = useRef();
	const passwordRef = useRef();
	const { login } = useAuth();

	// submit user information for login
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			setMessage("");
			setError("");
			setLoading(true);
			await login(emailRef.current.value, passwordRef.current.value);
			setMessage("Login successful");
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
						Log In
					</h1>
					{/* show error / message */}
					<div className="text-md text-green-600 font-semibold">{message}</div>
					<div className="text-md text-red-600 font-semibold">{error}</div>
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
						{/* password field */}
						<div className="my-4 flex items-center border border-gray-300 text-indigo-900 p-2 rounded">
							<HiLockClosed className="mr-1" size="1.2rem" />
							<input
								type="password"
								ref={passwordRef}
								placeholder="Enter Password"
								className="text-lg text-indigo-900 outline-none flex-1"
								required
							/>
						</div>
						<input
							type="submit"
							disabled={loading}
							value={`${loading ? "Processing" : "Login"}`}
							className="my-4 w-full bg-indigo-900 text-white text-lg block font-semibold p-2 hover:ring-2 ring-indigo-400 rounded"
						/>
					</form>
					{/* forget password */}
					<div className="text-right mb-2">
						<Link href="/password-reset">
							<a className="text-indigo-900 text-md hover:font-bold">
								Forget Password ?
							</a>
						</Link>
					</div>
					<div className="flex justify-between">
						<p className="text-indigo-900 text-md">Create an account ?</p>
						<Link href="/signup">
							<a>
								<button className="text-indigo-900 text-md hover:font-bold">
									Sign Up
								</button>
							</a>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
