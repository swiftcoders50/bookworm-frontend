import "tailwindcss/tailwind.css";
import Layout from "../components/Layout";
import { createContext, useState } from "react";
import AuthProvider from "../contexts/AuthContext";

export const CartContext = createContext();
export const BlogContext = createContext();
function MyApp({ Component, pageProps }) {
	const [cartData, setCardData] = useState([]);
	const []
	return (
		// apel-auth-comp
		<AuthProvider>
			<BlogContext.Provider value={[blogData, setBlogData]}>
			<CartContext.Provider value={[cartData, setCardData]}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</CartContext.Provider>
			</BlogContext.Provider>
		</AuthProvider>
	);
}

export default MyApp;
