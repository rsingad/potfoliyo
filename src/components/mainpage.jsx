import About from "./about";
import Contect from "./contect";
import Footer from "./footer";
import Home from "./home";
import Project from "./project/project";
import Skill from "./skill/Skill";
function MainPage() {
  return (
    <>
      <Home />
      <About />
      <Skill/>
      <Project/>
      <Contect />
      <Footer/>
    </>
  );
}
export default MainPage;
