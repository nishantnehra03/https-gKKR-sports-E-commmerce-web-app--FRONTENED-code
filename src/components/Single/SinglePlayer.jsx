import React from "react";
import Newsletter from "../Footer/Newsletter/Newsletter";

import "./SinglePlayer.scss";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFech";

function SinglePlayer() {
  const { id } = useParams();
  const { data } = useFetch(`/api/squads?populate=*&[filters][id]=${id}`);
  

  if (!data) return;
  const players = data.data[0].attributes;
  return (
    <>
      <div className="single-player-main-content">
        <div className="layout">
          <div className="single-player-page">
            <div className="lefti">
              <img
                src={
                  process.env.REACT_APP_STRIPE_APP_DEV_URL +
                  players.mainimg.data[0].attributes.url
                }
                alt="...loading"
              />
            </div>
            <div className="right">
              <div className="name">
              <span className="text-bold">
              Name : <span >{players.name}</span>
              </span>
              <span className="text-bold">
              Role : <span > {players.role}</span>
              </span>
              <span className="text-bold">
              Batting Style : <span > {players.battingstyle}</span>
              </span>
              <span className="text-bold">
              Bowling Style : <span > {players.bowlingstyle}</span>
              </span>
               
               
                
              

              <span className="divider" />

              {/* <div className="info-item"> */}
              <span className="text-bold">
                Born : <span>{players.born}</span>
              </span>
              <span className="text-bold">
                IPL Debut : <span>{players.debut}</span>
              </span>
              <span className="text-bold">
                IPL Matches :<span>{players.matches}</span>
              </span>
              <span className="text-bold">
                Runs Scored : <span>{players.runs}</span>
              </span>
              <span className="text-bold">
                Wickets Taken : <span>{players.wickets}</span>
              </span>
              <span className="text-bold">
                Nationality : <span>{players.nationality}</span>
              </span>
              </div>
              {/* </div> */}
            </div>
          </div>

          <Newsletter />
        </div>
      </div>
    </>
  );
}

export default SinglePlayer;
