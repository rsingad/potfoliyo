import "./contect.css";
import { NavLink } from "react-router-dom";
function About() {
  return (
    <>
      <h1>about me</h1>
      <section className="about fam2">
        <div className="aboutImg">
          <div>
            <img src="about.jpg" alt="about image" />
          </div>
        </div>
        <div className="aboutContent">
          <h2 className="yuji-mai-regular clr">full stack developer</h2>
          <p>
            Dynamic and highly motivated Full Stack Developer with extensive
            experience in developing and maintaining web applications using the
            MERN stack (MongoDB, Express.js, React, and Node.js). Possessing
            strong proficiency in front-end technologies such as HTML5, CSS3,
            and JavaScript, along with a deep understanding of back-end
            development and database management. Adept at creating efficient,
            scalable, and user-friendly solutions, with a keen eye for detail
            and a commitment to delivering high-quality work. Proven ability to
            manage complex projects from conception through to successful
            deployment. Excellent problem-solving skills, with a collaborative
            mindset and a passion for continuous learning and professional
            growth.
          </p>
          <div className="resum_downlod_btn">
            <a href={"ramesh_singar.pdf"} download={"ramesh.pdf"}>
              download Resume
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
