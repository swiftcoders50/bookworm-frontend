import React from "react";
import { FaPlus, FaMinus, FaRegTrashAlt  } from "react-icons/fa";
import { useState } from 'react';
import { useEffect } from 'react';

const OrderReview = ({book , handlePlus}) => {
    const [quantity,setQuantity] = useState(book.quantity);
    const plus = (id) => {
        setQuantity(quantity+1);
        handlePlus(id);
    }
    return (
        <div>
            <div className="bg-white shadow-lg rounded-lg border p-8 mb-2">
                
            <div className="grid grid-cols-4">
                <div className="grid grid-cols-2 col-span-2 gap-2">
                <img className="w-24" src={book.img}/>
                <div className="flex flex-wrap content-center">
                <div>
                <h4>{book.name}</h4>
                <h4>{book.author}</h4>
                </div>
                </div>
                </div>
                
                <div className="flex content-center">
                <div className="flex-1 flex flex-wrap items-end justify-between content-center text-sm">
                <div className="border px-2 py-1 border-gray-400 rounded">
                <button onClick={()=> plus(book.id)} className="md:mr-4"><FaPlus className="cursor-pointer" size=".8rem" color="black" /></button>
                <input class="mx-2 text-center w-5 font-medium text-gray-800" type="text" value={quantity}/>
                <button className="md:ml-4"><FaMinus className="cursor-pointer" size=".8rem" color="black" /></button>
                </div>
                </div>
                </div>

                <div className="flex justify-between flex-wrap content-center">
                <button><FaRegTrashAlt className="cursor-pointer" size="1.4rem" color="gray" /></button>

                    <h4>$ {book.price}</h4>
                </div>
            </div>
            </div>
        </div>
    );
};

export default OrderReview;