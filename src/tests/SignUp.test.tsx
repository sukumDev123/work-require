import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import SignUp from "../components/auth/SignUp";

test("check when button is clicked but username and password are not empty. show message login success", () => {
  const unit = render(<SignUp></SignUp>);
  const username = unit.getByLabelText("username-label");
  const password = unit.getByLabelText("password-label");
  fireEvent.change(username, { target: { value: "sukhum123" } });
  fireEvent.change(password, { target: { value: "password123" } });
  fireEvent.click(screen.getByText(/Create User/i));
  expect(unit.getByText(/Login Success/i)).toBeInTheDocument();
});
