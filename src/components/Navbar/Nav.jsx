import React from "react";
import SearchBar from "./SearchBar/SearchBar.jsx";
import style from "./Nav.module.css";
import { Link } from "react-router-dom";

export default function Nav(props) {
  // props --> {onSearch: function}
  return (
    <div className={style.container}>
      <Link to="/">WELCOME</Link>
      <Link to="/about">ABOUT</Link>
      <Link to="/home">HOME</Link>
      <SearchBar onSearch={props.onSearch} />
    </div>
  );
}

{
  /* <NavLink className={(isActive) => (isActive ? "active" : null)} to="/">
WELCOME
</NavLink> */
}
