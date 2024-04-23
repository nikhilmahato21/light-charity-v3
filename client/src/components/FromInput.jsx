/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";
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

  return (
    <div className="form-control">
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
        type={type}
        name={name}
        defaultValue={defaultValue}
        maxLength={maxLength}
        required={required}
        className={`input input-bordered ${size}`}
      />
    </div>
  );
};

export default FormInput;
