import React from "react";
import "./Services.css";
import service from "../../assets/service.jpg";
import {
  MdTravelExplore,
  MdOutlineCardTravel,
  MdOutlineAirlineSeatReclineExtra,
  MdDateRange,
} from "react-icons/md";
import { RiMoneyEuroBoxLine } from "react-icons/ri";

import { FaUniversity } from "react-icons/fa";

const Services = () => {
  return (
    <div className="serviceContainer">
      <div
        className="text"
        style={{
          margin: "20px 0",
        }}
      >
        <div className="desc">
          <h1 className="header">Why You Should Choose Us?</h1>
          <p
            style={{
              fontFamily: "Inter",
              fontSize: "16px",
              color: "#596157",
              lineHeight: "24px",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Faciliscommodi animi laborum
            <br />
            reprehenderit, commodi animi laborum illo amet? illo amet?
          </p>
        </div>

        <div className="serviceSection">
          <div className="serviceCard">
            <div className="head">
              <MdTravelExplore
                style={{
                  color: "#0A1128",
                  fontSize: "32px",
                  marginRight: "20px",
                }}
              />
              <p
                style={{
                  fontSize: "20px",
                  color: "#0A1128",
                  fontWeight: "500",
                  fontFamily: "Inter",
                }}
              >
                10000+ Packages
              </p>
            </div>
            <p
              style={{
                fontFamily: "Inter",
                fontSize: "16px",
                color: "#596157",
                marginTop: "20px",
              }}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
              porro, dolorem obcaecati quam tenetur a pariatur nihil placeat
              aperiam excepturi?
            </p>
          </div>
          <div className="serviceCard">
            <div
              className="head"
              style={{ display: "flex", alignItems: "center" }}
            >
              <MdOutlineAirlineSeatReclineExtra
                style={{
                  color: "#0A1128",
                  fontSize: "32px",
                  marginRight: "20px",
                }}
              />
              <p
                style={{
                  fontSize: "20px",
                  color: "#0A1128",
                  fontWeight: "500",
                  fontFamily: "Inter",
                }}
              >
                Extra Ordinary Facilities
              </p>
            </div>
            <p
              style={{
                fontFamily: "Inter",
                fontSize: "16px",
                color: "#596157",
                marginTop: "20px",
              }}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
              porro, dolorem obcaecati quam tenetur a pariatur nihil placeat
              aperiam excepturi?
            </p>
          </div>
          <div className="serviceCard">
            <div className="head">
              <RiMoneyEuroBoxLine
                style={{
                  color: "#0A1128",
                  fontSize: "32px",
                  marginRight: "20px",
                }}
              />
              <p
                style={{
                  fontSize: "20px",
                  color: "#0A1128",
                  fontWeight: "500",
                  fontFamily: "Inter",
                }}
              >
                Money Back Guarantee
              </p>
            </div>
            <p
              style={{
                fontFamily: "Inter",
                fontSize: "16px",
                color: "#596157",
                marginTop: "20px",
              }}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
              porro, dolorem obcaecati quam tenetur a pariatur nihil placeat
              aperiam excepturi?
            </p>
          </div>
          <div className="serviceCard">
            <div className="head">
              <MdDateRange
                style={{
                  color: "#0A1128",
                  fontSize: "32px",
                  marginRight: "20px",
                }}
              />
              <p
                style={{
                  fontSize: "20px",
                  color: "#0A1128",
                  fontWeight: "500",
                  fontFamily: "Inter",
                }}
              >
                Flexible Dates
              </p>
            </div>
            <p
              style={{
                fontFamily: "Inter",
                fontSize: "16px",
                color: "#596157",
                marginTop: "20px",
              }}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
              porro, dolorem obcaecati quam tenetur a pariatur nihil placeat
              aperiam excepturi?
            </p>
          </div>
          <div className="serviceCard">
            <div className="head">
              <MdOutlineCardTravel
                style={{
                  color: "#0A1128",
                  fontSize: "32px",
                  marginRight: "20px",
                }}
              />
              <p
                style={{
                  fontSize: "20px",
                  color: "#0A1128",
                  fontWeight: "500",
                  fontFamily: "Inter",
                }}
              >
                0 Extra Cost
              </p>
            </div>
            <p
              style={{
                fontFamily: "Inter",
                fontSize: "16px",
                color: "#596157",
                marginTop: "20px",
              }}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
              porro, dolorem obcaecati quam tenetur a pariatur nihil placeat
              aperiam excepturi?
            </p>
          </div>
          <div className="serviceCard">
            <div className="head">
              <FaUniversity
                style={{
                  color: "#0A1128",
                  fontSize: "32px",
                  marginRight: "20px",
                }}
              />
              <p
                style={{
                  fontSize: "20px",
                  color: "#0A1128",
                  fontWeight: "500",
                  fontFamily: "Inter",
                }}
              >
                Student Descount
              </p>
            </div>
            <p
              style={{
                fontFamily: "Inter",
                fontSize: "16px",
                color: "#596157",
                marginTop: "20px",
              }}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
              porro, dolorem obcaecati quam tenetur a pariatur nihil placeat
              aperiam excepturi?
            </p>
          </div>
        </div>
      </div>
      <img src={service} className="serviceImg" alt="service img" />
    </div>
  );
};

export default Services;
