import React from "react";

const Donations = () => {
  const donations = [
    { hospitalName: "Hospital A", totalUnits: 10, time: "10:00 AM" },
    { hospitalName: "Hospital B", totalUnits: 15, time: "11:30 AM" },
    { hospitalName: "Hospital C", totalUnits: 8, time: "12:45 PM" },
  ];
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-4">
        My Donations <i className="fa-solid fa-droplet text-red-400"></i>
      </h1>

      <div>
        <ul className="">
          {donations.map((donation, index) => (
            <li
              key={index}
              className="border-2 border-red-200 rounded-md my-2 "
            >
              <div className="px-4 py-4 sm:px-6 flex justify-between items-center">
                {/* Left Section - Hospital Name and Time */}
                <div>
                  <div className="text-lg font-bold text-indigo-600">
                    {donation.hospitalName}
                  </div>
                  <div className="text-sm text-gray-500">{donation.time}</div>
                </div>
                {/* Right Section - Total Units and Blood Drop Icon */}
                <div className="flex items-center">
                  <div className="text-4xl font-bold flex flex-col items-center justify-center p-1   text-red-600 ">
                    {donation.totalUnits}
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
