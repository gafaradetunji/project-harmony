import HeaderAndBack from "@/component/headerandback";
import Input from "@/component/input";
import Button from "@/component/button";

const NewPost = () => {
  return (
    <main className="mx-auto p-4 mb-24">
      <HeaderAndBack title="New Post" />
      <div className="mt-8 w-full border-b-borderInput border-b-[1px] mb-8">
        <Input
          id="title"
          name="title"
          type="text"
          placeholder="Title"
          className="mt-3 pl-4 py-2 h-[5rem] w-full"
        />
      </div>
      <textarea
        name="description"
        placeholder="Write Something..."
        className="h-[10rem] rounded-md mt-3 mb-8 pl-4 py-2 w-full focus:border-lightblue"
      ></textarea>
      <Input
        id="category"
        name="category"
        label="Categories"
        type="text"
        placeholder="New category "
        className="mt-3 pl-4 py-2 w-[50%] border border-borderInput"
      />
      <Button className="bg-lightblue mt-6 text-white px-8 py-3 rounded-md text-[1rem] w-full mt-12">
        Publish
      </Button>
    </main>
  );
};

export default NewPost;
