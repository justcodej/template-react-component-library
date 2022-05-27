import React from "react";
import { render } from "@testing-library/react";
import FileMange from "./FileManage";

describe("KpButton", () => {
  test("renders the KpButton component", () => {
    render(<FileMange>Hello world!</FileMange>);
  });
});