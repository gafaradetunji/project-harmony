import React from "react";
import { posts } from "@/data/posts";
import PostDetail from "./postdetail";

const PostDetails = ({ postId }: { postId: string }) => {
  const post = posts.find((p) => p.id === postId);

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <div>
      <PostDetail
        id={post.id}
        img={post.img}
        title={post.title}
        desc={post.desc}
        goal={post.goal}
        button="Delete"
      />
    </div>
  );
};

export default PostDetails;
