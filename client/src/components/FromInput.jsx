/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { RiEyeCloseLine } from "react-icons/ri";
import { IoEyeOutline } from "react-icons/io5";
const FormInput = ({
  label,
  name,
  type,
  defaultValue,
  size,
  maxLength,
  required,
  textAlt,
}) => {
  const location = useLocation();
  const isLoginOrRegister =
    location.pathname.endsWith("login") ||
    location.pathname.endsWith("register");

  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className="form-control relative">
      <label className="label">
        <span
          className={`label-text font-semibold capitalize ${
            isLoginOrRegister ? "text-white" : ""
          }`}
        >
          {label}
        </span>
        {textAlt && (
          <span className="label-alt-text ">
            <Link
              to={`${textAlt}`}
              className=" link link-hover link-primary capitalize hover:no-underline hover:link"
            >
              forgot password ?
            </Link>
          </span>
        )}
      </label>
      <input
        type={isPasswordVisible ? "text" : type}
        name={name}
        maxLength={maxLength}
        required={required}
        className={`input input-bordered ${size}`}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={isFocused ? "" : defaultValue}
      />
      {type === "password" && (
        <span
          className="absolute right-3 top-14 cursor-pointer text-black"
          onClick={togglePasswordVisibility}
        >
          {isPasswordVisible ? <RiEyeCloseLine /> : <IoEyeOutline />}
        </span>
      )}
    </div>
  );
};

export default FormInput;
