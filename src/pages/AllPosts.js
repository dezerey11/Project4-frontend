import React, { useEffect } from "react";
import { useState } from "react";
import Post from "../components/post";
import { GlobalCtx } from "../App";

const AllPosts = () => {
  const { gState } = React.useContext(GlobalCtx);

  const [posts, setPosts] = useState([]);

  const getPosts = () => {
    // fetch makes a get request by default
    fetch(gState.url + "posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  };

  useEffect(() => {
    getPosts();
  }, []);

  console.log(posts);
  return posts.map((post) => <Post post={post} key={post.id} />);
  // return <h1>This is the All Posts Component</h1>;
};
export default AllPosts;
