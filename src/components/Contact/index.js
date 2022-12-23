import React, { useState, useRef } from "react";
import "./index.css";
import emailjs from "@emailjs/browser";
import validateEmail from "../../utils/validateInput";
import { validateName } from "../../utils/validateInput";

// react notifications Store
import { Store } from "react-notifications-component";

function ContactMeForm() {
  const [errorMessage, setErrorMessage] = useState("");

  // const { name, email, message } = formState;
  const formRef = useRef();

  //   handleChangeInForm to get values from user input
  function handleChangeInForm(e) {
    if (e.target.name === "email") {
      const isValidEmail = validateEmail(e.target.value);
      console.log(isValidEmail);

      //   if its not valid
      if (!isValidEmail) {
        setErrorMessage(
          "Email is invalid.. Please enter a valid email address"
        );
        // if valid, no error message
      } else {
        setErrorMessage("");
      }
    } else if (e.target.name === "name") {
      console.log("name validation", e.target.value, typeof e.target.name);
      const isValidName = validateName(e.target.value);
      console.log("valid: ", isValidName);
      if (!isValidName) {
        Store.addNotification({
          title: "Name is Invalid",
          message:
            "Do not include numbers or symbols in your name. Only letters will be included",
          type: "danger",
          insert: "top",
          container: "top-center",
          dismiss: {
            duration: 4500,
            onScreen: true,
          },
        });
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
    // if (!errorMessage) {
    //   setFormState({ ...formState, [e.target.name]: e.target.value });
    // }
  }
  function handleSubmitForm(e) {
    e.preventDefault();
    // if there's no errors, send form
    if (!errorMessage) {
      // send form using emailjs
      // if there's no errors and there's input of something, send form
      var userName = e.target[0].value;
      var userEmail = e.target[1].value;
      var userMessage = e.target[2].value;

      console.log(userName, userEmail, userMessage);

      if (!errorMessage && userName && userEmail && userMessage) {
        // emailjs sendform!
        emailjs
          .sendForm(
            "service_952vhth",
            "template_3v5nih4",
            formRef.current,
            "user_ZphL0omOEOMciiE7xbnSV"
          )
          .then(
            function (response) {
              console.log("Successful send!", response.status, response.text);
            },
            function (error) {
              console.log("Failed to send email..Try again later", error);
            }
          );
      } else {
        setErrorMessage(
          "Invalid Name, Email or Message.. Please check again before you re-submit"
        );
      }
    }
  }
  return (
    <section className="contact-container border-b-4 border-yellow-500 ">
      <h1 className="contact-title border-b-4 border-yellow-400 m-4">
        Contact me
      </h1>
      <form
        ref={formRef}
        id="contact-form"
        onSubmit={handleSubmitForm}
        className="contact-form mx-auto md:w-4/5"
      >
        <div className="w-4/5 mx-auto">
          <label htmlFor="name" className="contact-labels">
            Name:
          </label>
          <input
            name="name"
            type="text"
            // defaultValue={name}
            onBlur={handleChangeInForm}
          ></input>
        </div>
        <div className="w-4/5 mx-auto">
          <label htmlFor="email" className="contact-labels">
            Email:
          </label>
          <input
            name="email"
            type="email"
            // defaultValue={email}
            onBlur={handleChangeInForm}
          ></input>
        </div>
        <div className="w-4/5 mx-auto">
          <label htmlFor="message" className="contact-labels">
            Message:
          </label>
          <textarea
            name="message"
            placeholder="Send me a message!"
            // defaultValue={message}
            onBlur={handleChangeInForm}
          ></textarea>
        </div>
        {/* {errorMessage &&
          Store.addNotification({
            title: "Form is not valid",
            message:
              "Do not include numbers or symbols in your name. Only letters will be included",
            type: "danger",
            insert: "top",
            container: "top-center",
            dismiss: {
              duration: 4500,
              onScreen: true,
            },
          })} */}

        <button
          data-testid="button"
          type="submit"
          className="contact-button mx-auto bg-emerald-700 my-4"
        >
          Submit
        </button>
      </form>
    </section>
  );
}

export default ContactMeForm;
