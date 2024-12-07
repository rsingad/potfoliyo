import { NavLink } from "react-router-dom";
function SocialMediaIcon(){
    return(
        <div className="icons">
          <NavLink to={"https://www.linkedin.com/in/ramesh-singad-30b013251/"}>
            <div className="linkedin">
              <i
                class="fa-brands fa-linkedin-in"
                style={{ color: "#74C0FC" }}
              ></i>
            </div>
          </NavLink>
          <NavLink to={"https://github.com/rsingad"}>
            <div className="github">
              <i class="fa-brands fa-github" style={{ color: "#63E6BE" }}></i>
            </div>
          </NavLink>
          <NavLink to={"https://www.instagram.com/_teja_tiger?igsh=OGQ5ZDc2ODk2ZA=="}>
            <div className="insta">
              <i
                class="fa-brands fa-instagram"
                style={{ color: "#63E6BE" }}
              ></i>
            </div>
          </NavLink>
          <NavLink to={"https://www.facebook.com/share/18MYA8qHqf/"}>
            <div className="facebook">
              <i
                class="fa-brands fa-facebook-f"
                style={{ color: "#63E6BE" }}
              ></i>
            </div>
          </NavLink>
        </div>
    );
}
export default SocialMediaIcon;