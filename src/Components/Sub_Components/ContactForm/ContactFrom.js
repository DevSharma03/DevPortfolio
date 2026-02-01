import React, { useState } from "react";
// Import MagicButton and an icon for it
import MagicButton from '../../Sub_Components/MagicButton/MagicButton.js';
import { FaLocationArrow } from "react-icons/fa6";

import "./ContactForm.css"; 

const ContactForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
        e.preventDefault();
    
        const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLScAORAYUguGH6wFlV52-Qndg3lHxH_YFsdHHIPlP6KiHNcWQg/formResponse";
        
        const formDataToSubmit = new FormData();
        formDataToSubmit.append('entry.1796866374', formData.name); 
        formDataToSubmit.append('entry.2042212280', formData.email); 
        formDataToSubmit.append('entry.872394638', formData.subject); 
        formDataToSubmit.append('entry.1275965416', formData.message); 

        try {
            await fetch(googleFormUrl, {
                method: "POST",
                mode: "no-cors", // Required to avoid CORS error
                body: formDataToSubmit
            });
    
            alert("Form submitted successfully!");
            setFormData({ name: "", email: "", subject: "", message: "" });
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Failed to submit the form.");
        }
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>
          &times;
        </button>
        <h2 className="form-title">CONNECT WITH ME</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject:</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          
          {/* Replaced the old button with the MagicButton component */}
          <MagicButton
            title="Send Message"
            icon={<FaLocationArrow />}
            position="right"
          />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;