import { Form, useLoaderData } from "react-router-dom";
import SubmitBtn from "../components/SubmitBtn";
import FormInput from "../components/FromInput";
import ProfileCard from "../components/ProfileCard";

const Profile = () => {
  const data = useLoaderData();

  return (
    <div className=" w-full h-full flex-col items-center justify-center ">
      <ProfileCard />

      <dialog id="my_modal_4" className="modal">
        <div className="modal-box">
          <form method="modal">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
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
                <label htmlFor="bloodGroup" className="label label-text font-semibold capitalize tracking-widest">
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
      </dialog>
    </div>
  );
};

export default Profile;
