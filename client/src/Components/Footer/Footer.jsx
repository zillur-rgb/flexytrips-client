import {
  HiOutlineLocationMarker,
  HiOutlinePhone,
  HiOutlineMail,
} from "react-icons/hi";
import "./Footer.css";
import { FaFacebook, FaTiktok } from "react-icons/fa";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="top-portion">
        <div className="about">
          <p className="header">About Us</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
            qui esse molestiae at cum rem iusto eligendi possimus voluptatum
            fuga eaque, quae totam, quaerat alias, assumenda architecto
            perspiciatis dolores dignissimos.
          </p>
        </div>

        <div className="navigation">
          <p className="header">Navigation</p>
          <p>Home</p>
          <p>About</p>
          <p>Destination</p>
          <p>Blogs</p>
          <p>Contact</p>
        </div>
        <div className="navigation">
          <p className="header">Navigation</p>
          <p>Germany</p>
          <p>Bangladesh</p>
          <p>United States</p>
          <p>Netherland</p>
          <p>France</p>
          <p>Luxembourgh</p>
        </div>

        <div className="contact">
          <p className="header">Get in Touch With Us</p>
          <p
            className="fo-location"
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <HiOutlineLocationMarker className="icon" />
            <p>
              Luckenwalder Strasse 54, <br />
              Neuschoo, 26487
            </p>
          </p>

          <p>
            <HiOutlinePhone className="icon" /> +49 11111 22222
          </p>

          <p>
            <HiOutlineMail className="icon" /> info@flexytrips.com
          </p>
          <div className="social">
            <FaFacebook className="socialIcon" />
            <AiFillTwitterCircle className="socialIcon" />
            <AiFillInstagram className="socialIcon" />
            <FaTiktok className="socialIcon" />
          </div>
        </div>
      </div>

      <div className="bottom-portion"></div>
    </div>
  );
};

export default Footer;
