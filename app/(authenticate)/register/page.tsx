"use client";

import Button from "@/component/button";
import Link from "next/link";
import React, { useState, useRef } from "react";

const Register = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  const handleVisible = () => {
    setVisible(!visible);
  };

  return (
    <div className="mt-[10rem] px-[1.5rem] h-[100vh]">
      <h1 className="font-lato capitalize font-bold leading-normal text-[2.625rem]">
        Create account
      </h1>
      <form className="mt-[5rem] h-full">
        <label className="border border-borderInput mb-[2.5rem] rounded-sm p-4 flex items-center">
          <input
            type="text"
            className="border border-none outline outline-none pe-2 flex-grow"
            placeholder="Name"
          />
          {/* <span 
            className="material-icons-outlined text-borderInput text-xl"
            >
                mail
            </span> */}
        </label>
        <label className="border border-borderInput mb-[2.5rem] rounded-sm p-4 flex items-center">
          <input
            type="email"
            className="border border-none outline outline-none pe-2 flex-grow"
            placeholder="Email"
          />
          <span className="material-icons-outlined text-borderInput text-xl">
            mail
          </span>
        </label>

        <label className="border border-borderInput mb-[2.5rem] rounded-sm p-4 flex items-center">
          <input
            type={visible ? "text" : "password"}
            className="border border-none outline outline-none pe-2 flex-grow"
            placeholder="Password"
          />
          <span
            onClick={handleVisible}
            className="material-icons-outlined text-borderInput cursor-pointer text-xl"
          >
            {visible ? "visibility" : "visibility_off"}
          </span>
        </label>
        <p className="text-[.875rem] font-medium mt-[2rem]">
          Already have an account?
          <Link href={`/login`} className="text-lightblue">
            Sign In
          </Link>
        </p>
        <Button
          className="mt-[5rem] w-full text-white bg-lightblue hover:text-lightblue hover:bg-white"
          type="submit"
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default Register;
