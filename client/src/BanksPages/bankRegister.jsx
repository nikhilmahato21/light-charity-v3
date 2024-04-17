import { Form, Link, useNavigation } from "react-router-dom";
import FormInput from "../components/FromInput";
import SubmitBtn from "../components/SubmitBtn";
import { useState } from "react";

import GooglePlaceSearch from "../components/GooglePlaceSearch";
import AutoComplete from "../BanksComponents/AutoComplete";

const BankRegister = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const [location, setLocation] = useState(null);

  const handleLocationChange = (newLocation) => {
    setLocation(newLocation);
    console.log(location);
  };
  return (
    <div
      className="hero min-h-screen "
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-vector/global-volunteer-solidarity-hands-up-banner-with-earth-map-vector_1017-48268.jpg?w=1380&t=st=1703825061~exp=1703825661~hmac=5cadf3587d2a167eb26300cf98afdff9cac86d79a8d3704076c27346bea6ec4a)",
      }}
    >
      <div className="hero-overlay bg-opacity-80"></div>
      <div className="bg-transparent p-8  w-full sm:max-w-lg">
        <h2 className="text-3xl text-center text-white font-bold mb-6">
          Register
        </h2>
        <Form method="post">
          <div className=" sm:grid-cols-1 grid gap-4">
            {/* Username Input */}

            <FormInput type="text" label="name" name="name" />
            {/* Email Input */}

            <FormInput type="email" label="email" name="email" required />

            <FormInput type="password" label="password" name="password" />

            <AutoComplete setLocation={handleLocationChange} />
            <FormInput type="hidden" name="address" defaultValue={location?.address} />
            <FormInput
              type="hidden"
              name="location"
              defaultValue={JSON.stringify(location?.latLng)}
            />
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="btn btn-primary btn-block"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="loading loading-infinity loading-lg"></span>
                </>
              ) : (
                "Register" || "submit"
              )}
            </button>
          </div>

          <p className="text-center mt-4 text-white">
            Already a member
            <Link
              to="/blood-bank/login"
              className="ml-2 link link-hover link-primary capitalize"
            >
              login
            </Link>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default BankRegister;
