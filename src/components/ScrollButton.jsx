// ScrollButton.jsx
import React from "react";
import styles from "../components/ScrollButton.module.css";

const ScrollButton = () => {
  const handleScroll = () => {
    const heroSection = document.getElementById("FooterSection");
    console.log("Button clicked!");
    if (heroSection) {
      console.log("Scrolling to Hero Section");
      heroSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className={`container ${styles.Container}`}>
        <button className={`p-3 ps-5 pe-5 rounded-5 btn ${styles.scrollButton}`} onClick={handleScroll}>
          Book an appointment
        </button>
      </div>
    </div>
  );
};

export default ScrollButton;
