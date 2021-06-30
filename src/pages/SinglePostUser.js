import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { GlobalCtx } from "../App";

const SinglePostUser = (props) => {
  const { gState } = React.useContext(GlobalCtx);
  const history = useHistory();

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

  // if the state of token changes and the token is not ready and there is no token then redirect to login
  useEffect(() => {
    if (gState.ready && !gState.token) {
      history.push("/");
    }
  }, [gState.ready, gState.token]);

  console.log(gState);

  if (!post) {
    return <div>Loading...</div>;
  }

  return <div>{post.title}</div>;
};
export default SinglePostUser;
