import React from "react";
import PostDetails from "@/component/postdetails";

const PostDetail = ({ params }: { params: { postdetail: string } }) => {
  console.log(params.postdetail);
  const postId = params.postdetail;
  return <div>{postId && <PostDetails postId={postId as string} />}</div>;
};

export default PostDetail;
