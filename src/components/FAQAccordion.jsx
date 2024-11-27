// FAQAccordion.jsx
import React from "react";
import Styles from "../components/FAQAccordion.module.css"; // Importing custom styles

const FAQAccordion = ({ data }) => {
  return (
    <div className="container mt-5">
      <div className={`accordion ${Styles.Accordion}`} id="faqAccordion">
        {data.map((item) => (
          <div key={item.id} className="accordion-item">
            <h2
              className={`accordion-header ${Styles.AccordionHeader}`}
              id={`heading${item.id}`}
            >
              <button
                className={`accordion-button ${Styles.AccordionBtn}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${item.id}`}
                aria-expanded="true"
                aria-controls={`collapse${item.id}`}
                style={{ backgroundColor: "white" }}
              >
                {item.question}
              </button>
            </h2>
            <div
              id={`collapse${item.id}`}
              className="accordion-collapse collapse"
              aria-labelledby={`heading${item.id}`}
              data-bs-parent="#faqAccordion"
            >
              <div
                className="accordion-body"
                dangerouslySetInnerHTML={{ __html: item.answer }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;
