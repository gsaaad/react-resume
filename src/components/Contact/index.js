import React, { useState } from "react";
import "./index.css";
function ContactMeForm() {
  const [errorMessage, setErrorMessage] = useState("");
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  return (
    <section className="Contact-form">
      <h1>Contact me</h1>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input name="name" type="text"></input>
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input name="email" type="email"></input>
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            row="5"
            placeholder="Send me a message of how I can help you! Will get back to you shortly."
          ></textarea>
        </div>
      </form>
    </section>
  );
}

export default ContactMeForm;
