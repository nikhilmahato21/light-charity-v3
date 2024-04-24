import React, { useState } from "react";
import { UpdatePasswordAction } from "../utils/actions";
import { Form } from "react-router-dom";

const UpdatePassword = () => {
  return (
    <Form method="post">
      <div>
        <label className="block mb-2">Password</label>
        <input
          type="password"
          name="password"
          className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4"
        />
      </div>

     

      <button
        type="submit"
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Submit
      </button>
    </Form>
  );
};

export default UpdatePassword;
