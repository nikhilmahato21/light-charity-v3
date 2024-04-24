import React from "react";
import SubmitBtn from "../components/SubmitBtn";
import FormInput from "../components/FromInput";
import { Form } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="h-screen w-full place-content-center">
      <Form method="post" className="bg-transparent  flex flex-col  ">
        <h4 className="text-center text-black text-3xl font-bold">
          Forgot Password
        </h4>
        <div className="w-80 sm:w-96 mx-auto flex flex-col gap-3 p-2">
          <FormInput
            type="email"
            name="email"
            defaultValue="Enter your Email"
          />

          <SubmitBtn text="Get OTP" />
        </div>
      </Form>
    </div>
  );
};

export default ForgotPassword;
