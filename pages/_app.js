import "tailwindcss/tailwind.css";
import Layout from "../components/Layout";
import { createContext, useState } from "react";
import AuthProvider from "../contexts/AuthContext";

export const CartContext = createContext();
function MyApp({ Component, pageProps }) {
	const [cartData, setCardData] = useState([]);
	return (
		// apel-auth-comp
		<AuthProvider>
			<CartContext.Provider value={[cartData, setCardData]}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</CartContext.Provider>
		</AuthProvider>
	);
}

export default MyApp;
