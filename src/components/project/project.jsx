import { NavLink } from "react-router-dom";
import "../contect.css";
function Project() {
  const projects = [
    {
      title: "tourscape",
      url: "https://singgad-site.netlify.app",
      github: "https://github.com/rsingad/singad.git",
      img: "tourscape.png",
      technology: [
        "react",
        "bootstrap",
        "mok-api",
        "js",
        "hooks",
        "log-authentication",
        "custumber-support(real time chat)",
        "contxt-api",
      ],
    },
    {
      title: "weading web",
      url: "https://ramesh2ndproject.netlify.app",
      img: "image.png",
      github: "https://github.com/rsingad/desktop-base-web.git",
      technology: ["html", "css", "media quary"],
    },
    {
      title: "desktop base website[NAMARI]",
      url: "https://rameshproject4.netlify.app",
      github: "https://github.com/rsingad/desktop-base-web.git",
      img: "namari.png",
      technology: ["html", "css"],
    },
   
  ];
  return (
    <>
      <h1>latest project</h1>

      <div className="project">
        {projects.map((project, index) => (
          <div key={index} className="project_card">
            {/* <div className="project-title">{project.title}</div> */}
            <img src={project.img} alt="" />
            <h1>{project.title}</h1>
            <p>Some text about the jeans..</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {project.technology.map((item, ind) => {
                return (
                  <div
                    style={{
                      backgroundColor: " rgb(222, 222, 222)",
                      padding: "5px",
                      borderRadius: "10px",
                    }}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
            <p>
              <NavLink to={project.url} target="_blank">
                <button>demo</button>
              </NavLink>{" "}
              <NavLink to={project.github} target="_blank">
                <button>GitHub</button>
              </NavLink>
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Project;
