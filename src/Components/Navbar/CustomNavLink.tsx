import { NavLink } from "react-router-dom";
import style from "./Navbar.module.css";

const CustomNavlink = (props: { to: string; label: string }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        (isActive ? style.linkactive : "") + " " + style.link
      }
      to={props.to}
    >
      {props.label}
    </NavLink>
  );
};

export default CustomNavlink;
