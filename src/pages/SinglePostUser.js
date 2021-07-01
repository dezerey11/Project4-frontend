import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { GlobalCtx } from "../App";

const SinglePostUser = (props) => {
  const { gState } = React.useContext(GlobalCtx);
  const history = useHistory();

  const [formData, setFormData] = useState({
    image: "",
    title: "",
    contact: "",
    price: 0,
    description: "",
  });

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

  // anytime post changes and it exists, when you fetch the post set the form data
  useEffect(() => {
    if (post) {
      setFormData(post);
    }
  }, [post]);

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

  const updatePost = async () => {
    await fetch(gState.url + "posts/" + props.match.params.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + gState.token,
      },
      body: JSON.stringify(formData),
    });
    history.push("/posts/" + props.match.params.id);
  };

  const deletePost = async () => {
    await fetch(gState.url + "posts/" + props.match.params.id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + gState.token,
      },
    });
    // get updated post
    getPost();
    history.push("/");
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <form>
        <br />
        <img src={formData.image} width="100px" />
        <h1>Image</h1>
        <input
          type="text"
          name="image"
          placeholder={post.image}
          value={formData.image}
          onChange={handleChange}
        />
        <h1>Title</h1>
        <input
          type="text"
          name="title"
          placeholder={post.title}
          value={formData.title}
          onChange={handleChange}
        />
        <h1>Price</h1>
        $
        <input
          type="text"
          name="price"
          placeholder={post.price}
          value={formData.price}
          onChange={handleChange}
        />
        .00
        <h1>Contact</h1>
        <input
          type="text"
          name="contact"
          placeholder={post.contact}
          value={formData.contact}
          onChange={handleChange}
        />
        <h1>Description</h1>
        <input
          type="text"
          name="description"
          placeholder={post.description}
          value={formData.description}
          onChange={handleChange}
        />
        <br />
        <br />
        <button type="button" onClick={updatePost}>
          Update
        </button>
        <br />
        <br />
        <button type="button" onClick={deletePost}>
          Delete
        </button>
        <br />
        <br />
        <Link to="/">
          <button>Go Back</button>
        </Link>
      </form>
    </div>
  );
};
export default SinglePostUser;
