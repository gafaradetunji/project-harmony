import Image from "next/image";
import React from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";

import {
  MdOutlineDashboard,
  MdOutlineMoney,
  MdOutlinePublishedWithChanges,
} from "react-icons/md";

const Sidebar = () => {
  return (
    <div
      className="absolute left-0 flex flex-col h-full w-[270px] bg-white border-r shadow-lg z-10"
      style={{ paddingTop: "70px", paddingLeft: "40px" }}
    >
      <div className="mb-2">
        <Image
          src="https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?size=626&ext=jpg&ga=GA1.2.2142128256.1682845099&semt=sph"
          alt="profile img"
          width={100}
          height={100}
          priority
          className="w-30 h-30 rounded-full items-center border border-[#8E8181] object-cover"
        />
      </div>

      <h1 className="font-medium text-lg">Ama Peter</h1>

      <div
        className="flex items-center mt-3"
        style={{ padding: "10px 10px 10px 0px" }}
      >
        <div className="flex cursor-pointer">
          <MdOutlineDashboard
            style={{ fontSize: "20px", marginRight: "10px" }}
          />
          <span className="text-normal font-medium">Dashboard</span>
        </div>
      </div>

      <div
        className="flex justify-between items-center mt-3"
        style={{ padding: "10px 10px 10px 0px" }}
      >
        <div className="flex cursor-pointer">
          <MdOutlineMoney style={{ fontSize: "20px", marginRight: "10px" }} />
          <span className="text-normal font-medium">Monitize</span>
        </div>
        <div className="cursor-pointer">
          <IoIosArrowUp />
        </div>
      </div>

      <div
        className="flex items-center justify-between mt-3"
        style={{ padding: "10px 10px 10px 0px" }}
      >
        <div className="flex cursor-pointer">
          <MdOutlinePublishedWithChanges
            style={{ fontSize: "20px", marginRight: "10px" }}
          />
          <span className="text-normal font-medium">Publish</span>
        </div>

        <div className="cursor-pointer">
          <IoIosArrowUp />
        </div>
      </div>

      <div
        className="flex items-center mt-3"
        style={{ padding: "10px 10px 10px 0px" }}
      >
        <div className="flex cursor-pointer">
          <IoSettingsOutline
            style={{ fontSize: "20px", marginRight: "10px" }}
          />
          <span className="text-normal font-medium">Settings</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
