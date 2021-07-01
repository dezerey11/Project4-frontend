import React from "react";
import { Link, useHistory } from "react-router-dom";
import { GlobalCtx } from "../App";

const Navbar = () => {
  const { gState } = React.useContext(GlobalCtx);

  const history = useHistory();
  console.log(gState);
  const logout = () => {
    window.localStorage.removeItem("token");
    history.push("/project4-frontend");
    // history.go(0);
  };

  if (gState.token) {
    return (
      <div className="navbar">
        <h1>Batman Collector's Marketplace</h1>
        <Link to="/project4-frontend" style={{ textDecoration: "none" }}>
          <h2 className="nav-link">Home</h2>
        </Link>
        <Link to="/posts/new" style={{ textDecoration: "none" }}>
          <h2 className="nav-link">Create Post </h2>
        </Link>
        <Link to="/" onClick={logout} style={{ textDecoration: "none" }}>
          <h2 className="nav-link">Logout</h2>
        </Link>
      </div>
    );
  }
  return (
    <div className="navbar">
      <h1>Batman Collector's Marketplace</h1>
      <Link to="/project4-frontend" style={{ textDecoration: "none" }}>
        <h2 className="nav-link">Home</h2>
      </Link>
      <Link to="/login" style={{ textDecoration: "none" }}>
        <h2 className="nav-link">Login</h2>
      </Link>
    </div>
  );
};

export default Navbar;
