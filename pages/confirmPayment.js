import React from 'react';
import ProcessPayment from '../components/ProcessPayment/ProcessPayment';

const confirmPayment = () => {
    return (
        <div className="px-3 py-24 md:p-32">
            <div className="md:w-3/5 lg:w-2/5 mx-auto">
                    <div className="bg-white shadow-lg rounded-lg border p-16 mb-2">
                        <ProcessPayment/>
                    </div>
                </div>
        </div>
    );
};

export default confirmPayment;