import React from "react";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const Donations = () => {
  const donations = [
    { hospitalName: "Hospital A", totalUnits: 10, time: "10:00 AM" },
    { hospitalName: "Hospital B", totalUnits: 15, time: "11:30 AM" },
    { hospitalName: "Hospital C", totalUnits: 8, time: "12:45 PM" },
  ];
  return (
    <div>
      <h1 className="text-4xl font-bold text-center">My Donations</h1>

      <div>
        <ul className="divide-y divide-gray-200">
          {donations.map((donation, index) => (
            <li key={index}>
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
                  <div className="text-4xl font-bold text-slate-600">
                    {donation.totalUnits}
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
