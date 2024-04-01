/* eslint-disable no-unused-vars */
import { redirect } from "react-router-dom";
import { customFetchBloodbank, customFetchDonor } from "./helper";
import toast from "react-hot-toast";

export const DonorRegisterAction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const response = await customFetchDonor.post("/auth/register", data);
    toast.success("A verification code has been sended to your email");
    return redirect("/donor/register/verification");
  } catch (error) {
    const errorMessage =
      error?.response?.data?.msg || "something went wrong ! try again later";
    toast.error(errorMessage);
    return null;
  }
};

export const DonorRegisterVerificationAction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const response = await customFetchDonor.post("/auth/register/verify", data);
    toast.success("Registerd Successfully");
    return redirect("/donor/dashboard");
  } catch (error) {
    const errorMessage = error?.response?.data?.msg || "Otp is incorrect";
    toast.error(errorMessage);
    return null;
  }
};

export const DonorLoginAction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetchDonor.post("/auth/login", data);
    toast.success("Logged in successful");
    return redirect("/donor/dashboard");
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

// blood bank actions

export const BBRegisterAction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  try {
    const response = await customFetchBloodbank.post("/auth/register", data);
    toast.success("registers successfully");
    return redirect("/blood-bank/login");
  } catch (error) {
    const errorMessage =
      error?.response?.data?.error?.message ||
      "an account is already existed by this email";
    toast.error(errorMessage);
    return null;
  }
};

export const BBLoginAction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetchBloodbank.post("/auth/login", data);
    toast.success("Logged in successful");
    return redirect("/blood-bank/dashboard");
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

export const BBLogoutAction = async () => {
  try {
    await customFetchBloodbank.get("/auth/logout");
    toast.success("Logged out!");
    return redirect("/blood-bank/login");
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

export const addDonorAction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetchBloodbank.post("/update/create-donor", data);
    toast.success("Donor Added successful");
    return redirect("/blood-bank/dashboard/add-donor");
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.msg);
    return error;
  }
};
