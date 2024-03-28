/* eslint-disable react/prop-types */
import { useLocation } from "react-router-dom";
const FormInput = ({
  label,
  name,
  type,
  defaultValue,
  size,
  maxLength,
  required,


}) => {

  const location = useLocation()
  const isLoginOrRegister = location.pathname.endsWith("login") || location.pathname.endsWith("register");

  return (
    <div className="form-control">
      <label className="label">
      <span className={`label-text font-semibold capitalize ${isLoginOrRegister ? 'text-white' : ''}`}>{label}</span>
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
