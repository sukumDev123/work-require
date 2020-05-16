import React from "react";
import "../styles/Input.css";
interface InputInterface {
  placeholder: string;
  value?: string;
  onChangeFunc?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  labelInput: string;
}

const Input: React.FC<InputInterface> = (
  {
    placeholder,
    value,
    onChangeFunc,
    label,
    labelInput,
  }: InputInterface,
) => (
  <div className="md-form">
    <label htmlFor={label}>{label}</label>
    <input
      type="text"
      aria-label={labelInput}
      placeholder={placeholder}
      value={value}
      onChange={(event) => onChangeFunc ? onChangeFunc(event) : ""}
      className="form-control"
    />
  </div>
);

export default Input;
