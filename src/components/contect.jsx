import { useState } from "react";
import axios from "axios";

import SocialMediaIcon from "./socialmediaicon";

function Contect() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
       "https://desirable-mindfulness-production.up.railway.app/api/contact", 
        formData
      );

      if (response.status === 200) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <section className="contect">
      <div className="contectasideleft">
        <h1 className="clr yuji-mai-regular">Contect Me</h1>
        <h2 className="yuji-mai-regular">let's work together</h2>
        <p className="fam2">I am open to collaboration...</p>
        <p className="fam2">I am passionate about delivering...</p>
        <div className="pmedia fam2">
          <div onClick={() => (window.location.href = "mailto:r.singerjat@gmail.com")} style={{ cursor: "pointer" }}>
            <i className="fa-solid fa-envelope"></i> r.singerjat@gmail.com
          </div>
          <div><i className="fa-solid fa-phone"></i>7877XXXXXX</div>
          <div onClick={() => (window.location.href = "https://wa.me/919462066846")} style={{ cursor: "pointer" }}>
            <i className="fa-brands fa-whatsapp"></i>9462066846
          </div>
        </div>
        <div className="contctIconBox">
          <SocialMediaIcon />
        </div>
      </div>

      <form className="contectform" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="your name" value={formData.name} onChange={handleChange} required />
        <br />
        <input type="email" name="email" placeholder="your email" value={formData.email} onChange={handleChange} required />
        <br />
        <input type="text" name="subject" placeholder="enter your subject" value={formData.subject} onChange={handleChange} />
        <br />
        <textarea name="message" placeholder="enter your message" rows="10" value={formData.message} onChange={handleChange} />
        <br />
        <input type="submit" value="Submit" />
      </form>
      
    </section>
  );
}

export default Contect;
