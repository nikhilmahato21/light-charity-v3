import React from "react";
import { FiEdit } from "react-icons/fi";

const ProfileCard = () => {
  return (
    <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="flex items-center p-4">
        <img
          className="w-20 h-20 rounded-full"
          src="https://via.placeholder.com/150"
          alt="Profile"
        />
        <div className="ml-4 ">
          <h2 className="text-xl font-semibold">
            John Doe <span>(A+)</span>
          </h2>
          <p className="text-gray-600 mt-1">jd@gmail.com</p>
          <p className="text-gray-600 mt-1">78******78</p>
          <p className="text-gray-600 mt-1">canada</p>
        </div>

        <div
          className="ml-auto"
          onClick={() => document.getElementById("my_modal_4").showModal()}
        >
          <button className="text-gray-500 hover:text-gray-700">
            <FiEdit />
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default ProfileCard;
