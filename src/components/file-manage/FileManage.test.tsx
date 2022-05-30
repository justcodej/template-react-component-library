import React from "react";
import { render } from "@testing-library/react";
import KpFileMange from "./file-manage";

describe("KpButton", () => {
  test("renders the KpButton component", () => {
    render(<KpFileMange>Hello world!</KpFileMange>);
  });
});