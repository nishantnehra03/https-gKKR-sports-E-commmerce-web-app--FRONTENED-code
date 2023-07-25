import React from "react";


import "./Player.scss";
import { useNavigate } from "react-router-dom";
function Player({ id, data }) {
  const navigate=useNavigate();
  return (
    <div className="product-card" onClick={() =>navigate("/squad/"+id)} >
      <div className="thumbnailss">
        <div className="imgs">
          <div className="mnimg">
            <img
              src={process.env.REACT_APP_STRIPE_APP_DEV_URL + data.mainimg.data[0].attributes.url}
              alt="...loading"
            />
          </div>
          <div className="icon">
            <img src={process.env.REACT_APP_STRIPE_APP_DEV_URL + data.mainimg.data[1].attributes.url} 
            alt="...loading"/>
          </div>
        </div>

        <div className="player-details">
          <div className="details">
            <span className="naam">{data.name}</span>
            <span className="role">{data.role}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Player;
