import React from "react";
import "./Newsletter.scss";
import faab from "../../../assets/sponsor/principal/myfab11.png";
import bkt from "../../../assets/sponsor/principal/bkt.png";
import wdl from "../../../assets/sponsor/health/woodland.png";
import md1 from "../../../assets/sponsor/media/sampark.png";
import md2 from "../../../assets/sponsor/media/fever-logo.png";
import md3 from "../../../assets/sponsor/media/kolkata-radio-one.png";
import md4 from "../../../assets/sponsor/media/the-telegraph.png";
import l1 from "../../../assets/sponsor/license/thesouledstore.png";
import l2 from "../../../assets/sponsor/license/litlifestyle.png";
import l3 from "../../../assets/sponsor/license/eume.png";
import l4 from "../../../assets/sponsor/license/fancode.png";
import o1 from "../../../assets/sponsor/official/thums-up.png" ;
import o2 from "../../../assets/sponsor/official/boat.png" ;
import o3 from "../../../assets/sponsor/official/mio-amore.png" ;
import o4 from "../../../assets/sponsor/official/hrx.png" ;
import o5 from "../../../assets/sponsor/official/bira.png" ;
import o6 from "../../../assets/sponsor/official/amul_organic.png" ;

import a1 from "../../../assets/sponsor/associate/lux-cozi.png";
import a2 from "../../../assets/sponsor/associate/joy.png";
import a3 from "../../../assets/sponsor/associate/money9.png";
import a4 from "../../../assets/sponsor/associate/jio.png";
import a5 from "../../../assets/sponsor/associate/acko.png";
import a6 from "../../../assets/sponsor/associate/royalgreen.png";
import a7 from "../../../assets/sponsor/associate/srmb.png";

function Newsletter() {
  return (
    <div className="sponsor">
      <div className="principal">
        <div className="title">Principal Partners</div>
        <div className="sponim">
          <a href="https://myfab11.com/" target="blank">
            <img src={faab} alt="loading...." />{" "}
          </a>
          <a href="https://www.bkt-tires.com/Viewdoc.cshtml?co_id=1" target="blank">
            <img src={bkt} alt="loading...." />{" "}
          </a>
        </div>
      </div>
      <div className="principal">
        <div className="title">Associate Sponsors</div>
        <div className="sponim">
        <a href="https://www.luxinnerwear.com/" target="blank">
            <img src={a1} alt="loading...." />{" "}
          </a>
        <a href="https://www.joypersonalcare.com/" target="blank">
            <img src={a2} alt="loading...." />{" "}
          </a>
        <a href="https://www.money9.com/" target="blank">
            <img src={a3} alt="loading...." />{" "}
          </a>
        <a href="https://www.jio.com/" target="blank">
            <img src={a4} alt="loading...." />{" "}
          </a>
        <a href="https://www.acko.com/" target="blank">
            <img src={a5} alt="loading...." />{" "}
          </a>
        <a href="https://adsdistilleries.com/view.php?name=Royal-Green" target="blank">
            <img src={a6} alt="loading...." />{" "}
          </a>
        <a href="https://www.srmbsteel.com/" target="blank">
            <img src={a7} alt="loading...." />{" "}
          </a>
        
        </div>
      </div>
      <div className="principal">
        <div className="title">Official Partners</div>
        <div className="sponim">
        <a href="https://www.coca-cola.com/in/en/brands/thums-up" target="blank">
            <img src={o1} alt="loading...." />{" "}
          </a>
        <a href="https://www.boat-lifestyle.com/" target="blank">
            <img src={o2} alt="loading...." />{" "}
          </a>
        <a href="https://mioamoreshop.com/" target="blank">
            <img src={o3} alt="loading...." />{" "}
          </a>
        <a href="https://www.hrxbrand.com/home" target="blank">
            <img src={o4} alt="loading...." />{" "}
          </a>
        <a href="https://www.bira91.com//" target="blank">
            <img src={o5} alt="loading...." />{" "}
          </a>
        <a href="https://amulorganic.org/" target="blank">
            <img src={o6} alt="loading...." />{" "}
          </a>
          
        </div>
      </div>
      <div className="principal">
        <div className="title">Licensing Partners</div>
        <div className="sponim">
          <a href="https://www.thesouledstore.com/" target="blank">
            <img src={l1} alt="loading...." />{" "}
          </a>
          <div>
            <img src={l2} alt="loading...." />{" "}
          </div>
          <a href="https://eumeworld.com/" target="blank">
            <img src={l3} alt="loading...." />{" "}
          </a>
          <a href="https://fancode.com/" target="blank">
            <img src={l4} alt="loading...." />{" "}
          </a>
        </div>
      </div>
      <div className="principal">
        <div className="title">Media Partners</div>
        <div className="sponim">
          <a
            href="https://economictimes.indiatimes.com/company/sampark-advertising-media-private-limited/U22120WB2008PTC129136"
            target="blank">
            <img src={md1} alt="loading...." />{" "}
          </a>
          <a href="https://www.fever.fm/" target="blank">
            <img src={md2} alt="loading...." />{" "}
          </a>
          <a href="http://www.radioone.in/" target="blank">
            <img src={md3} alt="loading...." />{" "}
          </a>
          <a href="https://www.telegraphindia.com/" target="blank">
            <img src={md4} alt="loading...." />{" "}
          </a>
        </div>
      </div>

      <div className="principal">
        <div className="title">Health Partners</div>
        <div className="sponim">
          <a href="https://www.woodlandshospital.in/" target="blank">
            <img src={wdl} alt="loading...." />{" "}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
