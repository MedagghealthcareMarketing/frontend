import React from "react";
import Styles from "../components/CompareCard.module.css";

export const CompareCard = ({ data }) => {
  return (
    <div>
      <div className={`row mt-5 mb-5 ${Styles.CardRow}`} >
        {data.map((item, index) => (
          <div
            className={`col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 mt-5 mt-sm-5 mt-md-0 mt-lg-0 mt-xl-0 mt-xxl-0 ${Styles.CardCol}`}
            key={index} 
          >
            <div className={`card rounded-4 mt-3 mt-sm-4 mt-md-4 mt-lg-0 mt-xl-0 mt-xxl-0  border-0 p-0 ${Styles.Card}`} >
              <div className={`ImgFrame  p-0 ${Styles.ImgFrame}`} >
                <img
                  src={item.CardImg}
                  alt={item.title}
                  className={`card-img img-fluid ${Styles.CardImage}`}
                  style={{maxWidth:"12rem"}}
                />
              </div>
              <div className={`card-body pt-4  ${Styles.CardBody}`} >
                <h5
                  className={`card-title text-center mt-1 ${Styles.CardTitle}`}
                >
                  {item.CardTitle}
                </h5>
                <p className={`card-text text-center ${Styles.CardText}`}>
                  {item.CardText}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
