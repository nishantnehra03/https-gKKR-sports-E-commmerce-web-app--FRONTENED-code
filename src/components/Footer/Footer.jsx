import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope,FaInstagram,FaFacebook,FaTwitter,FaCopyright } from "react-icons/fa";

import logo from "../../assets/logo/kolkata-knight-riders6292.jpg"
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div  className="col">
                    <img className="img"  src={logo} alt=""/>
                </div>
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                    The franchise qualified for the IPL playoffs for the first time in 2011 and won the tournament in 2012 and 2014. The franchise also qualified for the playoffs in the three consecutive years of 2016, 2017 and 2018 as well as in 2021 when they were runners up.
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                            Backstage, Plot no. 612 Junction of Rama Krishna Mission Road & 15th Road, South Avenue, Santacruz West, Mumbai, Maharashtra: 400054.
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Phone: 0471 272 0261</div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email: business@kkr.in</div>
                    </div>
                </div>
                {/* <div className="col">
                    <div className="title">Categories</div>
                    <span className="text">Headphones</span>
                    <span className="text">Smart Watches</span>
                    <span className="text">Bluetooth Speakers</span>
                    <span className="text">Wireless Earbuds</span>
                    <span className="text">Home Theatre</span>
                    <span className="text">Projectors</span>
                </div> */}
                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text">Home</span>
                    <span className="text">About</span>
                    <span className="text">Privacy Policy</span>
                   
                    <span className="text">Terms & Conditions</span>
                    <span className="text">Contact Us</span>
                </div>
            </div>
            <div className="follow">
                <div className="title">FOLLOW #KKR

                </div>
                <div className="c-item">
                    <a href="https://www.instagram.com/kkriders/">
                        <FaInstagram />
                        </a>
                    </div>
                <div className="c-item">

                    <a href="https://www.facebook.com/KolkataKnightRiders/">
                        <FaFacebook />
                        </a>
                    </div>
                <div className="c-item">
                    <a href="https://twitter.com/i/flow/login?redirect_after_login=%2FKKRiders%2F">
                        <FaTwitter />
                        </a>
                    </div>
            </div>
            <hr/>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <span className="text">
                        COPYRIGHT <span>
                            <FaCopyright/></span>
                             NISHANT 2023 KOLKATA KNIGHT RIDERS. ALL RIGHTS RESERVED.
                    </span>
                    <div className="last">

                        <ul className="last">
                            <li className="text">Signed Jersey</li>
                            <li className="text">Terms And Conditions</li>

                            <li className="text">Privacy Policy</li>
                            <li className="text">Cookie Policy</li>
                        </ul>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;