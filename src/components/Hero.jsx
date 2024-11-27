import React from "react";
import Styles from "../components/Hero.module.css";
import { HForm } from "./HForm";

export const Hero = () => {
  return (
    <div className={`HeroSection pt-5 pb-5 ${Styles.HeroSection}`} >
      <div className={`container ${Styles.Container}`}>
        <h1 className={`h1 text-center ${Styles.HeroTitle}`}>
          Non-Surgical Treatment for Knee Pain – Find the Right Doctors with{" "}
          <span style={{ color: "#E9296A" }}>Medagg Healthcare</span>
        </h1>
        <article className={`text-center pt-2 ${Styles.Article}`}>
          Are you dealing with Knee pain? Medagg Healthcare connects you with
          top hospitals and specialists offering Genicular Artery
          Embolization(GAE) –a safe, Non-Surgical, Minimally Invasive procedure
          to Treat Knee Pain.
        </article>
        <h3 className={`text-center mt-4 pb-3 ${Styles.FormTitle}`}>Get cost Estimate</h3>
        <section>
            <HForm/>
        </section>
      </div>
    </div>
  );
};
