import React from "react";
import Styles from "../pages/PAE.module.css";
import PopUpBanner from "../components/PopUpBanner";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { CopyRight } from "../components/CopyRight";
import { WhyTrust } from "../components/WhyTrust";
import { Footer } from "../components/Footer";
import { CompareCard } from "../components/CompareCard.jsx";
import FAQAccordion from "../components/FAQAccordion.jsx";
import { Table } from "../components/Table.jsx";
import ScrollButton from "../components/ScrollButton";
import { BenifitsCard } from "../components/BenifitsCard.jsx";
import { WhyChoose } from "../components/WhyChoose.jsx";

// json
import whyTrustdata from "../json/WhyTrust.js";
import PaeFAQ from "../json/PAEFAQ.js";
import PaeCompareData from "../json/PAECompare.js";
import PaeTableData from "../json/PAETable.js";
import PaeBenifitsData from "../json/PAEBenifits.js";
import PaeWhychooseData from "../json/PAEWhyChoose.js";
import PaeHowDoesData from "../json/PAEHowDoes.js";
import { HowDoes } from "../components/HowDoes.jsx";

export const PAE = () => {
  return (
    <div className={`${Styles.GAE}`}>
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
          <h1 className={`h1 text-center ${Styles.WhyChooseTitle}`}>
            Why Choose Prostate Artery Embolization (PAE)?
          </h1>
          <WhyChoose data={PaeWhychooseData} />
        </div>
      </section>
      <section style={{ backgroundColor: "#F5F8FD" }}>
        <div className="container pt-5 pb-5">
          <h1 className={`h1 text-center ${Styles.HowDoesTitle}`}>
            How Does Prostate Artery Embolization Work?
          </h1>
          <HowDoes data={PaeHowDoesData}/>
        </div>
      </section>
      <section>
        <div className="container pt-5 pb-5">
          <h1 className={`h1 text-center ${Styles.BenifitsTitle}`}>
            Benefits of Choosing PAE for Enlarged Prostate Treatment
          </h1>
          <BenifitsCard data={PaeBenifitsData} />
          <ScrollButton />
        </div>
      </section>
      <section style={{ backgroundColor: "#F5F8FD" }}>
        <div className="container pt-5 pb-5">
          <h1 className={`h1 text-center ${Styles.WhyTrustTitle}`}>
            Compare Your Treatment Options
          </h1>
          <CompareCard data={PaeCompareData} />
        </div>
      </section>
      <section className="position-relative">
        <div className="container pt-5 pb-5">
          <Table data={PaeTableData} />
        </div>
      </section>
      <section style={{ backgroundColor: "#F5F8FD" }}>
        <div className={`container pt-5 pb-5 ${Styles.WhyTrust}`}>
          <h1 className={`h1 text-center ${Styles.WhyChooseTitle}`}>
            Why Trust Medagg Healthcare?
          </h1>
          <WhyTrust data={whyTrustdata} />
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
          <h1 className={`h1 text-center ${Styles.WhyChooseTitle}`}>
            Frequently Asked Qestions?
          </h1>
          <FAQAccordion data={PaeFAQ} />
        </div>
      </section>
      <section style={{ backgroundColor: "#343d59" }}>
        <CopyRight />
      </section>
    </div>
  );
};
