import { useEffect, useRef } from "react";
import style from "./About.module.css";
const About = () => {
  const ref1 = useRef<HTMLParagraphElement>(null);
  const ref2 = useRef<HTMLParagraphElement>(null);
  const ref3 = useRef<HTMLParagraphElement>(null);
  const ref4 = useRef<HTMLParagraphElement>(null);
  const ref5 = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    setTimeout(() => {
      ref1.current?.classList.add(style["show"]);
    }, 200);
    setTimeout(() => {
      ref2.current?.classList.add(style["show"]);
    }, 1000);
    setTimeout(() => {
      ref3.current?.classList.add(style["show"]);
    }, 2000);
    setTimeout(() => {
      ref4.current?.classList.add(style["show"]);
    }, 3000);
    setTimeout(() => {
      ref5.current?.classList.add(style["show"]);
    }, 4000);
  }, []);

  return (
    <div style={{ display: "grid", placeItems: "center", marginTop: "50px" }}>
      <main className={style.main}>
        <h1 className={"themecolor " + style.title}>About Me</h1>
        <p ref={ref1} className={style.p}>
          Hello there! I'm Yousef, a web and game developer that loves to create
          unique, captivating experiences out of simple lines of code. A little
          about the individual behind the screen
        </p>
        <p ref={ref2} className={style.p}>
          My journey into programming started at the first your of university, 6
          years ago, and since then I fell in love being part of poeple who
          would change the world!.
        </p>
        <p ref={ref3} className={style.p}>
          I have been learning game and web development since 2020 and I have
          been learning different aspects of software engineering.
          {/* <InlineLink to="/experience">Listed here.</InlineLink> */}
        </p>
        <p ref={ref4} className={style.p}>
          For web development, after learning the main components, HTML, Css,
          and JavaScript, I have jumped into learning React.js, diving into its
          main aspects, components, hooks, conditional rendering, props, and
          more, Applying them into real life cenarioes, using some of its famous
          packages, react router, axios, React Hook Form, Styled Components, and
          Css modules.
        </p>
        <p ref={ref5} className={style.p}>
          Afterward, learning the backend side of web development was my goal,
          my way of achieving that was by being a mern stack developer, adding
          Node.js, Mongodb, express.js to my knowledge. Additionally, learning
          firebase and adding it into my web development knowledge stack.
        </p>
      </main>
    </div>
  );
};

export default About;
