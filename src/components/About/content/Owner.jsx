import React from "react";
import s1 from "../../../assets/owner/shah rukh khan.jpeg";
import s2 from "../../../assets/owner/juhi.jpeg";
import s3 from "../../../assets/owner/jay mehta.jpeg";
import "./Owner.scss";

function Owner() {
  return (
    <div className="owner">
      <div className="title">Owners</div>
      <div className="profile">
        <div className="item">
        <a href="https://en.wikipedia.org/wiki/Shah_Rukh_Khan"><img src={s1} /></a>
          <div className="owner-details">
            <div className="name">Shah Rukh Khan</div>
            <div className="profession">Actor</div>
          </div>
        </div>
        <div className="item" >
          <a href="https://en.wikipedia.org/wiki/Juhi_Chawla"><img src={s2} /></a>
          <div className="owner-details">
            <div className="name">Juhi Chawla</div>
            <div className="profession">Actress</div>
          </div>
        </div>
        <div className="item">
        <a href="https://en.wikipedia.org/wiki/Jay_Mehta"><img src={s3} /></a>
          <div className="owner-details">
            <div className="name">Jay Mehta</div>
            <div className="profession">Businessman</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Owner;
