"use client";

import Button from "@/component/button";
import Link from "next/link";
import React, { useState, useRef } from "react";

const Login = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  const handleVisible = () => {
    setVisible(!visible);
  };

  return (
    <div className="mt-[10rem] px-[1.5rem] h-[100vh]">
      <h1 className="font-lato capitalize font-bold leading-normal text-[2.625rem]">
        Welcome back
      </h1>
      <form className="mt-[5rem] h-full">
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
        <div className="flex items-center justify-between font-lato">
          <div>
            <input type="checkbox" className="me-3" />
            <span className="text-[.875rem] font-medium">Remember me</span>
          </div>
          <span className="text-[.875rem] font-medium">Forgot password?</span>
        </div>
        <p className="text-[.875rem] font-medium mt-[2rem]">
          Don{` ' `}t have an account?
          <Link href={`/register`} className="text-lightblue">
            Sign Up
          </Link>
        </p>
        <Button
          className="mt-[5rem] w-full text-white bg-lightblue hover:text-lightblue hover:bg-white"
          type="submit"
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
