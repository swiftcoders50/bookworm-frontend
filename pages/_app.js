import "tailwindcss/tailwind.css";
import Layout from "../components/Layout";
import { createContext, useState } from "react";

export const CartContext = createContext();
function MyApp({ Component, pageProps }) {
  const [cartData, setCardData] = useState([]);
  return (
    <CartContext.Provider value={[cartData, setCardData]}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartContext.Provider>
  );
}

export default MyApp;
