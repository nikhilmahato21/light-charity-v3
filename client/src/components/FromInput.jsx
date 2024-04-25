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
  placeholder,
}) => {
  const location = useLocation();
  const isLoginOrRegister =
    location.pathname.endsWith("login") ||
    location.pathname.endsWith("register");

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="form-control relative">
      <label className="label ">
        <span
          className={`label-text font-semibold capitalize tracking-widest  ${
            isLoginOrRegister ? "text-white" : ""
          }`}
        >
          {label}
        </span>
        {textAlt && (
          <Link to={`${textAlt}`}>
            <span className="label-alt-text link no-underline text-white font-mono capitalize hover:no-underline hover:text-stone-400 ">
              forgot password ?
            </span>
          </Link>
        )}
      </label>
      <input
        type={isPasswordVisible ? "text" : type}
        name={name}
        maxLength={maxLength}
        required={required}
        className={`input input-bordered ${size}`}
        placeholder={placeholder}
        defaultValue={defaultValue}
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
