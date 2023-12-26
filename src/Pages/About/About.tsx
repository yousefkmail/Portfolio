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
    <>
      <main className={style.main}>
        <h1 className={"themecolor " + style.title}>About Me</h1>
        <p ref={ref1} className={style.p}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          reiciendis fugiat, laudantium magni molestias perspiciatis nemo?
          Voluptate qui temporibus libero odio reiciendis corporis veniam modi,
          quae id voluptatem nisi eveniet!
        </p>
        <p ref={ref2} className={style.p}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          reiciendis fugiat, laudantium magni molestias perspiciatis nemo?
          Voluptate qui temporibus libero odio reiciendis corporis veniam modi,
          quae id voluptatem nisi eveniet!
        </p>
        <p ref={ref3} className={style.p}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          reiciendis fugiat, laudantium magni molestias perspiciatis nemo?
          Voluptate qui temporibus libero odio reiciendis corporis veniam modi,
          quae id voluptatem nisi eveniet!
        </p>
      </main>
    </>
  );
};

export default About;
