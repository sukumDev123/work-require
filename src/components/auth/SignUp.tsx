import React, { useState } from "react";
import Input from "../Input";
import Button from "../Button";

function SignUp() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  return <div className="signin">
    <h3>Sign in</h3>
    <h5>{message}</h5>
    <form>
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
      <Button type={"submit"} className={"btn btn-block"}>SignIn</Button>
    </form>
  </div>;
}
export default SignUp;
