import React from "react";
import "./Squad.scss";
import Player from "./Player";


function Squad({players}) {
  return (
    <div className="squad">
      <div className="title">SQUAD</div>
      <div className="players" >
        
      {players?.data?.map((item) => (
          <Player key={item.id} id={item.id} data={item.attributes}  />
        ))}
        
      </div>
    </div>
  );
}

export default Squad;
