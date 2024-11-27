// Home.jsx
import React from "react";
import Styles from "../pages/Home.module.css";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import Nav1 from "../assets/Home/Nav1.webp";
import Nav2 from "../assets/Home/Nav2.webp";
import Nav3 from "../assets/Home/Nav3.webp";
import Nav4 from "../assets/Home/Nav4.webp";

export const Home = () => {
  const navigate = useNavigate();

  // Function to handle card navigation
  const handleNavigate = (route) => {
    navigate(route);
  };

  return (
    <div>
      <Header />
      <div className="container">
        <h2 className={`text-center mt-5 ${Styles.Title}`}>
          NON - SURGICAL TREATMENTS
        </h2>
        <div className={`row ${Styles.CardRow}`}>
          <div className={`col-3 ${Styles.CardCol}`}>
            <div
              className={`card ${Styles.Card}`}
              onClick={() =>
                (window.location.href =
                  "https://medagghealthcare.com/lp/uterine-artery-embolization-treatment/")
              }
            >
              <img src={Nav1} alt="Uterine artery embolization" />
              <div className="card-body">
                <div className="card-title text-center">Uterine Artery Embolization</div>
              </div>
            </div>
          </div>
          <div className={`col-3 ${Styles.CardCol}`}>
            <div className={`card ${Styles.Card}`} onClick={() => handleNavigate("/genicular-artery-embolization-treatment")}>
              <img src={Nav2} alt="Genicular artery embolization" />
              <div className="card-body">
                <div className="card-title text-center">Genicular Artery Embolization</div>
              </div>
            </div>
          </div>
          <div className={`col-3 ${Styles.CardCol}`}>
            {/* <div className={`card ${Styles.Card}`} onClick={() => handleNavigate("/pae")}>
              <img src={Nav3} alt="Prostatic artery embolization" />
              <div className="card-body">
                <div className="card-title text-center ">Prostatic artery embolization</div>
              </div>
            </div> */}
          </div>
          <div className={`col-3 ${Styles.CardCol}`}>
            {/* <div className={`card ${Styles.Card}`} onClick={() => handleNavigate("/pae")}>
              <img src={Nav4} alt="Prostatic artery embolization" />
              <div className="card-body">
                <div className="card-title text-center ">Thyroid nodule Embolization</div>
              </div>
            </div> */}
          </div>
          
        </div>
      </div>
    </div>
  );
};
