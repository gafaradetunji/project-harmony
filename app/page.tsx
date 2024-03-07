"use client";

import { useState } from "react";
import Image from "next/image";

import { BiDonateBlood } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineArrowOutward } from "react-icons/md";

import Button from "@/component/button";
import SelectField from "@/component/selectField";
import ProgressBar from "@/component/progress";
import Link from "next/link";

export default function Home() {
  const [formData, setFormData] = useState({ Stack: "" });

  return (
    <main className="px-4 sm:px-8 h-[100vh]">
      <div className="flex justify-between mt-6">
        <h1 className="text-3xl font-semibold">Welcome, Ama</h1>
        <RxHamburgerMenu style={{ fontSize: "30px", cursor: "pointer" }} />
      </div>

      <div className="flex justify-center items-center mt-10 mb-7">
        <Button
          className="w-full h-[50px] mr-1.5 text-white bg-lightblue hover:text-lightblue hover:bg-white rounded"
          type="submit"
        >
          Share Page
        </Button>

        <Link
          href="/createpost"
          className="w-full h-[50px] ml-1.5 text-gray-700 bg-white border-[#007DFA] rounded text-center border rounded-lg p-4  capitalize
          font-lato font-semibold "
        >
          Create
        </Link>
      </div>

      <div className="bg-gray-50 p-3 rounded">
        <div className="flex justify-between items-center">
          <div className="flex-1 ">
            <span className="text-s">Earnings</span>
            <p className="pt-2 text-2xl">$0.00</p>
          </div>

          <div className="flex-1">
            <SelectField
              value={formData.Stack}
              onChange={() => {}}
              style={{
                borderRadius: "7px",
                padding: "16px",
                width: "100%",
                height: "55px",
                border: "1px solid gray",
                marginTop: "20px",
                outline: "none",
              }}
            />
          </div>
        </div>

        <div className="mt-5 flex justify-between items-center">
          <BiDonateBlood style={{ fontSize: "30px", cursor: "pointer" }} />
          <span>Donations</span>
          <span>$0</span>
          <span>Membership</span>
        </div>
      </div>

      <p className="text-xl font-semibold mt-6 mb-6">projects</p>

      <div className="bg-[#F0F7FF] p-3 rounded">
        <div className="w-full h-32 rounded-">
          <div
            className="w-full h-full bg-cover bg-center rounded"
            style={{
              backgroundImage: `url('https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?size=626&ext=jpg&ga=GA1.2.2142128256.1682845099&semt=sph')`,
            }}
          ></div>
        </div>

        <h1 className="mt-6 text-lg font-semibold">E-commerce website</h1>

        <p className="mt-2">
          This is a description of an e-commerce website, please donate so that
          i can launch this project
        </p>

        <div className="flex justify-between items-center ">
          <span className="flex-1 mr-14 font-semibold">$300</span>

          <ProgressBar bgcolor="#6dd187" completed={70} />
        </div>

        <div className="flex items-center justify-end">
          <span className="mr-2 text-[#007DFA] ">View Details</span>
          <MdOutlineArrowOutward style={{ color: "#007DFA" }} />
        </div>
      </div>
    </main>
  );
}
