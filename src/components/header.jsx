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
    <header className="fam2">
      <div className="logo">
        <b>potfoliyo</b>
      </div>
      <nav className="">
        <ul className="nav-links">
          <li>
            <NavLink
              to={"/"}
              id="home"
              className={activbtn == "home" ? "clickstyle yuji-mai-regular" : ""}
              onClick={handelclick}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/about"}
              id="about"
              className={activbtn === "about" ? "clickstyle yuji-mai-regular" : ""}
              onClick={handelclick}
            >
              about
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/skills"}
              id="skill"
              className={activbtn === "skill" ? "clickstyle yuji-mai-regular" : ""}
              onClick={handelclick}
            >
              skill
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/Project"}
              id="project"
              className={activbtn === "project" ? "clickstyle yuji-mai-regular" : ""}
              onClick={handelclick}
            >
              Project
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/contect"}
              id="contect"
              className={activbtn === "contect" ? "clickstyle yuji-mai-regular" : ""}
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
