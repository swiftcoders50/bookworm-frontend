import "tailwindcss/tailwind.css";
import Layout from "../components/Layout";
import { createContext, useState } from "react";

export const CartContext = createContext();
function MyApp({ Component, pageProps }) {
  const [cartData, setCardData] = useState([]);
  const [cartTotal,setCartTotal] = useState(0);
  return (
    <CartContext.Provider value={[cartData, setCardData, cartTotal ,setCartTotal]}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartContext.Provider>
  );
}

export default MyApp;
