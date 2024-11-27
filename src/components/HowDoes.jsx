import React from "react";
import Styles from "../components/HowDoes.module.css";

export const HowDoes = ({ data }) => {
  return (
    <div className={`${Styles.HowDoes}`}>
      <div className={`row mt-3 mb-5 ${Styles.CardRow}`}>
        {data.map((item, index) => (
          <div
            className={`col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 ${Styles.CardCol}`}
            key={index}
          >
            <div className={`card rounded-5 border-0 p-2 mt-4 ${Styles.Card}`}>
              <div className={`row ${Styles.Row}`}>
                <div className={`col-10 p-0 ${Styles.ColRight}`}>
                  <div className={`card-body p-0 ps-4 pt-2 pb-2  ${Styles.CardBody}`}>
                    <h3
                      className={`card-title text-start mt-1 ${Styles.CardTitle}`}
                    >
                      {item.CardTitle}
                    </h3>
                    <p className={`card-text text-start ${Styles.CardText}`}>
                      {item.CardText}
                    </p>
                  </div>
                </div>
                <div className={`col-2 p-0 ${Styles.ColLeft}`}>
                  <img
                    src={item.CardImg}
                    alt={item.title}
                    className={`card-img img-fluid ${Styles.CardImage}`}
                    style={{maxWidth:"3rem"}}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
