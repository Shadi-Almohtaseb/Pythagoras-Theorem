import React from "react";
import { Link } from "react-router-dom";
import math1 from "../assets/pythagorean-theorem-all-examples.png";
import math2 from "../assets/pythagorean-theorem.png";
import math3 from "../assets/pythagsub.gif";
import math4 from "../assets/pythagorean-theorem.jpg";
const Examples = () => {
  return (
    <div className="flex flex-col items-center justify-center lg:mt-96 mb-20">
      <div className="lg:absolute top-20 left-20 m-10">
        <Link to="/">
          <button className="text-2xl bg-pink-500 hover:bg-pink-600 duration-200 text-right px-8 py-5 rounded-xl text-white">
            Go Back
          </button>
        </Link>
      </div>
      <div className="flex flex-wrap gap-8 items-center justify-center mx-3">
        <div className="flex max-w-[35rem] sm:w-[32rem] items-center justify-center flex-col border-2 border-indigo-600 rounded-xl bg-slate-100 p-2 gap-8">
          <img className="" src={math2} alt="img2" />
          <a
            href="https://www.katesmathlessons.com/converse-of-the-pythagorean-theorem.html"
            target="_blank"
            className="text-xl text-blue-600 hover:underline"
          >
            See The Page
          </a>
        </div>
        <div className="flex max-w-[30rem] sm:w-[32rem] items-center justify-center flex-col border-2 border-indigo-600 rounded-xl bg-slate-100 p-2 gap-8">
          <img className="" src={math1} alt="img2" />
          <a
            href="https://www.mathwarehouse.com/geometry/triangles/how-to-use-the-pythagorean-theorem.php"
            target="_blank"
            className="text-xl text-blue-600 hover:underline"
          >
            See The Page
          </a>
        </div>
        <div className="flex max-w-[30rem] sm:w-[32rem] items-center justify-center flex-col border-2 border-indigo-600 rounded-xl bg-slate-100 p-2 gap-8">
          <img className="" src={math3} alt="img2" />
          <a
            href="https://www.learnalberta.ca/content/memg/division03/pythagorean%20theorem/index.html"
            target="_blank"
            className="text-xl text-blue-600 hover:underline"
          >
            See The Page
          </a>
        </div>
        <div className="flex max-w-[30rem] sm:w-[32rem] items-center justify-center flex-col border-2 border-indigo-600 rounded-xl bg-slate-100 p-2 gap-8">
          <img className="" src={math4} alt="img2" />
          <a
            href="http://www.gradeamathhelp.com/pythagorean-theorem.html"
            target="_blank"
            className="text-xl text-blue-600 hover:underline"
          >
            See The Page
          </a>
        </div>
      </div>
    </div>
  );
};

export default Examples;
