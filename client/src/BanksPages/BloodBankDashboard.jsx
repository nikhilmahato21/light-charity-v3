import Navbar from "../BanksComponents/Navbar";
import { Outlet } from "react-router-dom";
import LeftSidebar from "../BanksComponents/LeftSidebar";

const BloodBankDashboard = () => {
  return (
    <div className=" h-screen w-full flex flex-col overflow-hidden">
      <div>
        <Navbar />
      </div>

      <div className=" flex w-full h-full">
        <div className=" h-full w-3/12">
          <LeftSidebar />
        </div>

        <div className=" h-full w-9/12 overflow-y-auto p-2 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default BloodBankDashboard;
