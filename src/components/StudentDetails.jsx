import React from "react";

const StudentDetails = () => {
  return (
    <div className="xl:absolute m-10 top-20 right-8 flex flex-col gap-1">
      <span className="text-2xl bg-cyan-500 px-8 py-5 rounded-xl text-white font-bold">
        Pythagoras Theorem Calculator
      </span>
      <span className="text-2xl bg-cyan-500 text-right px-8 py-5 rounded-xl text-white">
        <p>Calculate any edge length</p>
      </span>
      <span className="text-2xl bg-cyan-500 text-right px-8 py-5 rounded-xl text-white">
        Real Examples Page
      </span>
      <span className="text-2xl bg-cyan-500 text-right px-8 py-5 rounded-xl text-white">
        Form Validation
      </span>
    </div>
  );
};

export default StudentDetails;
