// WhyChoose.jsx
import React from "react";
import Styles from "../components/WhyChoose.module.css";

export const WhyChoose = ({ data }) => {
  return (
    <div>
      <div
        className={`row pt-5 pb-5 ${Styles.CardRow}`}
      >
        {data.map((item, index) => (
          <div
            className={`col-12 col-sm-12 mt-md-2 mt-sm-4 mt-4 col-md-6 col-lg-3 col-xl-3 col-xxl-3 ${Styles.CardCol}`}
            key={index}
          >
            <div
              className={`CardFrame rounded-4 ${Styles.CardFrame}`}
              style={{ backgroundColor: "white" }}
            >
              <div
                className={`card border-0 p-2 p-xxl-4 p-xl-3 p-lg-2 ps-1 pe-1 rounded-4 ${Styles.Card}`}
              >
                <div className={`${Styles.ImgFrame}`}>
                  <img
                    src={item.CardImg}
                    alt={item.title}
                    className={`card-img img-fluid ${Styles.CardImage}`}
                    style={{ maxWidth: "6rem" }}
                  />
                </div>
                <div className={`card-body mt-0 ${Styles.CardBody}`}>
                  <h3 className={`card-title text-center ${Styles.CardTitle}`}>
                    {item.CardTitle}
                  </h3>
                  <p className={`card-text text-center ${Styles.CardText}`}>
                    {item.CardContent}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
