import SearchBar from "../searchbar/SearchBar";
import {NavLink} from "react-router-dom";
import "./navBar.css";

export default function NavBar({onSearch, random}) {
  return (
    <div className="nav-container">
      <div>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "link-active" : "link")} >About </NavLink>
        <NavLink to="/home" className={({ isActive }) => (isActive ? "link-active" : "link")}>Home</NavLink>
      </div>

      <SearchBar onSearch={onSearch} />

      <button className="random" onClick={random}>
        ADD RANDOM
      </button>
    </div>
  );
}
