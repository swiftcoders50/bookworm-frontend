import "tailwindcss/tailwind.css";
import Layout from "../components/Layout";
import { createContext, useState } from "react";
import AuthProvider from "../contexts/AuthContext";
import { DashboardProvider } from "../contexts/DashboardContext";

export const CartContext = createContext();
export const BlogContext = createContext();
function MyApp({ Component, pageProps }) {
	const [cartData, setCartData] = useState([]);
	const [cartTotal, setCartTotal] = useState(0);
	const [blogData, setBlogData] = useState([]);
	const [orderData, setOrderData] = useState([]);
	return (
		<AuthProvider>
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
		</AuthProvider>
	);
}

export default MyApp;
