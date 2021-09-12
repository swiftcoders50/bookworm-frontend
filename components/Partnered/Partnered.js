import React from "react";

const Partnered = () => {
  return (
    <div className="mx-20">
      <div className="border-b border-gray-200 pb-2">
        <h1 className="text-xl md:text-3xl font-semibold text-indigo-900">
          Some of our partners
        </h1>
      </div>

      <div className="flex justify-around flex-wrap mt-10">
        <img
          className="h-24 w-36"
          src="/assets/partnersImg/download.jpeg"
          alt=""
        />
        <img
          className="h-24 w-36"
          src="/assets/partnersImg/download1.jpeg"
          alt=""
        />
        <img
          className="h-24 w-36"
          src="/assets/partnersImg/download3.jpeg"
          alt=""
        />
        <img
          className="h-24 w-36"
          src="/assets/partnersImg/download4.jpeg"
          alt=""
        />
      </div>

      <div className="flex justify-around flex-wrap mt-10">
        <img
          className="h-24 w-36"
          src="/assets/partnersImg/download5.jpeg"
          alt=""
        />
        <img
          className="h-24 w-36"
          src="/assets/partnersImg/download6.jpeg"
          alt=""
        />
        <img
          className="h-24 w-36"
          src="/assets/partnersImg/download7.jpeg"
          alt=""
        />
        <img
          className="h-24 w-36"
          src="/assets/partnersImg/download9.jpeg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Partnered;
