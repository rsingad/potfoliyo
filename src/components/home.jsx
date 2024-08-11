import { NavLink } from "react-router-dom";
import SocialMediaIcon from "./socialmediaicon";

function Home() {
  return (
    <section className="home">
      <div className="leftaside">
        <div className="leftcontent">
          <h2>Hellow ,it's me</h2>
          <h1>Ramesh singad</h1>
          <h2>and i' a frontend developer</h2>
        </div>
        <div>
          <p className="pra">more text own write...</p>
        </div>
        <SocialMediaIcon/>
        <div className="moreButton">
          <button>more about me</button>
        </div>
      </div>
      <div className="rightaside">
      <div className="lightCircal">
        <div className="imgbox">
          <img src="./public/my.jpg" alt="image" />
        </div>

      </div>
      </div>
    </section>
  );
}
export default Home;
