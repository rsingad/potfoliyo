import { NavLink } from "react-router-dom";
import SocialMediaIcon from "./socialmediaicon";
import { useEffect, useState } from "react";

function Home() {
  
  const [text, setText] = useState("hellow");

  // Function to speak the text
  const speak = (text) => {
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1; // Speech rate (1 is normal speed)
    text_speak.pitch = -50; // Pitch of the voice
    text_speak.volume = 100; // Volume level
    window.speechSynthesis.speak(text_speak);
  };
  useEffect(()=>{
    setTimeout(()=>{
      speak("Hellow   i am  Ramesh singad and i' a frontend developer");
    },1000);
  },[])


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
        <SocialMediaIcon />
        <div className="moreButton">
          <button>more about me</button>
        </div>
                  
      </div>
      <div className="rightaside">
        <div className="lightCircal">
          <div className="imgbox" onClick={()=>speak("hellow boss....")}>
            <img src="./public/my.jpg" alt="image" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Home;
