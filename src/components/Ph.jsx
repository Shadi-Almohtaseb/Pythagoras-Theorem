import React, { useEffect, useRef, useState } from "react";
import triangular from "../assets/triangle.png";
import ExampleButton from "./ExampleButton";

const Ph = () => {
  const [AInput, setAInput] = useState("");
  const [BInput, setBInput] = useState("");
  const [CInput, setCInput] = useState("");
  const [flag, setFlag] = useState(false);
  const [stateResult, setStateResult] = useState("");

  const userAInput = useRef("");
  const userBInput = useRef("");
  const userCInput = useRef("");
  let Result = useRef();

  const HandelSubmit = (e) => {
    e.preventDefault();
    const a = e.target.a.value;
    const b = e.target.b.value;
    const c = e.target.c.value;
    userAInput.current = a;
    userBInput.current = b;
    userCInput.current = c;
    if (userAInput.current && userBInput.current !== "") {
      Result.current = findThirdSide(userAInput.current, userBInput.current);

      setStateResult(Result.current);
    } else {
      if (userAInput.current && userCInput.current !== "") {
        Result.current = findFirstSide(userCInput.current, userAInput.current);
        setStateResult(Result.current);
      } else {
        Result.current = findFirstSide(userCInput.current, userBInput.current);
        setStateResult(Result.current);
      }
    }
  };

  function findThirdSide(a, b) {
    return Math.sqrt(a * a + b * b);
  }

  function findFirstSide(c, side) {
    return Math.sqrt(c * c - side * side);
  }

  useEffect(() => {
    if (AInput !== "" && BInput !== "") {
      setFlag(true);
    } else if (AInput !== "" && CInput !== "") {
      setFlag(true);
    } else if (CInput !== "" && BInput !== "") {
      setFlag(true);
    } else {
      setFlag(false);
    }
  }, [AInput, BInput, CInput]);

  return (
    <div>
      <ExampleButton />
      <div>
        <div className="flex items-center justify-center flex-col my-5">
          <img className="w-[20rem]" src={triangular} alt="img" />
          <span className="text-3xl text-white bg-red-500 px-5 mt-5 py-2 rounded-lg">
            Enter Two Values
          </span>
        </div>
        <div className="flex items-center justify-center mt-10">
          <form
            onSubmit={(e) => HandelSubmit(e)}
            className="sm:flex  sm:items-center sm:justify-center gap-5"
          >
            <div className="flex flex-col gap-2">
              <div>
                <span>a:</span>
                <input
                  type="number"
                  placeholder="Enter a"
                  className="bg-slate-200 rounded-xl mx-2 px-8 py-3"
                  onChange={(e) => setAInput(e.target.value)}
                  name="a"
                  disabled={flag && AInput === ""}
                />
              </div>
              <div>
                <span>b:</span>
                <input
                  type="number"
                  placeholder="Enter b"
                  className="bg-slate-200 rounded-xl mx-2 px-8 py-3"
                  onChange={(e) => setBInput(e.target.value)}
                  name="b"
                  disabled={flag && BInput === ""}
                />
              </div>
              <div>
                <span>c:</span>
                <input
                  type="number"
                  placeholder="Enter c"
                  className="bg-slate-200 rounded-xl mx-2 px-8 py-3"
                  onChange={(e) => setCInput(e.target.value)}
                  name="c"
                  disabled={flag && CInput === ""}
                />
              </div>
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-400 duration-200 text-white mx-3 my-2 px-3 py-2 rounded-xl"
              >
                Submit
              </button>
            </div>
            <div className="flex items-center justify-center gap-5 mb-12 ml-16">
              <span className="bg-blue-500 text-xl text-white mx-3 my-2 px-3 py-2 rounded-xl">
                Result: {stateResult}
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Ph;
