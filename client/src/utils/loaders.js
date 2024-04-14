import { redirect } from "react-router-dom";
import { customFetchBloodbank, customFetchDonor } from "./helper";




// donors loaders

export const DonordashboardLoader = async () => {
  try {
    const { data } = await customFetchDonor.get("/donor/current-donor");
    console.log(data);
    return data;
  } catch (error) {
    return redirect("/donor/login");
  }
};





// blood banks donor

export const BBDashboardLoader = async () => {
  try {
    const { data } = await customFetchBloodbank.get("/update/blood-bank");
    return data;
   
  } catch (error) {
    return redirect("/blood-bank/login");
  }
};

export const BBDonorsLoader = async () => {
  try {
    const { data } = await customFetchBloodbank.get("/update/donors");
    return data;
  } catch (error) {
    return redirect("/blood-bank/login");
  }
};
