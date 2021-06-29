import React, { useEffect } from "react";
import { useState } from "react";
import Login from "./Login";
import Post from "../components/post";
import { Link, Route, Switch, Redirect, useHistory } from "react-router-dom";
import { GlobalCtx } from "../App";

const URL = "https://project4-classifiedads-backend.herokuapp.com/posts/";

const AllPosts = (props) => {
  const history = useHistory();
  const { gState, setGState } = React.useContext(GlobalCtx);

  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const response = await fetch(URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + gState.token,
      },
    })
      .then((response) => response.json())
      .then((data) => setPosts(data));
  };

  // if the state of token changes and the token is not ready and there is no token then redirect to login
  useEffect(() => {
    if (gState.ready && !gState.token) {
      history.push("/login");
    }
  }, [gState.ready, gState.token]);

  // if the state of token changes and there is a token then run getPosts
  useEffect(() => {
    if (gState.token) {
      getPosts();
    }
  }, [gState.token]);

  // if the state of token is not ready render nothing
  if (!gState.ready) {
    return null;
  }

  // return props.posts.map((post) => <Post post={post} key={post.id} />);
  return <h1>This is the All Posts Component</h1>;
};
export default AllPosts;
