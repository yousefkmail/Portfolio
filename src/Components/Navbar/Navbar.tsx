import { HTMLAttributes } from "react";
import CustomNavlink from "./CustomNavLink";
import style from "./Navbar.module.css";
import { cva, cx } from "class-variance-authority";
const NavbarStyles = cva(style.navbar);

const Navbar = ({ className, ...rest }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <nav className={cx(NavbarStyles(), className)} {...rest}>
      <div className={style.links}>
        <CustomNavlink to={"home"}>Home</CustomNavlink>
        <CustomNavlink to={"about"}>About</CustomNavlink>
        <CustomNavlink to={"contact"}>Contact</CustomNavlink>
      </div>
    </nav>
  );
};
export default Navbar;
