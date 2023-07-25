import { useNavigate } from "react-router-dom";
import "./Banner.scss";
import backimg from "../../../assets/Images/kkr3.jpeg";
// import images from "./images";
// import ImageSlider from "./imageSlider";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h1>KKR(Kolkata Knight Riders)</h1>
          <p>
            Kolkata Knight Riders (KKR) are a professional franchise cricket
            team representing the city of Kolkata in the Indian Premier League.
            The franchise is owned by Bollywood actor Shah Rukh Khan, actress
            Juhi Chawla and her spouse Jay Mehta. The Knight Riders play at the
            Eden Gardens stadium. The franchise, which has gained immense
            popularity due to its association with celebrity owners, qualified
            for the IPL playoffs for the first time in 2011. They became the IPL
            champions in 2012, by defeating Chennai Super Kings in the final.
            They repeated the feat in 2014, defeating Kings XI Punjab. The
            Knight Riders hold the record for the longest winning streak by any
            Indian team in T20s (14)
          </p>
        </div>

        <img className="banner-img" src={backimg} />
      </div>
    </div>
  );
};

export default Banner;
