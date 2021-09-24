import React from "react";
import { useContext,useState, useEffect } from 'react';
import OrderReview from "../OrderReview/OrderReview";
import Link from "next/link";
import { CartContext } from "../../pages/_app";

const OrderReviews = () => {
      const [cartData, setCartData, cartTotal ,setCartTotal, orderData, setOrderData] = useContext(CartContext);
      const [books, setBooks] = useState(cartData);
      const [totalPrice,setTotalPrice] = useState(0);
      const [shippingPrice,setShippingPrice] = useState(50);
      const [isCartEmpty,setIsCartEmpty] = useState(false);
      setCartTotal(totalPrice);
      useEffect(() => {
       sumOfPrice();
       
     },[cartData])

    //  Product price calculation
     const sumOfPrice = () => {
      let total = 0;
      let subTotal = 0;
      if (!cartData.length) {
        setTotalPrice(0);
        setShippingPrice(0);
        setIsCartEmpty(true);
      }
      cartData.map((book) => {
         total = book.bookPrice*book.quantity;
         subTotal = subTotal + total;
        setTotalPrice(subTotal);
        
      })
    }

    // Handle Cart Items quantity with plus minus icon
    const handlePlusMinus = (id,quantity) => {
      let newCart;
      cartData.map(item => {
        if (id === item._id) {
          newCart = {...item,quantity:quantity};
        }
      })
      let newData = cartData.filter(item => item._id != id)
      newData = [...newData,newCart];
      setCartData(newData);
    }

    // Delete items from cart
    const deleteItem = (id) => {
      let newData = cartData.filter(item => item._id != id)
      setCartData(newData);
      setBooks(newData);
    }


    return (
        <div>

          { !isCartEmpty &&
          <div className="md:w-4/5 mx-auto px-2 py-24">
          <div className="md:grid md:grid-cols-5">

            <div  className="md:col-span-3">
          {
            books.map((book) => (<OrderReview key={book._id} book={book} handlePlusMinus = {handlePlusMinus} deleteItem = {deleteItem}></OrderReview>))
          }
          </div>
          
          <div className="md:col-span-2 px-3 md:px-16">
            <div className="bg-white shadow-lg rounded-lg border p-12">
              <div className="flex justify-between mb-2 text-lg font-medium text-center text-gray-800"><span>Subtotal:</span><span>$ {totalPrice}</span> </div><hr/>
              <div className="flex justify-between mb-2 text-lg font-medium text-center text-gray-800"><span>Shipping:</span><span>$ {shippingPrice}</span> </div><hr/>
              <div className="flex justify-between mb-2 text-lg font-medium text-center text-gray-800"><span>Total:</span><span>$ {totalPrice+shippingPrice}</span> </div>

            </div>
            <Link href="/checkOut">
            <button className="flex justify-center w-full px-10 py-3 mt-6 font-medium text-white uppercase bg-teal-500 rounded-full shadow item-center bg-indigo-900 hover:bg-teal-700 focus:shadow-outline focus:outline-none">
              <a>Checkout</a>
            </button> 
            </Link>
          </div>
        </div>
      </div>

        }

        { isCartEmpty &&
         <div className="px-3 py-24 md:p-32">
         <div className="w-4/5 mx-auto">
          
             <div className="text-center">
                <h3 className="p-3 md:p-5 md:mx-32 rounded-full bg-indigo-200 text-yellow-600 font-medium">Your Cart is Empty!</h3>
             </div>
         </div>
     </div>
        }
    </div>
  );
};

export default OrderReviews;
