import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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

  if (gState.token) {
    return (
      <div>
        {posts.map((post) => (
          <Link to={`/posts/${post.id}/edit`} key={post.id}>
            <Post post={post} />
          </Link>
        ))}
        <Link to="/posts/new">
          <button>Create New Post</button>
        </Link>
      </div>
    );
  }
  return (
    <div>
      {posts.map((post) => (
        <Link to={`/posts/${post.id}`} key={post.id}>
          <Post post={post} />
        </Link>
      ))}
    </div>
  );
};
export default AllPosts;
