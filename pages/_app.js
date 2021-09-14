import "tailwindcss/tailwind.css";
import Layout from "../components/Layout";
import { createContext, useState } from "react";

export const CartContext = createContext();
export const BlogContext = createContext();
function MyApp({ Component, pageProps }) {
  const [cartData, setCardData] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [blogData, setBlogData] = useState([]);
  return (
    <BlogContext.Provider value={[blogData, setBlogData]}>
      <CartContext.Provider
        value={[cartData, setCardData, cartTotal, setCartTotal]}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartContext.Provider>
    </BlogContext.Provider>
  );
}

export default MyApp;
