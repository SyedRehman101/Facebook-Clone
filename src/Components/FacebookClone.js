import React from "react";
import fb from "../ff.svg";
import "./FacebookClone.css";

const FacebookClone = () => {
  return (
    <>
      <div className="container mt-36  flex mx-auto justify-center  content-start">
        <div className="left w-1/3 mx-14 ">
          <img className="w-80" src={fb} alt="" />
          <p className="text-2xl mx-8">
            Facebook helps you connect and share with the people in your life.
          </p>
        </div>
        <div className="right flex flex-col bg-white p-4 rounded-lg w-1/4 text-lg shadow-xl relative">
          <input
            className="px-4 h-12 my-2 outline-blue-600  border border-1 rounded-lg"
            type="text"
            placeholder="Email address or phone number"
          />
          <input
            className="px-4 h-12 my-2 outline-blue-600 border border-1 rounded-lg"
            type="password"
            placeholder="Password"
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white my-2 py-3 rounded-md font-bold cursor-pointer "> Log in</button>
          <span className="text-center text-blue-600 text-sm my-2 cursor-pointer hover:underline">Forgotten password?</span>
          <hr className="my-3" />
          <button className="bg-green-600 hover:bg-green-700 text-white my-2 py-3 rounded-md font-bold cursor-pointer w-fit px-4 mx-auto">Create New Account</button>
          <span className=" absolute -bottom-12 mx-7 text-sm"><span className="font-bold hover:underline cursor-pointer">Create a Page</span> for a celebrity, brand or business.</span>

        </div>
      </div>
    </>
  );
};

export default FacebookClone;
