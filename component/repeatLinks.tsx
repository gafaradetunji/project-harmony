import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import React from "react";
import { Switch } from "@nextui-org/react";

const RepeatLinks = ({
  img,
  title,
  link,
  arrow,
  pushnotification,
}: {
  img?: string;
  title: string;
  link?: string;
  arrow?: boolean;
  pushnotification?: boolean;
}) => {
  const links = link ? link : "#";
  return (
    <div className="">
      <Link
        href={links}
        className="px-4 py-2 border-b-[1px] border-borderInput flex items-center justify-between"
      >
        <div className="flex items-center gap-2">
          {img && <Image src={img} width={20} height={20} alt={title} />}
          <h4 className="text-[1rem] font-normal font-lato">{title}</h4>
        </div>
        {arrow && <IoIosArrowForward className={`h-12 w-6`} />}
        {pushnotification && (
          <Switch defaultSelected aria-label="Automatic updates" />
        )}
      </Link>
    </div>
  );
};

export default RepeatLinks;
