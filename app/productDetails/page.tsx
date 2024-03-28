import Link from "next/link";
import React from "react";

import { IoIosArrowBack } from "react-icons/io";
import { CiAlarmOn } from "react-icons/ci";

import Button from "@/component/button";
import ProgressBar from "@/component/progress";

const productDetails = () => {
  return (
    <div className=" h-[100vh]">
      <div className="w-full h-72">
        <div
          className="w-full h-full bg-cover bg-center p-7 relative"
          style={{
            backgroundImage: `linear-gradient(to top right, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.8)), url('https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?size=626&ext=jpg&ga=GA1.2.2142128256.1682845099&semt=sph')`,
          }}
        >
          {/* <div
            className="absolute top-0 left-0 w-full h-full filter blur-sm"
            style={{
              background: `linear-gradient(to top right, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.8))`,
            }}
          ></div> */}
          <div className="border rounded-full w-12 h-12 p-6 flex justify-center items-center bg-[#AFA8A8]">
            <Link href={`/`}>
              <IoIosArrowBack
                style={{
                  fontSize: "25px",
                  marginRight: "8px",
                  alignItems: "center",
                }}
              />
            </Link>
          </div>
        </div>
      </div>
      <Button
        className="w-[100px] h-[50px] ml-4 mt-8 text-white bg-[#7BA4FF] hover:text-lightblue hover:bg-white rounded"
        type="submit"
      >
        tech
      </Button>

      <h1 className="text-2xl font-medium mx-4 my-5">E-commerce website</h1>
      <p className="text-lg font-normal mx-4 my-5">
        This is a description for an e-commerce website that i am building, your
        contribution towards it will ensure that the website is a success.
        Please donate towards this project.{" "}
      </p>

      <div className="flex justify-between mx-4">
        <div className="flex flex-col">
          <span className="text-base font-normal mb-4">Amount raised</span>
          <p className="text-lg font-medium">$300 - $ 500</p>
        </div>

        <div className="flex  ">
          <CiAlarmOn
            style={{
              fontSize: "25px",
              alignItems: "center",
            }}
          />
          <span className="ml-2 text-center text-base font-normal">
            4 days left
          </span>
        </div>
      </div>

      <div className="w-[90%]">
        <ProgressBar bgcolor="#00FFFF" completed={70} />
      </div>

      <div className="flex justify-center mt-10 pb-10">
        <Button
          className="w-[170px] h-[50px] mr-1.5 text-white bg-lightblue hover:text-lightblue hover:bg-white rounded"
          type="submit"
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default productDetails;
