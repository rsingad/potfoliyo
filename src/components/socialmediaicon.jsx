import { NavLink } from "react-router-dom";
function SocialMediaIcon(){
    return(
        <div className="icons">
          <NavLink to={""}>
            <div className="linkedin">
              <i
                class="fa-brands fa-linkedin-in"
                style={{ color: "#74C0FC" }}
              ></i>
            </div>
          </NavLink>
          <NavLink to={""}>
            <div className="github">
              <i class="fa-brands fa-github" style={{ color: "#63E6BE" }}></i>
            </div>
          </NavLink>
          <NavLink to={""}>
            <div className="insta">
              <i
                class="fa-brands fa-instagram"
                style={{ color: "#63E6BE" }}
              ></i>
            </div>
          </NavLink>
          <NavLink to={""}>
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