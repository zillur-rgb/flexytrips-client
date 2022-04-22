import Navbar from "../../Components/Navbar/Navbar";
import "./ContactUs.css";
import { GoLocation } from "react-icons/go";
import { BsTelephone, BsEnvelope } from "react-icons/bs";
import { MapContainer, TileLayer, Popup, Marker, useMap } from "react-leaflet";

const ContactUs = () => {
  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <Navbar label={"Sign In"} />
      <div className="contact-container">
        <h1 className="header">GET IN TOUCH</h1>
        <div className="left">
          <div className="address">
            <GoLocation />
            <p>3475 Rosebud Avenue</p>
            <p>Daisy, AR, 71950</p>
          </div>
          <div className="telephone">
            <BsTelephone /> <p>+1-785-412-5588</p>
          </div>

          <div className="email">
            <BsEnvelope /> <p>info@flextrips.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
