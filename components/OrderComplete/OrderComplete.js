import React from 'react';
import { useState } from 'react';
import { StripeCheckout } from 'react-stripe-checkout';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import { useContext } from 'react';
import { CartContext } from './../../pages/_app';
import { useEffect } from 'react';

const OrderComplete = () => {
    const [cartData, setCartData, cartTotal ,setCartTotal, orderData, setOrderData] = useContext(CartContext);    
    useEffect(() => {
        setCartData([]);
        setCartTotal(0);
        setOrderData([]);
    },[])
    return (
        <div className="px-3 py-24 md:p-32">
            <div className="w-4/5 mx-auto">
             
                <div className="text-center">
                   <h3 className="p-3 md:p-5 md:mx-32 rounded-full bg-indigo-200 text-green-800 font-medium">Your Order is completed successfully...</h3>

                   {/* <button className="px-12 py-2 mt-5 text-gray-200 rounded-full bg-indigo-900" onClick={() => setShowGetway(!showGetway)} >Pay Bill</button> */}
                </div>
            </div>
        </div>
    );
};

export default OrderComplete;