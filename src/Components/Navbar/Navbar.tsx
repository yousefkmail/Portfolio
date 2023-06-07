import style from "./Navbar.module.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <Link className={style.link} to={"home"}>
        Home
      </Link>
      <Link className={style.link} to={"home"}>
        Home
      </Link>
      <Link className={style.link} to={"About"}>
        About
      </Link>
    </nav>
  );
};

export default Navbar;
