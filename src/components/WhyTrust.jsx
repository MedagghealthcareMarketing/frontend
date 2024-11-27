import React from "react";
import Styles from "../components/WhyTrust.module.css";

export const WhyTrust = ({ data }) => {
  return (
    <div>
      <div>
        <div className={`row mt-3 mb-5 ${Styles.CardRow}`}>
          {data.map((item, index) => (
            <div
              className={`col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 ${Styles.CardCol}`}
              key={index}
            >
              <div
                className={`card border-0 ps-2 pe-2 rounded-4 ${Styles.Card}`}
              >
                <div className="frame p-3">
                  <img
                    src={item.CardImg}
                    alt={item.title}
                    className={`card-img img-fluid ${Styles.CardImage}`}
                  />
                </div>
                <div className={`card-body ${Styles.CardBody}`}>
                  <h3 className={`card-title text-center ${Styles.CardTitle}`}>
                    {item.CardTitle}
                  </h3>
                  <p className={`card-text text-center ${Styles.CardText}`}>
                    {item.CardText}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
