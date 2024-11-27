import React, { useState } from "react";
import axios from "axios";
import Styles from "../components/FForm.module.css";

export const FForm = () => {
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
      <form className={`row p-5 gap-4 ${Styles.Form}`} onSubmit={handleSubmit}>
        <div className={`col-12 p-0 ${Styles.FormGroup}`}>
          <input
            name="Name"
            type="text"
            className={`p-3 ps-4 rounded-5 ${Styles.Input}`}
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className={`col-12 p-0 ${Styles.FormGroup}`}>
          <input
            name="Phone"
            type="tel"
            className={`p-3 ps-4 rounded-5 ${Styles.Input}`}
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className={`col-12 p-3 rounded-5 ${Styles.ContactButton}`}
          disabled={loading}
        >
          {loading ? "Submitting..." : "Book an appointment"}
        </button>
      </form>
    </div>
  );
};
