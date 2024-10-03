import Project from "../../Components/ProjectComponent/Project";
import {
  contnentfulClient,
  ProjectSkeleton,
} from "../../Contentful/ContentfulClient";
import style from "./WorkExperience.module.css";
import { useQuery } from "react-query";

const WorkExperience = () => {
  const { data } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const { items } =
        await contnentfulClient.withoutUnresolvableLinks.getEntries<ProjectSkeleton>(
          {
            content_type: "project",
          }
        );
      return items;
    },
  });

  return (
    <div className={style.experiencecontainer}>
      <div className={style.projectscontainer}>
        {data?.map((item, index) => (
          <Project key={index}>
            <Project.ImagePreview
              url={item.fields.url}
              image={item.fields.thumbnail?.fields.file?.url}
            ></Project.ImagePreview>
            <Project.Title>{item.fields.name}</Project.Title>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {item.fields.projectLinkIcon?.map((item, index) => (
                <Project.ProjectUrl
                  key={index}
                  icon={item?.fields.icon?.fields.file?.url}
                  url={item?.fields.url ?? ""}
                ></Project.ProjectUrl>
              ))}
            </div>
          </Project>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
