import React from "react";
import HeaderLogo from "../assets/logo/HeaderLogo.webp";
import Styles from "../components/Header.module.css"

export const Header = () => {
  return (
    <div className={`  ${Styles.Header}`}>
      <div className={`container position-relative mt-5 ${Styles.Container}`}>
        <img src={HeaderLogo} class="img-fluid" alt="Logo" style={{maxWidth:"12rem"}}/>
      </div>
    </div>
  );
};
