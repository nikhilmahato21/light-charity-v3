import React from "react";
import { useLoaderData } from "react-router-dom";

const Donations = () => {
  const data = useLoaderData();

  if (data.donor.donatedAt.length === 0) {
    return (
      <div className=" flex  items-center justify-center w-full h-full">
        
          <h1 className="text-3xl font-bold text-center">
            {" "}
            No Donations yet{" "}
            <i className="fa-solid fa-droplet text-red-400"></i>
          </h1>
        
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-4">
        My Donations <i className="fa-solid fa-droplet text-red-400"></i>
      </h1>

      <div>
        <ul className="">
          {data.donor.donatedAt.map((donation, index) => (
            <li
              key={index}
              className="border-2 border-red-200 rounded-md my-2 "
            >
              <div className="px-4 py-4 sm:px-6 flex justify-between items-center">
                {/* Left Section - Hospital Name and Time */}
                <div>
                  <div className="text-lg font-bold text-indigo-600">
                    {donation.bloodbank}
                  </div>
                  <div className="text-sm text-gray-500">{donation.date}</div>
                </div>
                {/* Right Section - Total Units and Blood Drop Icon */}
                <div className="flex items-center">
                  <div className="text-4xl font-bold flex flex-col items-center justify-center p-1   text-red-600 ">
                    {donation.donated}
                    <span className="text-sm font-mono font-light">unit</span>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Donations;
