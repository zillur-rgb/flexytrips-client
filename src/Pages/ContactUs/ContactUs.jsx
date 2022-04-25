import Navbar from "../../Components/Navbar/Navbar";
import "./ContactUs.css";
import contactImage from "../../assets/contactImage.jpg";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        margin: "0 15%",
      }}
    >
      <Navbar label={"Sign In"} />
      <div className="contact-container">
        <h1 className="header">GET IN TOUCH</h1>
        <p className="texts">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. temporibus,
          explicabo Idteneturtemporibus, explicabo obcaecati aspernatur.
        </p>
        <div className="contents">
          <div className="contact-container">
            <div className="contents">
              <img src={contactImage} alt="contact" />
              <form onSubmit={() => navigate("/success")}>
                <h1 className="header">Make Your Custom Travel Plan</h1>
                <div className="form-group">
                  <label htmlFor="fullname">Fullname</label> <br />
                  <input
                    type="text"
                    name="fullname"
                    id="fullname"
                    placeholder="Write your fullname here"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <br />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Write Your Email Here"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <br />
                  <textarea name="message" id="message" rows="15"></textarea>
                </div>

                <button className="feedbackSubmit" type="submit">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
