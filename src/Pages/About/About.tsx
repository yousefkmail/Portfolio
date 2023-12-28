import { useEffect, useRef } from "react";
import style from "./About.module.css";
const About = () => {
  const ref1 = useRef<HTMLParagraphElement>(null);
  const ref2 = useRef<HTMLParagraphElement>(null);
  const ref3 = useRef<HTMLParagraphElement>(null);

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
  }, []);

  return (
    <div style={{ display: "grid", placeItems: "center", marginTop: "50px" }}>
      <main className={style.main}>
        <h1 className={"themecolor " + style.title}>About Me</h1>
        <p ref={ref1} className={style.p}>
          Hello there! I'm Yousef, a web and game developer that loves to create
          unique, captivating experiences out of simple lines of code. A little
          about the individual behind the screen:
        </p>
        <p ref={ref2} className={style.p}>
          My journey into programming started at the first your of university, 6
          years ago, and since then I fell in love being part of the poeple who
          would change the world!.
        </p>
        {/* <p ref={ref3} className={style.p}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          reiciendis fugiat, laudantium magni molestias perspiciatis nemo?
          Voluptate qui temporibus libero odio reiciendis corporis veniam modi,
          quae id voluptatem nisi eveniet!
        </p> */}
      </main>
    </div>
  );
};

export default About;
