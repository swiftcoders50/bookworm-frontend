import React from 'react';
import { useState } from 'react';
import { StripeCheckout } from 'react-stripe-checkout';
import ProcessPayment from '../ProcessPayment/ProcessPayment';

const OrderComplete = () => {
    const [showGetway,setShowGetway] = useState(false);
    return (
        <div className="px-3 py-24 md:p-32">
            <div className="w-4/5 mx-auto">
                { !showGetway &&
                <div className="text-center">
                   <h3 className="p-3 md:p-5 md:mx-32 rounded-full bg-indigo-200 text-green-800 font-medium">Your Order is completed successfully, order id is 344555...</h3>
                   <button className="px-12 py-2 mt-5 text-gray-200 rounded-full bg-indigo-900" onClick={() => setShowGetway(!showGetway)} >Pay Bill</button>
                </div>
                }
                { showGetway &&
                <div className="md:w-3/5 lg:w-2/5 mx-auto">
                    <div className="bg-white shadow-lg rounded-lg border p-16 mb-2">
                        <ProcessPayment/>
                    </div>
                </div>
                }
            </div>
        </div>
    );
};

export default OrderComplete;