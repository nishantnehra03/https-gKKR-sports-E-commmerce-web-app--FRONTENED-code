import React from "react";
import { useEffect, useContext } from "react";

import "./Content.scss";
import shp from "../../../assets/buy-official-jersey-web.png";
import Squad from "./Squad";
import Newsletter from "../../Footer/Newsletter/Newsletter";
import { fetchDataFromApi } from "../../../utils/api";
import { Context } from "../../../utils/context";
import { useNavigate } from "react-router-dom";
import Contact from "../Contact/Contact";

function Content() {
  const navigate=useNavigate();
  const { players, setPlayers } = useContext(Context);

  useEffect(() => {
    getPlayers();
  }, []);

  const getPlayers = () => {
    fetchDataFromApi("/api/squads?populate=*").then((res) => {
      console.log(res);
      setPlayers(res);
    });
  };
  return (
    <div className="main">
      <div className="shop">
        <img src={shp} alt="loading..."  onClick={() =>navigate("/shop/product/"+23)}/>
      </div>
      <Squad players={players} />
      <Contact/>
      <Newsletter />
    </div>
  );
}

export default Content;
