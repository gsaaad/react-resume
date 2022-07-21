import React, { useState } from "react";
import "./index.css";
import validateEmail from "../../utils/validateEmail";
import errorIcon from "../../assets/img/circle-exclamation-solid.svg";

function ContactMeForm() {
  const [errorMessage, setErrorMessage] = useState("");
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formState;

  //   handleChangeInForm to get values from user input

  function handleChangeInForm(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);

      //   if its not valid
      if (!isValid) {
        setErrorMessage(
          "Email is invalid.. Please enter a valid email address"
        );
        // if valid, no error message
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required`);
      } else {
        setErrorMessage("");
      }
    }
    // if there's no errors while taking input, everything is valid, then setFormState
    // use the spread operator ...formState,
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log("handle Form", formState);
    }
  }
  function handleSubmitForm(e) {
    e.preventDefault();
    // if there's no errors, send form
    if (!errorMessage) {
      console.log("Submit Form", formState);
    }
  }
  return (
    <section>
      <h1 className="Contact-title">Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmitForm}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            name="name"
            type="text"
            defaultValue={name}
            onBlur={handleChangeInForm}
          ></input>
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            name="email"
            type="email"
            defaultValue={email}
            onBlur={handleChangeInForm}
          ></input>
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            placeholder="Send me a message of how I can help you! Will get back to you shortly."
            defaultValue={message}
            onBlur={handleChangeInForm}
          ></textarea>
        </div>
        {errorMessage && (
          <div className="errorMessage">
            <img
              src={errorIcon}
              alt="Error in form Contact"
              className="icons"
            />
            <p>{errorMessage}</p>
          </div>
        )}
        <button data-testid="button" type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </section>
  );
}

export default ContactMeForm;
