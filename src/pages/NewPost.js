import React, { useEffect, useState } from "react";
import { GlobalCtx } from "../App";
import { useHistory } from "react-router-dom";

const NewPost = () => {
  const { gState } = React.useContext(GlobalCtx);
  const history = useHistory();

  const [post] = useState(null);
  const [setPosts] = useState([]);

  const [formData, setFormData] = useState({
    image: "",
    title: "",
    contact: "",
    price: 0,
    description: "",
  });

  const getPosts = () => {
    // fetch makes a get request by default
    fetch(gState.url + "posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  };

  // anytime post changes and it exists, when you fetch the post set the form data
  useEffect(() => {
    if (post) {
      setFormData(post);
    }
  }, [post]);

  const createPost = async (newPost) => {
    await fetch(gState.url + "posts", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + gState.token,
      },
      body: JSON.stringify(formData),
    });
    getPosts();
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createPost(formData);
    history.push("/");
    history.go(0);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Title</h1>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        <h1>Image</h1>
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
        />
        <h1>Price</h1>
        $
        <input
          type="text"
          name="price"
          value={formData.price}
          onChange={handleChange}
        />
        .00
        <h1>Contact</h1>
        <input
          type="text"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
        />
        <h1>Description</h1>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        <br />
        <br />
        <input type="submit" value="Create" />
      </form>
    </div>
  );
};
export default NewPost;
