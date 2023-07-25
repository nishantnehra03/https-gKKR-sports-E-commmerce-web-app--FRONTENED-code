import "./Header.scss";
import { useEffect, useState, useContext } from "react";

import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import logo from "../../assets/logo/kolkata-knight-riders6292.jpg";
import Cart from "../Cart/Cart";
import Search from "../Header/Search/Search";
import { useNavigate } from "react-router-dom";
import { Context } from "../../utils/context";

const Header = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const { cartCount } = useContext(Context);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
        <div className="header-content">
          <div className="left">
            <div className="logo" onClick={() => navigate("/")}>
              <img src={logo} />
            </div>
          </div>

          <ul className="center">
            <li id="Home" onClick={() => navigate("/")}>
              Home
            </li>
            <li onClick={() => navigate("/about")}>About</li>
            <li onClick={() => navigate("/shop")}>Shop</li>
            <li onClick={() => navigate("/#contact")}>
              <a href="/#Contact ">Contact</a>
            </li>
          </ul>

          <div className="right">
            <TbSearch onClick={() => setShowSearch(true)} />
        
            <span className="cart-icon" onClick={() => setShowCart(true)}>
              <CgShoppingCart />
              <span>{cartCount}</span>
            </span>
          </div>
        </div>
      </header>
      {showCart && <Cart setShowCart={setShowCart} />}
      {showSearch && <Search setShowSearch={setShowSearch} />}
    </>
  );
};

export default Header;
