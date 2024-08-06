import About from "./about";
import Contect from "./contect";
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
    </>
  );
}
export default MainPage;
