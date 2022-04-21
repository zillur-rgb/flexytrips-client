import contactImage from "../../assets/contactImage.jpg";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="contact-container">
      <div className="contents">
        <img src={contactImage} alt="contact" />
        <form>
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
  );
};

export default ContactForm;
