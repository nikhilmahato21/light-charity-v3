import React from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Link, useLoaderData } from "react-router-dom";
const NearByHospitals = () => {
  const hospitals = [
    {
      name: "Patna Aiims Hospital",
      address: "NH 119, Patna, Bihar, India",
      distance: 5.2,
    },
    {
      name: "Max Super Specialty Hospital",
      address: "Bypass Road, Patna, Bihar, India",
      distance: 3.8,
    },
    {
      name: "Ruban Bansal Hospital",
      address: "Bailey Road, Patna, Bihar, India",
      distance: 2.1,
    },
    {
      name: "Patna Aiims Hospital",
      address: "NH 119, Patna, Bihar, India",
      distance: 5.2,
    },
    {
      name: "Max Super Specialty Hospital",
      address: "Bypass Road, Patna, Bihar, India",
      distance: 3.8,
    },
    // Add more hospitals as needed
  ];
  return (
    <div className="mt-3 p-3 grid grid-cols-1  lg:grid-cols-2 gap-8 items-center  border-2 border-rose-200 rounded-box">
      <div className=" h-80     sm:p-4 space-x-4 rounded-box   overflow-y-auto overflow-scroll  no-scrollbar">
        <ul className="">
          {hospitals?.map((hospital, index) => (
            <li
              key={index}
              className="border-2 border-stone-400 rounded-md my-2 "
            >
              <div className="px-4 py-4 sm:px-6 flex justify-between items-center">
                {/* Left Section - Hospital Name and Time */}
                <div>
                  <div className="text-lg font-bold text-slate-600">
                    {hospital.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {hospital.address}
                  </div>
                </div>
                {/* Right Section - Total Units and Blood Drop Icon */}
                <div className="flex items-center justify-center">
                  <div className="text-xl font-bold flex flex-col items-center justify-center p-1    ">
                    {hospital.distance}
                    <span className="text-sm font-mono font-light">km</span>
                  </div>
                  <LocationOnOutlinedIcon />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight  sm:text-5xl ">
          Lorem Ipsum magna aliqua
        </h1>

        <p className="mt-2 max-w-xl text-lg leading-8">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua. Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
          qui lorem cupidatat commodo.
        </p>
      </div>
    </div>
  );
};

export default NearByHospitals;
