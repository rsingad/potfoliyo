import { NavLink } from "react-router-dom";
import SocialMediaIcon from "./socialmediaicon";
import { useEffect, useState } from "react";

function Home() {
  const [text, setText] = useState("");
  const [inputedVoice, setInputVoice] = useState("hello");

  // Speech synthesis function
  const speak = (text) => {
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 1;
    text_speak.lang = "hi-IN"; // Adjust to the language of your choice
    window.speechSynthesis.speak(text_speak);
  };

  function wishMe() {
    const date = new Date();
    const hours = date.getHours();

    if (hours >= 4 && hours <= 12) {
      setText("Good morning boss");
    } else if (hours > 12 && hours < 16) {
      setText("Good afternoon sir");
    } else if (hours >= 16 && hours <= 22) {
      setText("Good evening sir");
    } else {
      setText("Hello boss");
    }
  }

  useEffect(() => {
    wishMe();
  }, [inputedVoice]);

  // useEffect(() => {
  //   if (text) {
  //     speak(text);
  //   }
  // }, [text]);

  return (
    <section className="home yuji-mai-regular">
      <div className="leftaside">
        <div className="leftcontent">
          <h2>
            Hello ,it's me <br />
            <span
              style={{
                fontSize: "2.5rem",
                // fontWeight: "bold",
                // ariaHidden: "true",
                // background:
                //   "linear-gradient(to bottom, #cfc09f 27%, #ffecb3 40%, #aa2c0f 78%)",
                // WebkitBackgroundClip: "text",
                // WebkitTextFillColor: "transparent",
              }}
            >
              Ramesh singad
            </span>
            <br />
            and i' a <span style={{ color: "gold" }}>
              Engineer & developer
            </span>{" "}
          </h2>
          {/* <p>{inputedVoice}</p> */}
        </div>
        <div>
          <p className="pra">
            I specialize in React, HTML5, CSS3, and JavaScript, and I believe in
            creating exceptional user experiences
          </p>
        </div>
        <SocialMediaIcon />
        <div className="moreButton">
          <button>more about me</button>
        </div>
      </div>
      <div className="rightaside">
        <div className="lightCircal">
          <div className="imgbox">
            {/* <img src="./public/my.jpg" alt="image" onClick={lisnerstrt} /> */}
            <img src="/avtar2.png" alt="image" style={{ cursor: "pointer", }} />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Home;
