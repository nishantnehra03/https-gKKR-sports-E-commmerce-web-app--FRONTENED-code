import React from "react";
import s1 from "../../../assets/STAFF/venky.jpeg";
import s2 from "../../../assets/STAFF/chandu.png";
import s3 from "../../../assets/STAFF/arun.png";
import s4 from "../../../assets/STAFF/abhi.png";
import s5 from "../../../assets/STAFF/AR.png";
import s6 from "../../../assets/STAFF/donald.png";
import s7 from "../../../assets/STAFF/fostr.png";
import s8 from "../../../assets/STAFF/salvi.png";
import "./staff.scss";

function Staff() {
  return (
    <div className="staff">
      <div className="title">SUPPORT STAFF</div>
      <div className="profile">
        <div className="set-1">
          <div className="item">
            <img src={s1} />
            <div className="owner-details">
              <div className="name">Venky Mysore</div>
              <div className="profession">Managing Director</div>
            </div>
          </div>
          <div className="item">
            <img src={s2} />
            <div className="owner-details">
              <div className="name">Chandrakant Pandit</div>
              <div className="profession">Head Coach</div>
            </div>
          </div>
          <div className="item">
            <img src={s3} />
            <div className="owner-details">
              <div className="name">Bharat Arun</div>
              <div className="profession">Bowling Coach</div>
            </div>
          </div>
          <div className="item">
            <img src={s4} />
            <div className="owner-details">
              <div className="name">Abhishek Nayar</div>
              <div className="profession">Assistant Coach</div>
            </div>
          </div>
        </div>
        <div className="set-1">
          <div className="item">
            <img src={s5} />
            <div className="owner-details">
              <div className="name">AR Srikanth</div>
              <div className="profession">
                Talent Scouting & Player Acquisition
              </div>
            </div>
          </div>
          <div className="item">
            <img src={s6} />
            <div className="owner-details">
              <div className="name">Chris Doanaldson</div>
              <div className="profession">Strength And Conditioning Coach</div>
            </div>
          </div>
          <div className="item">
            <img src={s7} />
            <div className="owner-details">
              <div className="name">James Foster</div>
              <div className="profession">Assistant Coach</div>
            </div>
          </div>
          <div className="item">
            <img src={s8} />
            <div className="owner-details">
              <div className="name">Omkar Salvi</div>
              <div className="profession">Assistant Bowling Coach</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Staff;
