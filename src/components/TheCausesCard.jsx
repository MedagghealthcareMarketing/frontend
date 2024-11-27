import React from "react";
import Styles from "../components/TheCausesCard.module.css";

export const TheCausesCard = ({ data }) => {
  return (
    <div>
      <div className={`frame position-relative border-2 ${Styles.Frame}`}>
        {data.map((item, index) => (
          <div className={`card rounded-0 ${Styles.Card}`}>
            <div
              className={`position-absolute top-50 start-0 translate-middle ${Styles.NumFrame}`}
            >
              <h3 className={` p-1 pe-2 ps-2 ${Styles.CauseNum}`}>{item.CardNum}</h3>
            </div>
            <div className="card-body">
              <h2 className={`ps-5 ${Styles.CauseTitle}`}>{item.CardTitle}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
