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
    // if there's no errors and there's input of something, send form
    var userName = e.target[0].value;
    var userEmail = e.target[1].value;
    var userMessage = e.target[2].value;

    if (!errorMessage && userName && userEmail && userMessage) {
      console.log("Submit Form", formState);
    } else {
      setErrorMessage(
        "Invalid Name, Email or Message.. Please check again before you re-submit"
      );
    }
  }
  return (
    <section className="contact-container border-b-4 border-rose-900 ">
      <h1 className="contact-title border-b-4 border-emerald-900 m-4">
        Contact me
      </h1>
      <form
        id="contact-form"
        onSubmit={handleSubmitForm}
        className="contact-form mx-8"
      >
        <div>
          <label htmlFor="name" className="contact-labels">
            Name:
          </label>
          <input
            name="name"
            type="text"
            defaultValue={name}
            onBlur={handleChangeInForm}
          ></input>
        </div>
        <div>
          <label htmlFor="email" className="contact-labels">
            Email:
          </label>
          <input
            name="email"
            type="email"
            defaultValue={email}
            onBlur={handleChangeInForm}
          ></input>
        </div>
        <div>
          <label htmlFor="message" className="contact-labels">
            Message:
          </label>
          <textarea
            name="message"
            placeholder="Send me a message!"
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

        <button
          data-testid="button"
          type="submit"
          className="contact-button mx-auto bg-emerald-700 my-8"
        >
          Submit
        </button>
      </form>
    </section>
  );
}

export default ContactMeForm;
