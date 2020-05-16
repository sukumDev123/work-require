import React, { useState } from "react";
import Input from "../Input";
import Button from "../Button";

function SignUp() {
  const [displayName, setDisplayName] = useState<
    { firstname: string; lastname: string }
  >({ firstname: "", lastname: "" });
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<
    { password: string; cfPassword: string }
  >({ password: "", cfPassword: "" });

  const [message, setMessage] = useState<string>("");
  const createUser = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO SIGNIN
    setMessage("Clicked");
  };
  return <div className="signin">
    <h3>Sign Up</h3>
    <h5>{message}</h5>
    <form onSubmit={createUser}>
      <div className="md-form">
        <div className="md-2d">
          <Input
            value={displayName.firstname}
            onChangeFunc={(event) => {
              event.preventDefault();
              const { value } = event.target;
              setDisplayName({ ...displayName, firstname: value });
            }}
            labelInput={"firstname-label"}
            placeholder="firstname"
            label={"Firstname"}
          />
          <Input
            value={displayName.lastname}
            onChangeFunc={(event) => {
              event.preventDefault();
              const { value } = event.target;
              setDisplayName({ ...displayName, lastname: value });
            }}
            labelInput={"lastname-label"}
            placeholder="lastname"
            label={"Lastname"}
          />
        </div>
      </div>
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
      <div className="md-form">
        <div className="md-2d">
          <Input
            value={password.password}
            onChangeFunc={(event) => {
              event.preventDefault();
              const { value } = event.target;
              setPassword({ ...password, password: value });
            }}
            labelInput={"password-label"}
            placeholder="password"
            label={"Password"}
          />
          <Input
            value={password.cfPassword}
            onChangeFunc={(event) => {
              event.preventDefault();
              const { value } = event.target;
              setPassword({ ...password, cfPassword: value });
            }}
            labelInput={"confirm-password-label"}
            placeholder="confirm-password"
            label={"Confirm Password"}
          />
        </div>
      </div>
      <Button type={"submit"} className={"btn btn-block"}>Create User</Button>
    </form>
  </div>;
}
export default SignUp;
