import "./contect.css";
import SocialMediaIcon from "./socialmediaicon";
function Contect() {
  return (
    <section className="contect">
      <div className="contectasideleft">
        <h1>
            contect Me
        </h1>
        <h2>let's work together</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, sapiente. Praesentium mollitia voluptatibus deleniti modi reprehenderit ullam, beatae quisquam culpa magnam officia iusto quam minima vel impedit cumque temporibus ex?</p>
        <div className="pmedia">
            <div><i class="fa-solid fa-envelope"></i>r.singerjat@gmail.com</div>
            <div><i class="fa-solid fa-phone"></i>7877904941</div>
            <div><i class="fa-brands fa-whatsapp"></i>9462066846</div>
        </div>
        <div className="contctIconBox">
        <SocialMediaIcon/>

        </div>
      </div>
      <form className="contectform">
        <input type="text" placeholder="your name" required />
        <br/>
        <input type="email" placeholder="your email" required />
        <br/>
        <input type="text" placeholder="enter your subject" />
        <br/>
        <textarea placeholder="enter your massage" rows="10" />
        <input type="submit" placeholder="submit"/>
      </form>
    </section>
  );
}
export default Contect;
