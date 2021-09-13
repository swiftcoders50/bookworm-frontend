import React from "react";
import { useContext,useState, useEffect } from 'react';
import OrderReview from "../OrderReview/OrderReview";
import Link from "next/link";
import { CartContext } from "../../pages/_app";

const OrderReviews = () => {
      const [cartData, setCardData] = useContext(CartContext);
      const [books, setBooks] = useState(cartData);
      const [totalPrice,setTotalPrice] = useState(0);

      console.log(cartData);
      useEffect(() => {
       sumOfPrice();
     },[cartData])

     const sumOfPrice = () => {
      let total = 0;
      let subTotal = 0;
      cartData.map((book) => {
         total = book.price*book.quantity;
         subTotal = subTotal + total;
         console.log(total);
        setTotalPrice(subTotal);
        
      })
    }

    const handlePlus = (id) => {
      let newCart;
      cartData.map(item => {
        if (id == item.id) {
          let quantity = ++item.quantity;
          newCart = {...item,quantity:quantity};
        }
      })
      console.log(newCart);
      let newData = cartData.filter(item => item.id != id)
      newData = [...newData,newCart];
      console.log(newData);
      setCardData(newData);
    }
    return (
        <div>
          <div className="flex w-4/5 m-auto py-24">
          <div className="grid md:grid-cols-5">
            <div  className="col-span-3">
          {
            books.map((book) => (<OrderReview key={book.id} book={book} handlePlus = {handlePlus}></OrderReview>))
          }
          </div>
          <div className="col-span-2 px-3 md:px-16">
            <div className="bg-white shadow-lg rounded-lg border p-12">
              <div className="flex mb-3 justify-between"><span>Subtotal:</span><span>$ {totalPrice}</span> </div><hr/>
              <div className="flex mb-3 justify-between"><span>Shipping:</span><span>$ 50</span> </div><hr/>
              <div className="flex mb-3 justify-between"><span>Total:</span><span>$ {totalPrice+50}</span> </div>

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