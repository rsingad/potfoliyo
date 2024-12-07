import "../contect.css";
function Skill() {
  const tech_skill = [
    {
      title: "html & html5",
      par: 85,
      logo_class: "fa-brands fa-html5",
      color: "red",
    },
    {
      title: "css & css3",
      par: 75,
      logo_class: "fa-brands fa-css3-alt",
      color: "blue",
    },
    {
      title: "Bootstrap",
      par: 65,
      logo_class: "fa-brands fa-bootstrap",
      color: "lightblue",
    },
    {
      title: "javascript",
      par: 80,
      logo_class: "fa-brands fa-js",
      color: "yellow",
    },
    {
      title: "React js",
      par: 70,
      logo_class: "fa-brands fa-react",
      color: "aqua",
    },{
      title: "mongo DB",
      par: 40,
      logo_class: "fa-brands fa-envira",
      color: "lime",
    },
    {
      title: "express",
      par: 40,
      logo_class: "fa-brands fa-node",
      color: "lime",
    },
    {
      title: "C language",
      par: 50,
      logo_class: "fa-brands fa-c",
      color: "#0000cd",
    },
    {
      title: "C++ language",
      par: 25,
      logo_class: "fa-brands fa-c",
      color: "lightblue",
    },
    {
      title: "python",
      par: 20,
      logo_class: "fa-brands fa-python",
      color: "Goldenrod",
    },
    {
      title: "git & github",
      par: 80,
      logo_class: "fa-brands fa-github",
      color: "white",
    },
  ];
  const pro_skill = [
    {
    title: "Problem Solving",
      par: 90,
    },
    {
      title: "Creativity",
      par: 85,
    },
    {
      title: "TeamWork",
      par: 80,
    },
    {
      title: "Communiction",
      par: 30,
    },{
      title: "Communiction-hindi",
      par: 80,
    },
  ];

  return (
    <>
      <h1>skills</h1>
      <section className="skill yuji-mai-regular">
        <div className="Technical_skills">
          <div className="tech_header clr">
            <h1>technical skills</h1>
            <div className="underline"></div>
          </div>
          {tech_skill.map((item, index) => {
            const x = item.par - 5;
            return (
              <div className="my_skill fam2">
                <div className="logo_Prs">
                  <div className="logo_Sec">
                    <i
                      className={item.logo_class}
                      style={{ color: `${item.color}` }}
                    ></i>
                    <div>{item.title}</div>
                  </div>
                  <div className="parsent" style={{ left: `${x}%` }}>
                    {item.par}%
                  </div>
                </div>
                <div className="fillup_skill_box">
                  <div
                    className="i_Have_skill"
                    style={{ width: `${item.par}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="professional_skills">
          <div className="tech_header clr">
            <h1>Professional skills</h1>
            <div className="underline"></div>
          </div>
          <div className="main_p">
            {pro_skill.map((item, index) => {
              const percentage = item.par;
              const backgroundImage = `conic-gradient(aqua 0% ${percentage}%, black ${percentage}% 100%)`;

              return (
                <div className="prof_skill">
                  <div className="skill-circle" style={{ backgroundImage }}>
                    <span className="">{item.par}%</span>
                  </div>
                  <div className="">{item.title}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
export default Skill;
