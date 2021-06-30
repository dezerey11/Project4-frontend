import React, { useEffect, useState } from "react";
import { GlobalCtx } from "../App";

const NewPost = (props) => {
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
  return <h1> NewPost Component</h1>;
};
export default NewPost;
