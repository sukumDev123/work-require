import React from "react";

interface ButtonInterface {
  className: string;
  children: string;
  onClickFunc?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
  type: "button" | "submit" | "reset" | undefined;
}

const Button: React.FC<ButtonInterface> = (
  { className, children, onClickFunc, type }: ButtonInterface,
) =>
  <div className="md-form">
    <button
      type={type || "button"}
      onClick={(event) => {
        if (onClickFunc) {
          onClickFunc(event);
        }
      }}
      className={className}
    >
      {children}
    </button>
  </div>;

export default Button;
