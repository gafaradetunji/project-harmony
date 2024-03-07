import HeaderAndBack from "@/component/headerandback";
import { PiUpload } from "react-icons/pi";
import Input from "@/component/input";
import Button from "@/component/button";

const NewProject = () => {
  return (
    <main className="mx-auto p-4 mb-12">
      <HeaderAndBack title="New Project" />
      <div className="w-full">
        <div className="flex items-center justify-center w-full h-[300px] rounded-md mt-6 border border-lightblue">
          <label htmlFor="inputTag" className="cursor-pointer text-center">
            <PiUpload className="mb-3 ml-8" />
            <input
              type="file"
              id="inputTag"
              className=""
              style={{ display: "none" }}
            />
            <span>Upload Image</span>
          </label>
        </div>
        <Input
          id="title"
          name="title"
          type="text"
          placeholder="Title of project"
          className="border border-borderInput mt-3 pl-4 py-2 w-full focus:border-lightblue"
        />
        <textarea
          name="description"
          placeholder="Write a description of your project"
          className="h-[10rem] rounded-md border border-borderInput mt-3 pl-4 py-2 w-full focus:border-lightblue"
        ></textarea>
        <Input
          id="category"
          name="category"
          type="text"
          placeholder="Category"
          className="border border-borderInput mt-3 pl-4 py-2 w-full focus:border-lightblue"
        />
        <Input
          id="amount"
          name="amount"
          type="text"
          placeholder="Amount $100 -$300"
          className="border border-borderInput mt-3 pl-4 py-2 w-full focus:border-lightblue"
        />
        <Button className="bg-lightblue mt-3 text-white px-8 py-3 rounded-md text-[1rem] w-full mt-12">
          create project
        </Button>
      </div>
    </main>
  );
};

export default NewProject;
