import React, { useState } from "react";

function ContactMeForm() {
  const [errorMessage, setErrorMessage] = useState("");
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  return (
    <section>
      <h1>Contact me</h1>
      <form>
        <div>Name:</div>
        <div>Email:</div>
        <div>Message:</div>
      </form>
    </section>
  );
}

export default ContactMeForm;
