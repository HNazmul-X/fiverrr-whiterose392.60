import { faTelegram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import PolistarterLogo from '../../Images/polistarterLogo.png';
import "./Footer.css"

const Footer = () => {
  return (
    <div id="footer-part">
      <footer class="main-page-footer">
        <div class="bamer-side">
          <div class="ufrer-jaga">
            <div class="logo-and-txt">
              <img src={PolistarterLogo} alt="" />
            </div>
          </div>
          <div class="niser-jaga">
            <p>
              &copy; 2021 by
              <span>
                <b>PolyStarter</b>
              </span>
              . All Rights Reserved
            </p>
          </div>
        </div>

        <div class="daner-jaga">
          <div class="ufrer-ordhek">
            <div class="contact-lekha">
              <h4>Contact Us</h4>
            </div>
            <div class="upor-nis-emails">
              <div class="email">
                <p>copy@email.com</p>
              </div>
              <div class="email">
                <p>info@emal.com</p>
              </div>
            </div>
          </div>

          <div class="niser-ordhek">
            <div class="coin-gesko">
              <p>CoinGesko &#8599;</p>
            </div>
            <div class="icons">
              <div class="icon">
                <p>M</p>
              </div>
              <div class="icon">
                <FontAwesomeIcon icon={faTelegram} />
              </div>
              <div class="icon">
                <FontAwesomeIcon icon={faTwitter} />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
