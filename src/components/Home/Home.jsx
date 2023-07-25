//import Category from "./Category/Category";
import Banner from "../About/Banner/Banner";
import "./Home.scss";
//import Products from "../Products/Products";
import Content from "../Home/content/Content";
import Herobanner from "./content/Herobanner";

const Home = () => {
  return (
    <div className="home">
      <Herobanner />

      {/* <Category/>
        <Products/> */}
      <Content />
    </div>
  );
};

export default Home;
