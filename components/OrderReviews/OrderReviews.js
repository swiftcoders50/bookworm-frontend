import React from "react";
import { useState, useEffect } from 'react';
import OrderReview from "../OrderReview/OrderReview";
import Link from "next/link";

const OrderReviews = () => {
    const fBooks = [
        {
          id: 1,
          name: "Origin",
          author: "Dan Brown",
          price: 99,
          img: "/assets/book-images/origin.jpg",
          quantity: 2
        },
        {
          id: 2,
          name: "The Subtle Art of Not Givig A F*ck",
          author: "Marijn Haverbake",
          price: 70,
          img: "/assets/book-images/subtleArt.jpg",
          quantity: 1
        },
    
        {
          id: 4,
          name: "The Da Vinci Code",
          author: "Dan Brown",
          price: 80,
          img: "/assets/book-images/vinci.jpg",
          quantity: 5
        },
        {
          id: 5,
          name: "Half Girlfriend",
          author: "Chetan Bhagat",
          price: 50,
          img: "/assets/book-images/hgf.jpg",
          quantity: 1
        },
      ];
      const [totalPrice,setTotalPrice] = useState(0);
      // Function for total price
      useEffect(() => {
       sumOfPrice();
     },[])
     const sumOfPrice = () => {
      let total = 0;
      let subTotal = 0;
      fBooks.map((book) => {
         total = book.price*book.quantity;
         subTotal = subTotal + total;
         console.log(total);
        setTotalPrice(subTotal);
        
      })
    }
    return (
        <div>
          <div className="flex w-4/5 m-auto py-24">
          <div className="grid md:grid-cols-5">
            <div  className="col-span-3">
          {
            fBooks.map((book) => (<OrderReview key={book.id} book={book}></OrderReview>))
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