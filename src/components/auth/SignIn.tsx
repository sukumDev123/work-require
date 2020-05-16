import React, { useState } from "react";
import Input from "../Input";
import Button from "../Button";

function SignIn() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const login = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const loginFunc = () => {
      // TODO Login
      setMessage("Login Success");
    };
    (username && password)
      ? loginFunc()
      : setMessage("Some of fileds are empty.");
  };
  return <div className="signin">
    <h2 className="text-center mb-2">Sign in</h2>
    <h5>{message}</h5>
    <form onSubmit={login}>
      <Input
        value={username}
        onChangeFunc={(event) => {
          event.preventDefault();
          const { value } = event.target;
          setUsername(value);
        }}
        placeholder="username"
        label={"Username"}
        labelInput={"username-label"}
      />
      <Input
        value={password}
        onChangeFunc={(event) => {
          event.preventDefault();
          const { value } = event.target;
          setPassword(value);
        }}
        labelInput={"password-label"}
        placeholder="password"
        label={"Password"}
      />
      <Button type={"submit"} className={"btn btn-block"}>Login</Button>
    </form>
  </div>;
}
export default SignIn;
