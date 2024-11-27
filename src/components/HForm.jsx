import React, { useState } from "react";
import axios from "axios";
import Styles from "../components/HForm.module.css"

export const HForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name.trim() === "" || phone.trim() === "") {
      alert("Please fill out both the Name and Phone Number fields.");
      return;
    }

    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    const data = { 
      name, 
      phone, 
      sourceUrl: window.location.href // Capture the current page URL
    };

    try {
      setLoading(true);
      const response = await axios.post("http://server.medagghealthcare.com/api/telecrm", data);
      alert(response.data.message || "Data submitted successfully!");
    } catch (error) {
      console.error("Error:", error.message);
      alert("There was an error submitting your data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form className={`row gap-4 p-5 p-sm-5 p-md-0 p-lg-0 p-xl-0 p-xxl-0 ${Styles.Form}`} onSubmit={handleSubmit}>
        <div className={`col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-4 p-0 ${Styles.FormGroup}`}>
          <input
            type="text"
            className={`rounded-5 p-3 ps-4 ${Styles.Input}`}
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className={`col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-4 p-0 ${Styles.FormGroup}`}>
          <input
            type="tel"
            className={`rounded-5 p-3 ps-4 ${Styles.Input}`}
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className={`col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-2 rounded-5 p-3 ps-4 ${Styles.ContactButton}`}
          disabled={loading}
        >
          {loading ? "Submitting..." : "Contact us"}
        </button>
      </form>
    </div>
  );
};
