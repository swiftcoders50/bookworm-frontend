import React from "react";

const DashboardOrders = ({ orders }) => {
  return (
    <div className="h-full">
      <h1 className="p-8 text-xl text-gray-500 text-center">All Orders</h1>
      <div className="mx-auto mb-10 p-10 max-w-5xl bg-white border border-gray-300 rounded-md shadow">
        <div className="p-2 flex justify-between items-center border-b border-gray-300 font-semibold">
          <h1 className="w-10 sm:w-16 md:w-28 overflow-hidden">Ordered By</h1>
          <h1 className="w-10 sm:w-16 md:w-28 overflow-hidden">Contact No.</h1>
          <h1 className="w-10 sm:w-16 md:w-28 overflow-hidden">
            Ordered Books
          </h1>
          <h1 className="w-10 sm:w-16 md:w-28 overflow-hidden">Total Price</h1>
          <h1 className="w-10 sm:w-16 md:w-28 overflow-hidden">Status</h1>
        </div>
        <div className="p-2">
          {orders.map((order) => (
            <div
              key={order._id}
              className="py-2 min-h-20 flex justify-between items-center text-sm border-b border-gray-300 overflow-hidden"
            >
              <p className="w-10 sm:w-16 md:w-28 overflow-hidden">
                {order.userData.userName}
              </p>
              <p className="w-10 sm:w-16 md:w-28 overflow-hidden">
                {order.shippingData.phone}
              </p>
              {/* Books Name */}
              {/* <p className="w-10 sm:w-16 md:w-28 overflow-hidden">
                {order.orde.phone}
              </p> */}
              <ol className="w-10 sm:w-16 md:w-28 overflow-hidden" type="1">
                {order.orderData.map((book, index) => (
                  <li key={book._id}>
                    <span className="font-semibold"> {index + 1}. </span>{" "}
                    {book.bookName}
                  </li>
                ))}
              </ol>
              <p className="w-10 sm:w-16 md:w-28 overflow-hidden">
                $ {order.paymentData.totalPrice}
              </p>
              <p className="w-10 sm:w-16 md:w-28 overflow-hidden">
                {order.status}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardOrders;
