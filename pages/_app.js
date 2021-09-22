import "tailwindcss/tailwind.css";
import Layout from "../components/Layout";
import { createContext, useState } from "react";
import AuthProvider from "../contexts/AuthContext";

export const CartContext = createContext();
export const BlogContext = createContext();
function MyApp({ Component, pageProps }) {
	const [cartData, setCartData] = useState([]);
	const [cartTotal, setCartTotal] = useState(0);
	const [blogData, setBlogData] = useState([]);
	const [orderData, setOrderData] = useState([]);
	return (
		<AuthProvider>
			<BlogContext.Provider value={[blogData, setBlogData]}>
				<CartContext.Provider
					value={[cartData, setCartData, cartTotal, setCartTotal, orderData, setOrderData]}
				>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</CartContext.Provider>
			</BlogContext.Provider>
		</AuthProvider>
	);
}

export default MyApp;
