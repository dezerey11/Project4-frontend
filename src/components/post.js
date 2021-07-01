import React from "react";

const Post = ({ post }) => {
  return (
    <div className="post">
      <img src={post.image} height="100px" width="auto" />
      <h1 className="post-title"> {post.title}</h1>
    </div>
  );
};
export default Post;
