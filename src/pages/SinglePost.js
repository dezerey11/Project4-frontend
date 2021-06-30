import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
      <image src={post.image} width="100px" />

      <h3>{post.image}</h3>
      <h3>{post.title}</h3>
      <h3>{post.decsription}</h3>
      <h3>{post.price}</h3>
      <h3>{post.contact}</h3>
      <Link to="/">
        <button>Return Home</button>
      </Link>
    </div>
  );
};
export default SinglePost;
