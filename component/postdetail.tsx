import Image from "next/image";
import Button from "./button";
import { MdOutlineTimer } from "react-icons/md";
import { Progress } from "@nextui-org/react";
import { formatCurrency } from "@/helpers/priceconveter";
import HeaderAndBack from "./headerandback";
const PostDetail = ({
  id,
  img,
  title,
  desc,
  goal,
  button,
  tags,
}: Essentials) => {
  const goalNumber = parseInt(goal);
  const price = 3000;
  return (
    <div className="relative">
      <div className="" key={id}>
        <div className="relative">
          {img && (
            <Image
              src={img}
              width={500}
              height={500}
              alt="image"
              className="w-[500px]"
            />
          )}
          <div className="absolute top-0 left-0 right-0 ">
            <div className="w-24 backdrop-blur-lg pl-4 pt-8">
              <HeaderAndBack arrowClassName="mb-0 font-bold" />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4 mt-8 px-4">
          {tags?.map((tag) => (
            <span
              className="bg-lightblue text-white mx-4 py-2 px-4 rounded-lg opacity-30"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="px-4 mt-12 mb-24">
          <h4 className="text-[1.5rem] font-bold font-lato">{title}</h4>
          <p className="font-lato font-normal text-[.6rem] mb-2">{desc}</p>
          <div className="flex justify-between mt-8 px-4 mb-6">
            <div className="flex flex-col gap-4">
              <span className="font-lato text-[.8rem] text-grey font-medium">
                Amount Raised
              </span>
              <span className="font-lato text-[.8rem] text-grey font-medium">
                {formatCurrency(price)} - {formatCurrency(goal)}
              </span>
            </div>
            <div className="flex gap-2 font-lato text-[.8rem] text-grey font-medium">
              <MdOutlineTimer />
              <span>4 Days Left</span>
            </div>
          </div>
          <Progress
            size="sm"
            value={price}
            aria-label="progress"
            maxValue={goalNumber}
            color="success"
            className="max-w-md"
          />
          <div className="flex items-center justify-center mt-6">
            {button && (
              <Button className="bg-lightblue mt-3 mx-auto text-white px-8 py-2 rounded-md text-[1rem]">
                {button}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
