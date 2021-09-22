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
      }
      cartData.map((book) => {
         total = book.price*book.quantity;
         subTotal = subTotal + total;
        setTotalPrice(subTotal);
        
      })
    }

    // Handle Cart Items quantity with plus minus icon
    const handlePlusMinus = (id,quantity) => {
      let newCart;
      cartData.map(item => {
        if (id === item.id) {
          newCart = {...item,quantity:quantity};
        }
      })
      let newData = cartData.filter(item => item.id != id)
      newData = [...newData,newCart];
      setCartData(newData);
    }

    // Delete items from cart
    const deleteItem = (id) => {
      console.log(id);
      let newData = cartData.filter(item => item.id != id)
      console.log(newData);
      setCartData(newData);
      setBooks(newData);
    }


    return (
        <div>
          <div className="flex w-4/5 m-auto py-24">
          <div className="grid md:grid-cols-5">

            <div  className="col-span-3">
          {
            books.map((book) => (<OrderReview key={book.id} book={book} handlePlusMinus = {handlePlusMinus} deleteItem = {deleteItem}></OrderReview>))
          }
          </div>
          
          <div className="col-span-2 px-3 md:px-16">
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
    </div>
  );
};

export default OrderReviews;
