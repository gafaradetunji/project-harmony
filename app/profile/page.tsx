"use client";

import Image from "next/image";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { IoIosArrowBack } from "react-icons/io";
import { IoCameraOutline } from "react-icons/io5";
import { GrGallery } from "react-icons/gr";
import { IoIosClose } from "react-icons/io";
import { GoPencil } from "react-icons/go";

import SelectField from "@/component/selectField";
import Button from "@/component/button";
import Input from "@/component/input";
import Link from "next/link";

interface FormData {
  username: string;
}

const Profile = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>();

  const [formData, setFormData] = useState({ Stack: "" });
  const [isEditing, setIsEditing] = useState(false);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  const handleOpenProfilePicEdit = () => {
    setIsEditing(true);
  };

  const handleCloseProfilePicEdit = () => {
    setIsEditing(false);
  };

  return (
    <div className="">
      <Link href={`/`}>
        <IoIosArrowBack style={{ fontSize: "25px", marginRight: "8px" }} />
      </Link>

      <div className="flex flex-col items-center ">
        <div className="relative flex items-center justify-center mt-4">
          <Image
            src="https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?size=626&ext=jpg&ga=GA1.2.2142128256.1682845099&semt=sph"
            alt="profile img"
            width={100}
            height={100}
            priority
            className="w-auto h-auto rounded-full items-center border border-[#8E8181] object-cover"
          />
          <div
            className="absolute bottom-0 right-0 bg-[#007DFA] flex rounded-full border border-[#007DFA] w-12 h-12 justify-center items-center cursor-pointer"
            onClick={handleOpenProfilePicEdit}
          >
            <GoPencil style={{ fontSize: "25px", color: "white" }} />
          </div>
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center mt-[10px]"
      >
        <Input
          id="username"
          name="username"
          type="text"
          register={register}
          errors={errors}
          autoComplete="username"
          placeholder="username"
          style={{
            borderRadius: "7px",
            padding: "16px",
            minWidth: "100%",
            height: "55px",
            border: "1px solid gray",
            marginTop: "20px",
            outline: "none",
          }}
        />

        <Input
          id="fullname"
          name="Full name"
          type="text"
          register={register}
          errors={errors}
          autoComplete="Full name"
          placeholder="Full name"
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

        <Input
          id="email"
          name="Email"
          type="text"
          register={register}
          errors={errors}
          autoComplete="Email"
          placeholder="Email"
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

        <Input
          id="portfolio-link"
          name="Portfolio link"
          type="text"
          register={register}
          errors={errors}
          autoComplete="Portfolio link"
          placeholder="Portfolio link"
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
      </form>

      <div className="flex justify-center items-center mt-10 mb-10">
        <Button
          className="w-full h-[50px] mr-1.5 text-gray-700 bg-white border-[#007DFA] rounded"
          type="submit"
        >
          Cancel
        </Button>

        <Button
          className="w-full h-[50px] ml-1.5 text-white bg-lightblue hover:text-lightblue hover:bg-white rounded"
          type="submit"
        >
          Save
        </Button>
      </div>

      <div
        className={`flex flex-col pb-20 edit-icon ${
          isEditing ? "" : "hidden"
        } `}
      >
        <div className="flex justify-center items-center">
          <p className="mr-[10px] text-xl font-medium cursor-pointer">
            {" "}
            Edit Profile Picture
          </p>
          <div onClick={handleCloseProfilePicEdit}>
            <IoIosClose
              style={{ fontSize: "35px", marginLeft: "8px", cursor: "pointer" }}
            />
          </div>
        </div>

        <div className="flex justify-between mt-3.5 mb-2 cursor-pointer">
          <p className="text-xl font-medium">Take Photo</p>
          <IoCameraOutline style={{ fontSize: "25px", marginRight: "8px" }} />
        </div>
        <hr className="bg-gray-700" />

        <div className="flex justify-between mt-3.5 mb-2 cursor-pointer">
          <p className="text-xl font-medium">Choose Photo</p>
          <GrGallery style={{ fontSize: "25px", marginRight: "8px" }} />
        </div>
        <hr className="bg-gray-700" />
      </div>
    </div>
  );
};

export default Profile;
