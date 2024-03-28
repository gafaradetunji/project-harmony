import Image from "next/image";
import Button from "./button";

const PostList = ({ id, img, title, desc, goal, button }: Essentials) => {
  return (
    <div className="flex gap-4 py-4 px-[2px]">
      {img && <Image src={img} width={82} height={75} alt="image" />}
      <div>
        <h4 className="text-[1.5rem] font-medium font-lato">{title}</h4>
        <p className="font-lato font-normal text-[.6rem] border-b-[1px] border-borderInput mb-2">
          {desc}
        </p>
        <h6 className="text-[.85rem] font-lato font-medium">
          Funding goal - ${goal}
        </h6>
        {button && (
          <Button className="bg-lightblue mt-3 text-white px-8 py-2 rounded-md text-[1rem]">
            {button}
          </Button>
        )}
      </div>
    </div>
  );
};

export default PostList;
