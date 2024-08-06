import "../contect.css";
function Skill() {
  const tech_skill = [
    {
      title: "html",
      par: 85,
      logo_class: "fa-brands fa-html5",
      color: "red",
    },
    {
      title: "css",
      par: 60,
      logo_class: "fa-brands fa-css3-alt",
      color: "blue",
    },
    {
      title: "javascript",
      par: 80,
      logo_class: "fa-brands fa-js",
      color: "yellow",
    },
    {
      title: "React",
      par: 70,
      logo_class: "fa-brands fa-react",
      color: "aqua",
    },
  ];
  const pro_skill = [
    {
      title: "Creativity",
      par: 85,
    },
    {
      title: "Communiction",
      par: 60,
    },
    {
      title: "Problem Solving",
      par: 80,
      
    },
    {
      title: "TeamWork",
      par: 80,
      
    },
  ];

  return (
    <section className="skill">
      <div className="Technical_skills">
        <div className="tech_header">
          <h1>technical skills</h1>
          <div className="underline"></div>
        </div>
        {tech_skill.map((item, index) => {
          const x = item.par - 5;
          return (
            <div className="my_skill">
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
        <div className="tech_header">
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
                  <span
                    className=""
                    style={{
                      backgroundColor: "black",
                      borderRadius: "50%",
                      padding: "2px",
                    }}
                  >
                    {item.par}%
                  </span>
                </div>
                <div className="">{item.title}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default Skill;
