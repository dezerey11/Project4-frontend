import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AllPosts from "./pages/AllPosts";
import AllPostsUser from "./pages/AllPostsUser";
import SinglePost from "./pages/SinglePost";
import SinglePostUser from "./pages/SinglePostUser";
import Form from "./pages/Form";

import "./App.css";

export const GlobalCtx = React.createContext(null);

function App() {
  const [gState, setGState] = React.useState({
    url: "https://project4-classifiedads-backend.herokuapp.com/",
    // url: "http://localhost:3000/",
    token: null,
    ready: false,
  });

  //Check if user is logged in
  React.useEffect(() => {
    const token = JSON.parse(window.localStorage.getItem("token"));
    if (token) {
      setGState({ ...gState, token: token.token, ready: true });
    } else {
      setGState({ ...gState, token: null, ready: true });
    }
  }, []);

  return (
    <div className="App">
      <GlobalCtx.Provider value={{ gState, setGState }}>
        <Switch>
          <Route exact path="/" render={(rp) => <AllPosts {...rp} />} />
          <Route path="/login" render={(rp) => <Login {...rp} />} />
          <Route path="/signup" render={(rp) => <Signup {...rp} />} />
        </Switch>
      </GlobalCtx.Provider>
    </div>
  );
}

export default App;
