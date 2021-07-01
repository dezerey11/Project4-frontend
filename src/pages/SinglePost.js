import React, { useEffect, useState } from "react";
import { GlobalCtx } from "../App";

const SinglePost = (props) => {
  const { gState } = React.useContext(GlobalCtx);

  const [post, setPost] = useState(null);

  const getPost = () => {
    // fetch makes a get request by default
    fetch(gState.url + "posts/" + props.match.params.id)
      .then((response) => response.json())
      .then((data) => setPost(data));
  };

  useEffect(() => {
    getPost();
  }, []);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <br />
      <img src={post.image} width="100px" />
      <br />
      <h1>{post.title}</h1>
      <h3>{post.description}</h3>
      <span>${post.price}.00</span>
      <h3>{post.contact}</h3>
    </div>
  );
};
export default SinglePost;
