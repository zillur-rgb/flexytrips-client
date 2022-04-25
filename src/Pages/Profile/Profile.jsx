import React, { useState } from "react";
import "./Profile.css";
import Navbar from "../../Components/Navbar/Navbar";
import { auth } from "../../firebase.init";
import { updateProfile } from "firebase/auth";

const Profile = () => {
  const [name, setName] = useState(auth.currentUser.displayName);
  const [email, setEmail] = useState(auth.currentUser.email);
  const [changeData, setChangeData] = useState(false);

  const handleChangeData = async () => {
    try {
      if (name !== auth.currentUser.displayName) {
        await updateProfile(auth.currentUser, {
          displayName: name,
        });
      }
      setChangeData(!changeData);
    } catch (error) {
      console.log();
    }
  };
  return (
    <div className="profileContainer">
      <Navbar />
      <main>
        <h1 className="header">MY Profile Information</h1>
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "rgba(0,255, 0, .2)",
            color: "rgba(0,0, 0, 1)",
            cursor: "pointer",
            borderRadius: "50px",
            margin: "15px 0",
            fontFamily: "Inter, sans-serif",
            fontSize: "16px",
          }}
          onClick={handleChangeData}
        >
          {changeData ? "done" : "Edit Data"}
        </button>

        <div className="description">
          <div className="name">
            <p className="title">Name:</p>
            <input
              type="text"
              value={name}
              className={changeData ? "done" : "change"}
              disabled={!changeData}
              onChange={({ target }) => {
                setName(target.value);
              }}
            />
          </div>
          <div className="email">
            <p className="title">Email:</p>
            <input type="email" className="change" value={email} disabled />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
