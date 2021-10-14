import "tailwindcss/tailwind.css";
import Layout from "../components/Layout";
import { createContext, useEffect, useState } from "react";
import AuthProvider from "../contexts/AuthContext";
import { DashboardProvider } from "../contexts/DashboardContext";
import AdminProvider from "../contexts/AdminContext";

export const CartContext = createContext();
export const BlogContext = createContext();

// get cart-data from localStorage
const getLocalStorageCartData = () => {
	let cartData;
	if (typeof window !== "undefined") {
		const localData = JSON.parse(localStorage.getItem("cart")) || [];
		cartData = localData;
	}
	return cartData;
};

function MyApp({ Component, pageProps }) {
	const [cartData, setCartData] = useState(getLocalStorageCartData());
	const [cartTotal, setCartTotal] = useState(0);
	const [blogData, setBlogData] = useState([]);
	const [orderData, setOrderData] = useState([]);

	// save cart-data to localStorage
	useEffect(() => {
		if (typeof window !== "undefined") {
			localStorage.setItem("cart", JSON.stringify(cartData || []));
		}
	}, [cartData]);

	return (
		<AuthProvider>
			<AdminProvider>
				<DashboardProvider>
					<BlogContext.Provider value={[blogData, setBlogData]}>
						<CartContext.Provider
							value={[
								cartData,
								setCartData,
								cartTotal,
								setCartTotal,
								orderData,
								setOrderData,
							]}
						>
							<Layout>
								<Component {...pageProps} />
							</Layout>
						</CartContext.Provider>
					</BlogContext.Provider>
				</DashboardProvider>
			</AdminProvider>
		</AuthProvider>
	);
}

export default MyApp;
