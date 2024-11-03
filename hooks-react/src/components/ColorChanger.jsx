import React, { useState } from "react";

function Button({ color }) {}

function ColorChanger() {
  const [colour, setColour] = useState("Green");
  return (
    <div
      className="  w-full h-screen duration-200 flex justify-center"
      style={{ backgroundColor: colour }}
    >
      <div className=" w-[96%] flex  flex-wrap border border-black text-xl p-2 gap-5 bg-gray-400 m-3 box-content rounded-3xl justify-evenly fixed bottom-8   ">
        <button
          onClick={() => setColour("Red")}
          className="p-1   rounded-3xl pl-5 pr-5 pt-1 pb-1"
          style={{ backgroundColor: "Red", color: "white" }}
        >
          Red
        </button>
        <button
          onClick={() => setColour("Brown")}
          className=" text-center   rounded-3xl pl-5 pr-5 pt-1 pb-1 " 
          style={{ backgroundColor: "Brown", color: "white" }}
        >
          Brown
        </button>
        <button
          onClick={() => setColour("Gray")}
          className="p-1   rounded-3xl pl-5 pr-5 pt-1 pb-1"
          style={{ backgroundColor: "Gray", color: "white" }}
        >
          Gray
        </button>
        <button
          onClick={() => setColour("Olive")}
          className="p-1   rounded-3xl pl-5 pr-5 pt-1 pb-1"
          style={{ backgroundColor: "Olive", color: "white" }}
        >
          Olive
        </button>
        <button
          onClick={() => setColour("#4280fb")}
          className="p-1    rounded-3xl pl-5 pr-5 pt-1 pb-1"
          style={{ backgroundColor: "#4280fb", color: "white" }}
        >
          Sky
        </button>
        <button
          onClick={() => setColour("Yellow")}
          className="p-1   rounded-3xl pl-5 pr-5 pt-1 pb-1"
          style={{ backgroundColor: "Yellow", color: "white" }}
        >
          Yellow
        </button>
        <button
          onClick={() => setColour("Pink")}
          className="p-1   rounded-3xl pl-5 pr-5 pt-1 pb-1"
          style={{ backgroundColor: "Pink", color: "white" }}
        >
          Pink
        </button>
        <button
          onClick={() => setColour("Orange")}
          className="p-1   rounded-3xl pl-5 pr-5 pt-1 pb-1"
          style={{ backgroundColor: "Orange", color: "white" }}
        >
          Orange
        </button>
        <button
          onClick={() => setColour("Blue")}
          className="p-1   rounded-3xl pl-5 pr-5 pt-1 pb-1"
          style={{ backgroundColor: "Blue", color: "white" }}
        >
          Blue
        </button>
        <button
          onClick={() => setColour("Green")}
          className="p-1    rounded-3xl pl-5 pr-5 pt-1 pb-1"
          style={{ backgroundColor: "Green", color: "white" }}
        >
          Green
        </button>
      </div>
    </div>
  );
}

export default ColorChanger;
