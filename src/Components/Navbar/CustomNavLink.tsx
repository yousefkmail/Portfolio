import { NavLink, NavLinkProps } from "react-router-dom";
import style from "./Navbar.module.css";
import { cva } from "class-variance-authority";
const CustomNavLinkStyle = cva(style.link, {
  variants: {
    isActive: {
      true: style.linkactive,
    },
  },
});

interface CustomNavlinkProps extends NavLinkProps {
  activeClassName?: string;
}

const CustomNavlink = ({
  className,
  activeClassName,
  ...rest
}: CustomNavlinkProps) => {
  return (
    <NavLink
      {...rest}
      className={({ isActive }) => CustomNavLinkStyle({ isActive, className })}
    />
  );
};

export default CustomNavlink;
