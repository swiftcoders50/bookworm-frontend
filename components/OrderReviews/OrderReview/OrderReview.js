import React from 'react';

const OrderReview = ({product}) => {
    return (
        <div className="grid grid-cols-6 gap-4">
            <img className="w-16" src={product.img}/>
            <div>
                <p>{product.name}</p>
                <p>{product.author}</p>
            </div>
            <div className="border border-gray-400">
                <input className="mx-2 text-center w-2 font-medium text-gray-800" type="text" value={product.quantity}/>
            </div>
            
            <button>Remove</button>
            <p>{product.price}</p>
            <p>{product.quantity*product.price}</p>
        </div>
    );
};

export default OrderReview;