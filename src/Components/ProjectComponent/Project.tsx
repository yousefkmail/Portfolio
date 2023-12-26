interface ProjectProps {
  title: string;
  githubUlR: string;
}

const Project = ({ title, githubUlR }: ProjectProps) => {
  return (
    <div style={{ height: "100vh" }}>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "30px" }}
      >
        <iframe
          width={800}
          height={600}
          style={{ border: "none" }}
          src="https://www.youtube.com/embed/J39ThUsYzQo?si=0xZ4OkhBZIa_3vjq"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full"
          allowFullScreen
        ></iframe>
        <div>
          <h2>{title}</h2>
          <a href={githubUlR}>GitHub</a>
        </div>
      </div>
    </div>
  );
};

export default Project;
