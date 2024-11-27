import React from "react";
import Styles from "../components/BenifitsCard.module.css";

export const BenifitsCard = ({ data }) => {
  return (
    <div>
      <div className={`row mt-4 bg-transparent ${Styles.CardRow}`}>
        {data.map((item, index) => (
          <div
            className={`col-12 col-sm-12 position-relative col-md-6 col-lg-3 col-xl-3 col-xxl-3 ${Styles.CardCol}`}
            key={index}
          >
            <div
              className={`card border-0 p-5 ps-2 pe-2 rounded-4 bg-transparent ${Styles.Card}`}
            >
              <div className="frame">
                <img
                  src={item.CardImg}
                  alt={item.title}
                  className={`card-img img-fluid ${Styles.CardImage}`}
                  style={{ maxWidth: "8rem" }}
                />
                {/* <img
                  className={`position-absolute top-5 start-100 translate-middle ${Styles.Arrow}`}
                  src={item.ArrowImg}
                  alt=""
                  style={{ maxWidth: "8rem" }}
                /> */}
              </div>
              <div className={`card-body mt-4 ${Styles.CardBody}`}>
                <h3 className={`card-title text-center ${Styles.CardTitle}`}>
                  {item.CardTitle}
                </h3>
                <p className={`card-text text-center ${Styles.CardText}`}>
                  {item.CardContent}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
