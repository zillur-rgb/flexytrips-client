import { useState } from "react";
import "./SingleCity.css";

const SingleCity = ({ trending }) => {
  const [onHover, setOnHover] = useState(false);
  console.log(onHover);

  return (
    <div
      className="single-city"
      style={{
        backgroundImage: `url(${trending.imgs[0]})`,
        height: "450px",
        margin: "70px 12px",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "end",
        justifyContent: "center",
        borderRadius: "15px",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          width: "340px",
          padding: "20px 0",
          //   height: "10%",
          textAlign: "center",
          backgroundColor: "rgba(0, 0, 0, .5)",
          color: "#fff",
          fontFamily: "'Inter', sans-serif",
          fontWeight: "600",
          fontSize: "18px",
        }}
        onMouseEnter={() => setOnHover(!onHover)}
        onMouseLeave={() => setOnHover(!onHover)}
      >
        {onHover ? (
          <>
            <p>
              {trending.city}, {trending.country}
            </p>
            <button
              style={{
                padding: "10px 20px",
                fontFamily: "'Inter', sans-serif",
                cursor: "pointer",
                backgroundColor: "#18B2DC",
                fontSize: "14px",
                color: "#fff",
                margin: "10px 0",
              }}
            >
              Details
            </button>
          </>
        ) : (
          <p>
            {trending.city}, {trending.country}
          </p>
        )}
      </div>
    </div>
  );
};

export default SingleCity;
