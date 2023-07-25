import React from "react";
import ss from "../../assets/111.png";
import nn from "../../assets/KKR-HD-photo-768x337.jpg";
import "./About.scss";
import Owner from "./content/Owner";
import Staff from "./content/Staff";
import Newsletter from "../Footer/Newsletter/Newsletter";

import Banner from "./Banner/Banner";

function About() {
  return (
    <>
      <div className="main-about-container">
        <div>
          <img src={nn} />
        </div>
        <div className="heading">About</div>
        <div className="stats-info">
          <div>{<Banner />}</div>
          <div>
            <Owner />
          </div>
          <div>
            <Staff />
          </div>
          <div className="heading">Stats</div>
          <div className="stats-info-box">
            <div className="left">
              <img src={ss} alt="" />
            </div>
            <div className="right">
              <div className="title">
                <h3>KOLKATA KNIGHT RIDERS</h3>
                <h4>IPL Record So Far</h4>
              </div>
              <div className="data-table">
                <table>
                  <tr>
                    <th>Total Matches Played</th>
                    <th>237</th>
                  </tr>
                  <tr>
                    <td>won</td>
                    <td>Maria Anders</td>
                  </tr>
                  <tr>
                    <td>Lost</td>
                    <td>Francisco Chang</td>
                  </tr>
                  <tr>
                    <td>Tied</td>
                    <td>Francisco Chang</td>
                  </tr>
                  <tr>
                    <td>NR</td>
                    <td>Francisco Chang</td>
                  </tr>
                  <tr>
                    <td>Title</td>
                    <td>Francisco Chang</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <div className="stats-bar">
            <div className="set-1">
              <div className="item-stats">
                <div className="year">2008</div>
                <div className="perform">
                  League stage
                  <br />
                  (6th)
                </div>
              </div>
              <div className="item-stats">
                <div className="year">2009</div>
                <div className="perform">
                  League stage
                  <br />
                  (8th)
                </div>
              </div>
              <div className="item-stats">
                <div className="year">2010</div>
                <div className="perform">
                  League stage
                  <br />
                  (6th)
                </div>
              </div>
              <div className="item-stats">
                <div className="year">2011</div>
                <div className="perform">
                  Playoffs
                  <br />
                  (4th)
                </div>
              </div>
              <div className="item-stats">
                <div className="year">2012</div>
                <div className="performi">Winners</div>
              </div>
              <div className="item-stats">
                <div className="year">2013</div>
                <div className="perform">
                  League stage
                  <br />
                  (7th)
                </div>
              </div>
              <div className="item-stats">
                <div className="year">2014</div>
                <div className="performi">Winners</div>
              </div>
              <div className="item-stats">
                <div className="year">2015</div>
                <div className="perform">
                  League stage
                  <br />
                  (5th)
                </div>
              </div>
              <div className="item-stats">
                <div className="year">2016</div>
                <div className="perform">
                  Playoffs
                  <br />
                  (4th)
                </div>
              </div>
            </div>
            <div className="set-1">
              <div className="item-stats">
                <div className="year">2017</div>
                <div className="perform">
                  Playoffs
                  <br />
                  (4th)
                </div>
              </div>
              <div className="item-stats">
                <div className="year">2018</div>
                <div className="perform">
                  Playoffs
                  <br />
                  (3rd)
                </div>
              </div>
              <div className="item-stats">
                <div className="year">2019</div>
                <div className="perform">
                  League stage
                  <br />
                  (5th)
                </div>
              </div>
              <div className="item-stats">
                <div className="year">2020</div>
                <div className="perform">
                  League stage
                  <br />
                  (5th)
                </div>
              </div>
              <div className="item-stats">
                <div className="year">2021</div>
                <div className="perform">Runner Up</div>
              </div>
              <div className="item-stats">
                <div className="year">2022</div>
                <div className="perform">
                  League stage
                  <br />
                  (7th)
                </div>
              </div>
              <div className="item-stats">
                <div className="year">2023</div>
                <div className="perform">
                  League stage
                  <br />
                  (7th)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
    </>
  );
}

export default About;
