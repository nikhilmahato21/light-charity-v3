import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./pages/Register";
import BankRegister from "./BanksPages/bankRegister";
import BankLogin from "./BanksPages/bankLogin";
import Login from "./pages/Login";
import {
  BBRegisterAction,
  BBLoginAction,
  DonorLoginAction,
  DonorRegisterAction,
  DonorRegisterVerificationAction,
  addDonorAction,
} from "./utils/actions";
import Landing from "./pages/Landing";
import DonorDashbord from "./pages/DonorDashbord";
import { BBDashboardLoader, DonordashboardLoader } from "./utils/loaders";
import Error from "./pages/Error";
import { HomeLayout } from "./pages/HomeLayout";
import RegisterVerify from "./pages/RegisterVerify";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import BloodBankDashboard from "./BanksPages/BloodBankDashboard";

import Inventory from "./BanksPages/Inventory";
import Donors from "./BanksPages/Donors";
import AddDonor from "./BanksPages/AddDonor";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },

      {
        path: "blood-bank/register",
        element: <BankRegister />,
        action: BBRegisterAction,
      },

      {
        path: "blood-bank/login",
        element: <BankLogin />,
        action: BBLoginAction,
      },

      {
        path: "blood-bank/dashboard",
        element: <BloodBankDashboard />,
        loader: BBDashboardLoader,
        
        children: [
          {
            index: true,
            element: <Donors />,
            loader: BBDashboardLoader,
          
          },
          {
            path: "inventory",
            element: <Inventory />,
          },

          {
            path: "add-donor",
            element: <AddDonor />,
            action: addDonorAction,
          },
        ],
      },

      {
        path: "donor/register",
        element: <Register />,
        action: DonorRegisterAction,
      },

      {
        path: "donor/login",
        element: <Login />,
        action: DonorLoginAction,
      },

      {
        path: "donor/register/verification",
        element: <RegisterVerify />,
        action: DonorRegisterVerificationAction,
      },

      {
        path: "donor/dashboard",
        element: <DonorDashbord />,
        loader: DonordashboardLoader,
        children: [
          {
            index: true,
            element: <Home />,
          },

          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
