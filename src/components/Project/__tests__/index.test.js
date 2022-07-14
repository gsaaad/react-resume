import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Project from "..";

// go through each test and after, clean up and dispose of anything we aren't using
afterEach(cleanup);

describe("Project component", () => {
  // render Project test

  // first test
  it("renders", () => {
    render(<Project />);
  });
});

describe("Matches snapshot DOM node structure", () => {
  // use asFragment to return snapshot of DOM

  const { asFragment } = render(<Project />);
  expect(asFragment()).toMatchSnapshot();
});
