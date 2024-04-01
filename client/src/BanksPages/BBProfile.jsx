import React from "react";
import { Form, useLoaderData } from "react-router-dom";
import FormInput from "../components/FromInput";
import SubmitBtn from "../components/SubmitBtn";

const BBProfile = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className=" w-full h-full flex items-center justify-center ">
      <div className="bg-transparent p-8  w-full sm:max-w-5xl">
        <h2 className="text-3xl text-center  font-bold mb-6">Edit Profile</h2>
        <Form method="post">
          <div className=" sm:grid-cols-2 grid gap-4  ">
            {/* Username Input */}
            <FormInput
              type="text"
              color="black"
              label="name"
              name="name"
              required
              defaultValue={data.bloodBank.name}
            />

            {/* Email Input */}
            <FormInput
              type="email"
              label="email"
              name="email"
              required
              defaultValue={data.bloodBank.email}
            />
          </div>
          <FormInput
            type="text"
            label="address"
            name="address"
            size="w-full"
            required
            defaultValue={data.bloodBank.address}
          />

          <div className="mt-6">
            <SubmitBtn text="Update" />
          </div>
        </Form>
      </div>
    </div>
  );
};

export default BBProfile;
