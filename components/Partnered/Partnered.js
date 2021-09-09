import React from "react";

const Partnered = () => {
  return (
    <div className="w-full bg-blue-400 pt-24 pb-14">
      <h1 className="text-center font-bold text-4xl pt-5 text-white mb-14">
        Some of Publisher we partnered for
      </h1>
      <div className="px-2">
        <div className="flex justify-around  flex-wrap">
          <img
            className="w-36 h-24"
            src="/assets/partnersImg/download.jpeg"
            alt=""
          />
          <img
            className="w-36 h-24"
            src="/assets/partnersImg/download1.jpeg"
            alt=""
          />
          <img
            className="w-36 h-24"
            src="/assets/partnersImg/download2.jpeg"
            alt=""
          />
        </div>
        <div className="flex justify-around  flex-wrap mt-16">
          <img
            className="w-36 h-24"
            src="/assets/partnersImg/download3.jpeg"
            alt=""
          />
          <img
            className="w-36 h-24"
            src="/assets/partnersImg/download4.jpeg"
            alt=""
          />
          <img
            className="w-36 h-24"
            src="/assets/partnersImg/download5.jpeg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Partnered;
