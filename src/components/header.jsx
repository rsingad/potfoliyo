import { useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";

function Header() {
  const [activbtn, setActivbtn] = useState("home");
  console.log(activbtn);

  const handelclick = (e) => {
    console.log(e.target);
    setActivbtn(() => e.target.id);
  };
  return (
    <header>
      <div className="logo">
        <b>potfoliyo</b>
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <NavLink
              to={"/"}
              id="home"
              className={activbtn == "home" ? "clickstyle" : ""}
              onClick={handelclick}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/about"}
              id="about"
              className={activbtn === "about" ? "clickstyle" : ""}
              onClick={handelclick}
            >
              about
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/skills"}
              id="skill"
              className={activbtn === "skill" ? "clickstyle" : ""}
              onClick={handelclick}
            >
              skill
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/Project"}
              id="project"
              className={activbtn === "project" ? "clickstyle" : ""}
              onClick={handelclick}
            >
              Project
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/contect"}
              id="contect"
              className={activbtn === "contect" ? "clickstyle" : ""}
              onClick={handelclick}
            >
              contect
            </NavLink>
          </li>
        </ul>
      </nav>
      {/* <div className="chat">
        <NavLink
          to={"/chat"}
          id="chat"
          style={{padding:"5px"}}
          
          className={activbtn === "chat" ? "clickstyle" : ""}
          onClick={handelclick}
        >
          <i class="fa-solid fa-message" style={{ color: "var(--blue)" }}></i>
        </NavLink>
      </div> */}
    </header>
  );
}
export default Header;
