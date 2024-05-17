import React from "react";
import hero from "../assets/HeroImg.svg";
import { Link, useLoaderData } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-2 gap-24 items-center justify-center ">
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight  sm:text-5xl ">
          “Share the gift of life.”
        </h1>

        <p className="mt-8 max-w-xl text-lg font-semibold text-gray-400 leading-8 text-center p-2">
          Blood donation saves lives, as it helps needy patients undergoing
          surgeries and emergencies among people suffering from blood-related
          illness. At the same time, it helps the donor maintain a healthy level
          of iron in his or her body, just as other health benefits and
          screenings are available. Regular donors may also have a lower risk of
          getting heart disease. On top of that, donating may be good for
          psychological well-being and promote a sense of community and pride.
        </p>
        <div className="mt-8 flex items-center justify-center ">
          <Link
            to="/donor/dashboard/donations"
            className="btn m-2 btn-error text-stone-600 font-bold "
          >
            My donations
          </Link>
        </div>
      </div>
      <div className="hidden  h-[28rem]  lg:carousel   p-4 space-x-4 rounded-box">
        <img src={hero} alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
