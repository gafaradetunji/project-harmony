import React from "react";
// import { useRouter } from 'next/navigation'
import PostDetails from "@/component/postdetails";

const PostDetail = ({ params }: { params: { postdetail: string } }) => {
  console.log(params.postdetail);
  const postId = params.postdetail;
  return (
    <div>
      {/* <h1>Post Detail { params.postdetail } </h1> */}
      {postId && <PostDetails postId={postId as string} />}
    </div>
  );
};

export default PostDetail;
