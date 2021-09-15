import React from 'react';
import { useForm } from "react-hook-form";
import { useContext } from 'react';
import { CartContext } from './_app';
import { useRouter } from "next/router";

const checkOut = () => {
    const [cartData, setCardData, cartTotal ,setCartTotal] = useContext(CartContext);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const router = useRouter()
    const onSubmit = data => {
        console.log(data);
        router.push("/orderComplete");
    }
    return (
        <div className="py-32">
            <div className="w-4/5 mx-auto">
            <div>
            <form onSubmit={handleSubmit(onSubmit)}>
               <div className="grid md:grid-cols-2 gap-12">
                <div>
                 <div className="p-3 bg-gray-100 rounded-full my-3">
                 <h1 class="ml-2 font-semibold text-teal-600 uppercase">Enter Shipping Information</h1>
                 </div>
                 <input className="px-3 py-4 my-1 border-b border-teal-300 placeholder-gray-500 text-blueGray-600 relative tracking-wide rounded-lg bg-white text-base shadow outline-none focus:outline-none focus:shadow-outline w-full" placeholder="Name" {...register("name", { required: true })} /><br/>
                 <input className="px-3 py-4 my-1 border-b border-teal-300 placeholder-gray-500 text-blueGray-600 relative tracking-wide rounded-lg bg-white text-base shadow outline-none focus:outline-none focus:shadow-outline w-full" placeholder="Email" {...register("email", { required: true })} /><br/>
                 <input className="px-3 py-4 my-1 border-b border-teal-300 placeholder-gray-500 text-blueGray-600 relative tracking-wide rounded-lg bg-white text-base shadow outline-none focus:outline-none focus:shadow-outline w-full" placeholder="Phone" {...register("phone", { required: true })} /><br/>
                 <input className="px-3 py-4 my-1 border-b border-teal-300 placeholder-gray-500 text-blueGray-600 relative tracking-wide rounded-lg bg-white text-base shadow outline-none focus:outline-none focus:shadow-outline w-full" placeholder="Address" {...register("address", { required: true })} /><br/>
                 </div>

                 <div>

                 <div className="p-3 bg-gray-100 rounded-full my-3">
                 <h1 class="ml-2 font-semibold text-teal-600 uppercase">Enter Payment Method</h1>
                 </div>

                 <label>
                 <input type="radio" value="card" className="" {...register("payment", { required: true })} />
                 <span className="ml-2 text-gray-800 font-medium">Pay with Card</span>
                 </label>
                 <br/>
                 
                 <label>
                 <input type="radio" value="bkash" className="" {...register("payment", { required: true })} />
                 <span className="ml-2 text-gray-800 font-medium">Bkash</span>
                 </label>
                 <br/>

                 <label>
                 <input type="radio" value="cash" className="" {...register("payment", { required: true })} />
                 <span className="ml-2 text-gray-800 font-medium">Cash on Delivery</span>
                 </label>
                 <br/>

                 <div className="p-3 bg-gray-100 rounded-full my-3">
                 <h1 className="ml-2 font-semibold text-teal-600 uppercase">Payable Amount</h1>
                 </div>
                 <div className="">
                     <h5 className="flex justify-between lg:px-4 m-1 text-lg font-medium text-center text-gray-800"><span>Subtotal:</span> <span>$ {cartTotal}</span></h5><hr/>
                     <h5 className="flex justify-between lg:px-4 m-1 text-lg font-medium text-center text-gray-800"><span>Shipping:</span> <span> 50</span></h5><hr/>
                     <h5 className="flex justify-between lg:px-4 m-1 text-lg font-medium text-center text-gray-800"><span>Total:</span> <span>$ {cartTotal+50}</span></h5><hr/>
                 </div>
                 <button className="flex justify-center w-full px-10 py-3 mt-6 font-medium text-white uppercase bg-teal-500 rounded-full shadow item-center bg-indigo-900 hover:bg-teal-700 focus:shadow-outline focus:outline-none">     
               <input className="ml-2 bg-indigo-900 font-semibold text-gray-200 uppercase cursor-pointer" value="Confirm Order" type="submit" />
               </button> 

                 </div>
               </div>
            </form>
            </div>
            </div>
        </div>
    );
};

export default checkOut;