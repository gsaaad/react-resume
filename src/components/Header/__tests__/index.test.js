import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Header from "..";

// go through each test and after, clean up and dispose of anything we aren't using
afterEach(cleanup);

describe("Header component", () => {
  // render Header test

  // first test
  it("renders", () => {
    render(<Header />);
  });
});

describe("Matches snapshot DOM node structure", () => {
  // use asFragment to return snapshot of DOM

  const { asFragment } = render(<Header />);
  expect(asFragment()).toMatchSnapshot();
});
