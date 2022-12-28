import React from "react";
import { Link } from "react-router-dom";

const ExampleButton = () => {
  return (
    <div className="lg:absolute top-20 left-20 m-10">
      <Link to="/examples">
        <button className="text-2xl bg-pink-500 hover:bg-pink-600 duration-200 text-right px-8 py-5 rounded-xl text-white">
          See Examples
        </button>
      </Link>
    </div>
  );
};

export default ExampleButton;
