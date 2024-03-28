import { Link, useLoaderData } from "react-router-dom";
import OpacityOutlinedIcon from "@mui/icons-material/OpacityOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";

const LeftSidebar = () => {
  const data = useLoaderData();
  return (
    <div className=" h-full w-full flex flex-col  items-center border-r-2 border-grey-400">
      <div className=" flex items-center h-1/6 w-full justify-center">
        <h1 className=" text-3xl font-semibold capitalize">
         {data.bloodBank.name}
        </h1>
      </div>

      <div className=" flex flex-col text-xl capitalize text-center font-semibold w-full items-center h-5/6 gap-5 mt-10">
        <Link
          to="/blood-bank/dashboard"
          className="hover:bg-slate-100 hover:text-black w-full p-1 py-3 flex items-center justify-center gap-2  "
        >
          <PeopleAltOutlinedIcon />
          donors
        </Link>

        <Link
          to="/blood-bank/dashboard/inventory"
          className="hover:bg-slate-100 hover:text-black w-full p-1 py-3  flex items-center justify-center gap-2"
        >
          <OpacityOutlinedIcon />
          inventory
        </Link>

        <Link
          to="/blood-bank/dashboard/add-donor"
          className="hover:bg-slate-100 hover:text-black w-full p-1 py-3  flex items-center justify-center gap-2"
        >
          <PersonAddAltOutlinedIcon />
          add donor
        </Link>
      </div>
    </div>
  );
};

export default LeftSidebar;
