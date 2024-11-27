import React from "react";
import Styles from "../components/Footer.module.css";
import MedaggLogo from "../assets/logo/HeaderLogo.webp";
import { FForm } from "../components/FForm";

export const Footer = ({ onSubmit }) => {
  return (
    <div className={`footer-container p-2 ${Styles.FooterContainer}`} id="FooterSection">
      <div className={`container ${Styles.Container}`}>
        <h2 className={`title text-center ${Styles.Title}`}>
          Get Started Today – Regain Control Over{" "}
          <span style={{ color: "#E9296A" }}>Your Life</span>!
        </h2>
        <div className={`row p-md-3 mt-5 ${Styles.Row}`} style={{ backgroundColor: "#fff" }}>
          <div className={`col-12 col-left col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 ${Styles.ColLeft}`}>
            <div className={`card pt-3 border-0 ${Styles.Card}`}>
              <img
                className={`card-img img-fluid ${Styles.CardImg}`}
                src={MedaggLogo}
                alt="Medagg Logo"
                style={{ maxWidth: "250px" }}
              />
              <div className={`card-body ${Styles.CardBody}`}>
                <div className={`card-text text-center ${Styles.CardText}`}>
                  Take the first step towards relief from uterine fibroids. Contact Medagg Healthcare today to connect with experienced doctors and find the best uterine fibroid treatment for you.
                </div>
              </div>
            </div>
          </div>
          <div className={`col col-right col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 ${Styles.ColRight}`}>
            <div className="card border-0">
              <FForm onSubmit={onSubmit} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
