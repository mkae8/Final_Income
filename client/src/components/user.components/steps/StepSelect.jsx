"use client";
import React from "react";

const StepSelect = () => {
  return (
    <div className="w-[384px] flex flex-col items-center mt-4">
      <div className="text-2xl font-semibold mt-4">Select base currency</div>
      <select className="select select-bordered w-full h-[64px] font-semibold text-base text-[Roboto] mt-6 bg-[#F3F4F6]">
        <option>MNT - Mongolian Tugrik</option>
        <option>USD - USA Dollar</option>
        <option>EUR - EU Dollar</option>
        <option>KRW - Korea Won</option>
      </select>
      <div className="text-[#475569] text-xs font-normal mt-3">
        Your base currency should be the one you use most often. All transaction
        in other currencies will be calculated based on this one
      </div>
    </div>
  );
};

export default StepSelect;
