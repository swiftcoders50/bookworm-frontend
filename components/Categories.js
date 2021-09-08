import React from "react";
import { FaBusinessTime, FaBookOpen } from "react-icons/fa";
import { GiSkills, GiCutDiamond } from "react-icons/Gi";

const Categories = () => {
  return (
    <div className="card-section flex justify-center flex-wrap">
      {/* business-card */}
      <div className="m-5 p-10 min-h-80 w-72 border shadow-sm">
        <div className="p-5 flex justify-center items-center">
          <div className="business-card-logo-section py-2 h-12 w-14 bg-red-300 flex justify-center items-center rounded-full">
            <FaBusinessTime className="text-4xl" />
          </div>
        </div>
        <div className="business-card-content text-center">
          <h1 className="mb-2 text-xl font-bold">Business &amp; Finance</h1>
          <p>Books about Business World</p>
        </div>
      </div>
      {/* self-improvement-card */}
      <div className="m-5 p-10 min-h-80 w-72 border shadow-sm">
        <div className="p-5 flex justify-center items-center">
          <div className="business-card-logo-section py-2 h-12 w-14 bg-red-300 flex justify-center items-center rounded-full">
            <GiCutDiamond className="text-4xl" />
          </div>
        </div>
        <div className="self-improvement-card-content text-center">
          <h1 className="mb-2 text-xl font-bold">Self Improvement</h1>
          <p>Books to Motivate Yourself</p>
        </div>
      </div>
      {/* novel-card */}
      <div className="m-5 p-10 min-h-80 w-72 border shadow-sm">
        <div className="p-5 flex justify-center items-center">
          <div className="business-card-logo-section py-2 h-12 w-14 bg-red-300 flex justify-center items-center rounded-full">
            <FaBookOpen className="text-4xl" />
          </div>
        </div>
        <div className="novel-card-content text-center">
          <h1 className="mb-2 text-xl font-bold">Novel Telenovela</h1>
          <p>Books about Great Story</p>
        </div>
      </div>
      {/* skill-card */}
      <div className="m-5 p-10 min-h-80 w-72 border shadow-sm">
        <div className="p-5 flex justify-center items-center">
          <div className="business-card-logo-section py-2 h-12 w-14 bg-red-300 flex justify-center items-center rounded-full">
            <GiSkills className="text-4xl" />
          </div>
        </div>
        <div className="skill-card-content text-center">
          <h1 className="mb-2 text-xl font-bold">Skill in Future</h1>
          <p>Books about Business World</p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
