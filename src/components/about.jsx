import "./contect.css";
import { NavLink } from "react-router-dom";
function About() {
  return (
    <section className="about">
      <div className="aboutImg">
        <div>
          <img src="about.jpg" alt="about image" />
        </div>
      </div>
      <div className="aboutContent">
        <h1>about me</h1>
        <h2>full stack developer</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
          distinctio et eveniet nesciunt quae architecto adipisci ipsam
          voluptatibus voluptas nisi fugit, facere accusamus iste commodi?
          Blanditiis rerum perspiciatis, quibusdam corrupti dolorum labore ex
          officiis aliquid tempora deserunt, libero dolorem quae recusandae
          maiores! Incidunt debitis blanditiis, porro inventore voluptatum
          obcaecati voluptatibus ducimus molestias voluptates ullam nisi
          consequatur earum dolore hic reiciendis unde, autem iure modi. Eos
          dolore ea ipsa autem impedit id soluta alias, deleniti omnis
          repudiandae possimus cum cumque iure voluptatibus dolores blanditiis
          nesciunt et iste harum laborum ipsam, aliquid quis! Optio aliquam
          laborum reprehenderit suscipit dicta vero, sint deleniti?
        </p>
        <a href={"ramesh_singar.pdf"} download={"ramesh.pdf"}>
          <button>download Resume</button>
        </a>
      </div>
    </section>
  );
}

export default About;
