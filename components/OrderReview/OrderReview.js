import React from "react";
import { FaPlus, FaMinus, FaRegTrashAlt  } from "react-icons/fa";
import { useState } from 'react';
import { useEffect } from 'react';

const OrderReview = ({book , handlePlusMinus, deleteItem}) => {
    const [quantity,setQuantity] = useState(book.quantity);
    const plus = (id) => {
        setQuantity(quantity+1);
        handlePlusMinus(id,quantity+1);
    }

    const minus = (id) => {
        if (quantity > 1) {
            setQuantity(quantity-1)
            handlePlusMinus(id,quantity-1)
        }
    }
    return (
        <div>
            <div className="bg-white shadow-lg rounded-lg border p-8 mb-2">
            <div className="grid grid-cols-4">

                <div className="grid grid-cols-2 col-span-2">

                <img className="w-24 hidden md:block" src={book.img}/>

                <div className="flex flex-wrap content-center">
                  <div>
                    <h4>{book.name}</h4>
                    <h4><i className="text-gray-500">by</i> {book.author}</h4>
                  </div>
                  </div>
                </div>
                
                <div className="flex content-center">
                <div className="flex-1 flex flex-wrap items-end justify-between content-center text-sm">
                <div className="border px-2 py-1 border-gray-400 rounded">
                <button onClick={()=> plus(book.id)} className="md:mr-4"><FaPlus className="cursor-pointer" size=".8rem" color="black" /></button>
                <input class="mx-2 text-center w-4 font-medium text-gray-800" type="text" value={quantity}/>
                <button onClick={() => minus(book.id)} className="md:ml-4"><FaMinus className="cursor-pointer" size=".8rem" color="black" /></button>
                </div>
                </div>
                </div>

                <div className="flex justify-between flex-wrap content-center">
                <button onClick={() =>deleteItem(book.id)}><FaRegTrashAlt className="cursor-pointer" size="1.4rem" color="gray" /></button>
                    <h4>$ {book.price}</h4>
                </div>
            </div>
            </div>
        </div>
    );
};

export default OrderReview;