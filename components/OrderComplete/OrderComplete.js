import React from 'react';
import { useState } from 'react';
import { StripeCheckout } from 'react-stripe-checkout';
import ProcessPayment from '../ProcessPayment/ProcessPayment';

const OrderComplete = () => {
    const [showGetway,setShowGetway] = useState(false);
    return (
        <div className="p-32">
            <div className="w-2/5 mx-auto">
                { !showGetway &&
                <div>
                   <h3>Your Order is completed successfully, order id is 344555...</h3>
                   <button className="px-12 py-2 mt-5 text-gray-200 rounded-full bg-indigo-900" onClick={() => setShowGetway(!showGetway)} >Pay Bill</button>
                </div>
                }
                { showGetway &&
                    <div className="bg-white shadow-lg rounded-lg border p-16 mb-2">
                        <ProcessPayment/>
                    </div>
                }
            </div>
        </div>
    );
};

export default OrderComplete;