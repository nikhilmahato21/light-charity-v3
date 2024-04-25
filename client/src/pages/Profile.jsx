import { Form, useLoaderData } from "react-router-dom";
import SubmitBtn from "../components/SubmitBtn";
import FormInput from "../components/FromInput";

const Profile = () => {
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
              defaultValue={data.donor.name}
              size="font-bold"
            />

            {/* Email Input */}
            <FormInput
              type="email"
              label="email"
              name="email"
              required
              defaultValue={data.donor.email}
              size="font-bold"
            />
            <FormInput type="number" label="number" name="number" />

            <div className="form-control">
              <label htmlFor="bloodGroup" className="label text-white">
                Blood Group
              </label>
              <select
                id="bloodGroup"
                name="bloodGroup"
                className={`input input-bordered font-bold `}
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
          <FormInput
            type="text"
            label="address"
            name="address"
            size="w-full font-bold"
            required
            defaultValue={data.donor.address}
           
          />

          <div className="mt-6">
            <SubmitBtn text="Update" />
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Profile;
