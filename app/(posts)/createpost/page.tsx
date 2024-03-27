import Link from "next/link";
import TopTab from "@/component/toptab";
import PostList from "@/component/postlist";
import { FaRegEdit } from "react-icons/fa";
import { CgAddR } from "react-icons/cg";
import { posts } from "@/data/posts";

const CreatePost = () => {
  return (
    <main className="mx-auto p-4 mb-24">
      <div>
        <h3 className="font-lato text-[2rem] font-semibold">Create a post </h3>
        <div className="flex justify-center items-center mt-10 mb-7">
          <Link
            href="/newproject"
            className="w-full bg-buttons h-[50px] ml-1.5 text-gray-700 py-2 rounded-md flex items-center justify-center gap-3 border rounded-md p-4  capitalize
                    font-lato font-semibold "
          >
            <CgAddR className="w-4 h-6" />
            <span>Create a project</span>
          </Link>
          <Link
            href="/newpost"
            className="w-full h-[50px] ml-1.5 text-gray-700 bg-buttons rounded-md py-2 flex items-center justify-center gap-3 bg-buttons border rounded-md p-4  capitalize
                    font-lato font-semibold "
          >
            <FaRegEdit />
            <span>Write a post</span>
          </Link>
        </div>
        <TopTab />
        <div className="mt-[1rem] flex items-center flex-col gap-4">
          {posts.map((post) => (
            <Link href={`/postdetails/${post.id}`} key={post.id}>
              <PostList
                id={post.id}
                img={post.img}
                title={post.title}
                desc={post.desc}
                goal={post.goal}
              />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default CreatePost;
