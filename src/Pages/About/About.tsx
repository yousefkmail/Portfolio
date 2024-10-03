import style from "./About.module.css";
import { useQuery } from "react-query";
import {
  AboutPageSkeleton,
  contnentfulClient,
} from "../../Contentful/ContentfulClient";
const About = () => {
  const { data } = useQuery({
    queryKey: ["about"],
    queryFn: async () => {
      const { items } =
        await contnentfulClient.withoutUnresolvableLinks.getEntries<AboutPageSkeleton>(
          {
            content_type: "about",
          }
        );
      return items;
    },
  });

  return (
    <div style={{ display: "grid", placeItems: "center", marginTop: "50px" }}>
      <main className={style.main}>
        {data?.map((item, index) => (
          <div key={index}>
            <h1 className={"themecolor " + style.title}>{item.fields.title}</h1>
            {item.fields.texts.map((item, index) => (
              <p className={style["p"] + " " + style["show"]} key={index}>
                {item?.fields.text}
              </p>
            ))}
          </div>
        ))}
      </main>
    </div>
  );
};

export default About;
