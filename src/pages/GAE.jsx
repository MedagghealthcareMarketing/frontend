// GAE.jsx
import React from "react";
import styles from "../pages/GAE.module.css";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { WhyChoose } from "../components/WhyChoose";
import { WhyTrust } from "../components/WhyTrust";
import { CompareCard } from "../components/CompareCard";
import { HowDoes } from "../components/HowDoes";
import { BenifitsCard } from "../components/BenifitsCard";
import { Table } from "../components/Table";
import { TheCauses } from "../components/TheCauses";
import { CopyRight } from "../components/CopyRight";
import PopUpBanner from "../components/PopUpBanner";
import ScrollButton from "../components/ScrollButton";
import FAQAccordion from "../components/FAQAccordion";

// Import json
import whyChooseGAE from "../json/WhyChooseGAE";
import whyTrust from "../json/WhyTrust";
import CompareGae from "../json/CompareGAE";
import HowDoesGae from "../json/HowDoesGAE";
import BenifitsGAE from "../json/GAEBenifits";
import TableGae from "../json/TableGAE";
import CausesGae from "../json/CausesGAE";
import faqData from "../json/FAQdata"; // Importing the FAQ data

export const GAE = () => {

  return (
    <div className={`${styles.GAE}`}>
      <section>
        <PopUpBanner />
      </section>
      <section className="position-relative" style={{ position: "relative" }}>
        <Header />
      </section>
      <section>
        <Hero />
      </section>
      <section style={{ backgroundColor: "#F5F8FD" }}>
        <div className="container pt-5" style={{ zIndex: "99" }}>
          <h1 className={`h1 text-center ${styles.WhyChooseTitle}`}>
            Why Choose Genicular Artery Embolization (GAE)?
          </h1>
          <WhyChoose data={whyChooseGAE} /> {/* Pass the data as props */}
        </div>
      </section>
      <section>
        <div className="container pt-5 pb-5">
          <TheCauses data={CausesGae} />
        </div>
      </section>
      <section style={{ backgroundColor: "#F5F8FD" }}>
        <div className="container pt-5 pb-5">
          <h1 className={`h1 text-center ${styles.HowDoesTitle}`}>
            How Does Genicular Artery Embolization Work?
          </h1>
          <HowDoes data={HowDoesGae} />
        </div>
      </section>
      <section>
        <div className="container pt-5 pb-5">
          <h1 className={`h1 text-center ${styles.BenifitsTitle}`}>
            Benefits of Choosing Genicular Artery Embolization for Knee pain!
          </h1>
          <BenifitsCard data={BenifitsGAE} />
          <ScrollButton />
        </div>
      </section>
      <section style={{ backgroundColor: "#F5F8FD" }}>
        <div className="container pt-5 pb-5">
          <h1 className={`h1 text-center ${styles.WhyTrustTitle}`}>
            Compare Your Treatment Options
          </h1>
          <CompareCard data={CompareGae} />
        </div>
      </section>
      <section className="position-relative">
        <div className="container pt-5 pb-5">
          <Table data={TableGae} />
        </div>
      </section>
      <section style={{ backgroundColor: "#F5F8FD" }}>
        <div className={`container pt-5 pb-5 ${styles.WhyTrust}`}>
          <h1 className={`h1 text-center ${styles.WhyChooseTitle}`}>
            Why Trust Medagg Healthcare?
          </h1>
          <WhyTrust data={whyTrust} />
          <ScrollButton />
        </div>
      </section>
      <section
        className="position-relative pt-5 pb-5"
        style={{ position: "relative" }}
      >
        <Footer />
      </section>
      <section style={{ backgroundColor: "#F5F8FD" }}>
        <div className="container pt-5 pb-5">
          <h1 className={`h1 text-center ${styles.WhyChooseTitle}`}>
            Frequently Asked Qestions?
          </h1>
          <FAQAccordion data={faqData} />
        </div>
      </section>
      <section style={{ backgroundColor: "#343d59" }}>
        <CopyRight />
      </section>
    </div>
  );
};
