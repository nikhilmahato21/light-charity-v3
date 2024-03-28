import { Form, Link } from "react-router-dom";
import SubmitBtn from "../components/SubmitBtn";
import FormInput from "../components/FromInput";

const AddDonor = () => {
  return (
    <div className=" w-full h-full flex items-center justify-center ">
      <div className="bg-transparent p-8  w-full sm:max-w-5xl">
        <h2 className="text-3xl text-center  font-bold mb-6">Add Donor</h2>
        <Form method="post">
          <div className=" sm:grid-cols-2 grid gap-4  ">
            {/* Username Input */}

            <FormInput type="text" color="black" label="name" name="name" />
            {/* Email Input */}

            <FormInput type="email" label="email" name="email" required />

            <FormInput type="date" label="dob" name="dob" required />
            <FormInput type="number" label="donated" name="donated" required />
            <FormInput type="number" label="number" name="number" required />

            <div className="form-control font-semibold">
              <label htmlFor="bloodGroup" className="label ">
                Blood Group
              </label>
              <select
                id="bloodGroup"
                name="bloodGroup"
                className={`input input-bordered `}
              >
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>
          </div>
          <FormInput type="text" label="address" name="address" size="w-full" />
          <div className="mt-6">
            <SubmitBtn text="Add Donor" />
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AddDonor;
