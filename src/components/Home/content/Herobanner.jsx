import React, { useState, useEffect } from "react";
import "./Herobanner.scss";
import jj from "../../../assets/favkkr.jpg";
import useFetch from "../../../hooks/useFech";
import { useNavigate } from "react-router-dom";

function Herobanner() {
  const navigate = useNavigate();
  const [background, setBackground] = useState("");
  
  const { data } = useFetch(`/api/backimages?populate=*`);

  useEffect(() => {
    const bg =
      process.env.REACT_APP_STRIPE_APP_DEV_URL +
      data?.data?.[Math.floor(Math.random()*8)]?.attributes.img.data.attributes.url;
    setBackground(bg);
    
  }, [data]);

  
  return (
    <div className="heroBanner">
      <div className="backdrop-img">
        {console.log(data)}
        <img src={background} />
      </div>

      <div className="heroBannerContent">
        <span className="title">KKR(Kolkata Knight Riders).</span>
        <span className="subTitle">
          Kolkata Knight Riders (KKR) are a professional franchise cricket team
          representing the city of Kolkata in the Indian Premier League.
        </span>

        

        <div className="ctas">
          <div className="banner-cta" onClick={() => navigate("/about/")}>
            Read more
          </div>
          <div className="banner-cta v2" onClick={() => navigate("/shop/")}>
            Shop{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Herobanner;
