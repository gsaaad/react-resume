import React from "react";
import "./index.css";
import { InlineWidget } from "react-calendly";

function Calendly() {
  return (
    <div className="calendly-container">
      <h1 className="calendly-title border-b-4 border-yellow-400 m-4">
        Let's Chat!
      </h1>

      <InlineWidget
        url="https://calendly.com/saad-george"
        pageSettings={{
          backgroundColor: "15eaca",
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
          primaryColor: "00a2ff",
          textColor: "4d5055",
        }}
      />
    </div>
  );
}

export default Calendly;
