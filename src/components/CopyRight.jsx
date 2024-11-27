import React from "react";
import Styles from "../components/CopyRight.module.css";

export const CopyRight = () => {
  return (
    <div>
      <div className={`container ${Styles.CopyRight}`}>
        <div className="row pt-3">
          <p className="text-center" style={{ color: "white" }}>
            <a
              href="tel:+919363656010"
              style={{ color: "white", textDecoration: "none" }}
            >
              +91 93636 56010
            </a>{" "}
            |{" "}
            <a
              href="tel:+919825928840"
              style={{ color: "white", textDecoration: "none" }}
            >
              +91 89259 28840
            </a>
          </p>

          <p className="text-center " style={{ color: "white" }}>
            © Copyright 2024 | All Rights Reserved | Medagg Healthcare is a
            subsidiary of Medagg Ventures LLP.
          </p>
        </div>
      </div>
    </div>
  );
};
