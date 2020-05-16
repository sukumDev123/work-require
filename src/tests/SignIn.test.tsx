import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import SignIn from "../components/auth/SignIn";

test("renders username", () => {
  const { getByText } = render(<SignIn />);
  const linkElement = getByText(/Username/i);
  expect(linkElement).toBeInTheDocument();
});

test("check when button is clicked but username and password are empty. show message", () => {
  render(<SignIn></SignIn>);
  fireEvent.click(screen.getByText(/Login/i));
  expect(screen.getByText("Some of fileds are empty.")).toBeInTheDocument();
});
test("check when button is clicked but username and password are not empty. show message login success", () => {
  const unit = render(<SignIn></SignIn>);
  const username = unit.getByLabelText("username-label");
  const password = unit.getByLabelText("password-label");
  fireEvent.change(username, { target: { value: "sukhum123" } });
  fireEvent.change(password, { target: { value: "password123" } });
  fireEvent.click(screen.getByText(/Login/i));
  expect(unit.getByText(/Login Success/i)).toBeInTheDocument();
});
