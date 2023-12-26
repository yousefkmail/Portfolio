import CustomNavlink from "./CustomNavLink";
import style from "./Navbar.module.css";
const Navbar = () => {
  return (
    <nav className={style.navbar}>
      {/* <img src="" alt="" /> */}
      <div className={style.links}>
        <CustomNavlink to={"home"} label="Home" />
        <CustomNavlink to={"workexperience"} label="Work Experience" />
        <CustomNavlink to={"About"} label="About" />
        <CustomNavlink to={"Contact"} label="Contact" />
      </div>
    </nav>
  );
};

export default Navbar;
