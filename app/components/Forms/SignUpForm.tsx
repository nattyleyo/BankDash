"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import UserValue from "@/types/UserValue";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import AuthService from "@/app/Services/api/authService";
import ProgressComp from "../Box/ProgressComp";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

type FormData = Omit<UserValue, "password"> & {
  password: string;
  confirmPassword: string;
};

const SignUpForm = () => {
  const offsetInMinutes = new Date().getTimezoneOffset();
  const offsetInHours = Math.floor(Math.abs(offsetInMinutes) / 60);
  const offsetMinutes = Math.abs(offsetInMinutes) % 60;
  const sign = offsetInMinutes > 0 ? "-" : "+";
  const gmtTimeZone = `GMT${sign}${String(offsetInHours).padStart(
    2,
    "0"
  )}:${String(offsetMinutes).padStart(2, "0")}`;

  const [step, setStep] = useState(1);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    trigger,
  } = useForm<FormData>();

  const confirmData = watch("password");
  const route = useRouter();

  const handleKeyPress = (event: React.KeyboardEvent<HTMLFormElement>) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent form submission on Enter
      // handleSubmit(onSubmit)(); // Manually trigger validation
    }
  };

  const onSubmit = async (data: FormData) => {
    const { confirmPassword, ...userData } = data;
    console.log("DATA", data);
    userData.profilePicture = "/assets/profile.png";
    userData.preference.timeZone = gmtTimeZone;
    userData.preference.twoFactorAuthentication = false;

    try {
      const responseData = await AuthService.register(userData);
      if (responseData.success) {
        console.log("Signup successful:", responseData.message);
        route.push("/login");
      } else {
        console.error("Signup failed:", responseData.message);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const nextStep = async () => {
    const valid = await trigger(); // Validates all fields in the current step
    if (valid) {
      setStep((prev) => prev + 1);
    } else {
      console.error("Validation failed. Fix the errors before proceeding.");
    }
  };

  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div className="flex xxs:w-[98%] xs:w-[85%] sm:w-[70%] lg:w-[55%] lg:min-w-[900px] items-center justify-center bg-white rounded-xl g-6 relative p-1">
      <div className="left xxs:hidden w-[50%] lg:flex flex-col items-center justify-stretch gap-3 bg-[#1814F3] bg-gradient-to-b from-[#1814F3] to-[#03032A] p-[36px] py-[72px] rounded-xl ">
        <h1 className="headline text-center font-semibold text-white text-[36px]">
          Welcome to Bank <span className="text-[#FFDD00]">Dash.</span>
        </h1>
        <div className="sub font-normal text-base text-white opacity-80">
          &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor &quot;
        </div>

        <div className="flex w-full gap-4 mt-6">
          <ProgressComp currentStep={step} />
          <div className="cont flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <div className="title text-white text-xl font-medium">Step-1</div>
              <div className="desc text-white opacity-80">
                Basic information
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="title text-white text-xl font-medium">Step-2</div>
              <div className="desc text-white opacity-80">
                Address information
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="title text-white text-xl font-medium">Step-3</div>
              <div className="desc text-white opacity-80">
                Personal information
              </div>
            </div>
          </div>
        </div>
        <div className="already text-gray-300 mt-9">
          Already have an account?
          <Link
            href="/login"
            className="login-btn text-white ml-1 hover:text-blue-700 hover:cursor-pointer underline"
          >
            {" "}
            Login
          </Link>
        </div>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        onKeyPress={handleKeyPress}
        className="w-[55%] flex flex-col justify-center items-center"
      >
        {step === 1 && (
          <div
            key={1}
            className="flex flex-col w-full xxs:px-4 xxs:py-3 xs:px-5 xs:py-4 sm:px-6 sm:py-6 lg:px-10 lg:py-3 gap-2"
          >
            <div className="flex gap-3 items-center w-full justify-center py-6">
              <div className="flex items-center circle p-4 pt-5 bg-blue-50 rounded-full">
                <Image
                  src="/assets/logo-blue.svg"
                  width={24}
                  height={24}
                  alt=""
                />
              </div>
              <h3 className="text-2xl font-medium text-[#3C3B8B] text-center">
                Basic information
              </h3>
            </div>
            {/* <ProgressComp /> */}
            <div className="flex gap-3 w-full">
              <div className="flex flex-col w-[48%]">
                <label className="mb-1 text-slate-500" htmlFor="userName">
                  Fullname
                </label>
                <input
                  {...register("name", { required: "* FullName is required" })}
                  placeholder="John Doe"
                  id="userName"
                  className="p-3 border-2 border-[#0d0b6f13] rounded-lg placeholder:text-slate-400 focus:outline-none focus:border-[#4640DE]  "
                  type="text"
                />
                {errors.name && (
                  <p className="text-[#1814F3]">{errors.name.message}</p>
                )}
              </div>
              <div className="flex flex-col w-[48%]">
                <label className="mb-1 text-slate-500" htmlFor="userName">
                  Username
                </label>
                <input
                  {...register("username", {
                    required: "* Username is required",
                  })}
                  placeholder="@John"
                  id="userName"
                  className="p-3 border-2 border-gray-200 rounded-lg placeholder:text-slate-400 focus:outline-none focus:border-[#4640DE]  "
                  type="text"
                />
                {errors.username && (
                  <p className="text-[#1814F3]">{errors.username.message}</p>
                )}
              </div>
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-slate-500" htmlFor="userName">
                Email
              </label>
              <input
                {...register("email", { required: "* Email is required" })}
                placeholder="example@gmail.com"
                id="userName"
                className="p-3 border-2 border-gray-200 rounded-lg placeholder:text-slate-400 focus:outline-none focus:border-[#4640DE]  "
                type="text"
              />
              {errors.email && (
                <p className="text-[#1814F3]">{errors.email.message}</p>
              )}
            </div>
            <div className="w-full password-box flex gap-1 flex-col">
              <label htmlFor="password" className="mb-1 text-slate-500">
                Password
              </label>
              <input
                type="password"
                className="password p-3 border-2 border-gray-200 rounded-lg placeholder:text-slate-400 focus:outline-none focus:border-[#4640DE] "
                placeholder="Enter password"
                {...register("password", {
                  required: "*Password is required",
                  pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/,
                    message:
                      "* Password must contain be at least one letter and one number",
                  },
                  minLength: {
                    value: 6,
                    message: "* Password must be at least 6 characters long",
                  },
                })}
              />
              <p
                className="error text-[#1814F3]"
                style={{
                  display: errors.password?.message == null ? "none" : "flex",
                }}
              >
                {errors.password?.message}
              </p>
            </div>

            <div className="w-full password-box flex gap-1 flex-col">
              <label htmlFor="password" className="mb-1 text-slate-500">
                Confirm
              </label>
              <input
                type="password"
                className="password p-3 border-2 border-gray-200 rounded-lg placeholder:text-slate-400 focus:outline-none focus:border-[#4640DE] "
                placeholder="confirm"
                {...register("confirmPassword", {
                  required: "* Password is required",
                  pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/,
                    message:
                      "* Password must contain be at least one letter and one number",
                  },
                  minLength: {
                    value: 6,
                    message: "* Password must be at least 6 characters long",
                  },
                })}
              />
              <p
                className="error text-[#1814F3]"
                style={{
                  display:
                    errors.confirmPassword?.message == null ? "none" : "flex",
                }}
              >
                {errors.confirmPassword?.message}
              </p>
            </div>
          </div>
        )}

        {step === 2 && (
          <div
            key={2}
            className="flex flex-col w-full xxs:px-4 xxs:py-3 xs:px-5 xs:py-4 sm:px-6 sm:py-6 lg:px-10 lg:py-3 gap-2"
          >
            <div className="flex gap-3 items-center w-full justify-center py-6">
              <div className="flex items-center circle p-4 pt-5 bg-blue-50 rounded-full">
                <Image
                  src="/assets/logo-blue.svg"
                  width={24}
                  height={24}
                  alt=""
                />
              </div>
              <h3 className="text-2xl font-medium text-[#3C3B8B] text-center">
                Address Information
              </h3>
            </div>
            <div className="flex flex-col gap-2">
              <label className="mb-1 text-slate-500" htmlFor="permanentAddress">
                Permanent Address
              </label>
              <input
                {...register("permanentAddress")}
                id="permanentAddress"
                placeholder="123 Main St."
                className="p-3 border-2 border-gray-200 rounded-lg placeholder:text-slate-400 focus:outline-none focus:border-[#4640DE]"
                type="text"
              />
              {errors.permanentAddress && (
                <p className="text-[#1814F3]">
                  {errors.permanentAddress.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label className="mb-1 text-slate-500" htmlFor="presentAddress">
                Present Address
              </label>
              <input
                {...register("presentAddress")}
                id="presentAddress"
                placeholder="456 Elm St."
                className="p-3 border-2 border-gray-200 rounded-lg placeholder:text-slate-400 focus:outline-none focus:border-[#4640DE]"
                type="text"
              />
              {errors.presentAddress && (
                <p className="text-[#1814F3]">
                  {errors.presentAddress.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label className="mb-1 text-slate-500" htmlFor="country">
                Country
              </label>
              <input
                {...register("country")}
                id="country"
                placeholder="USA"
                className="p-3 border-2 border-gray-200 rounded-lg placeholder:text-slate-400 focus:outline-none focus:border-[#4640DE]"
                type="text"
              />
              {errors.country && (
                <p className="text-[#1814F3]">{errors.country.message}</p>
              )}
            </div>
            <div className="btm flex gap-3 w-full">
              <div className="flex flex-col gap-2 w-[48%]">
                <label className="mb-1 text-slate-500" htmlFor="city">
                  City
                </label>
                <input
                  {...register("city")}
                  id="city"
                  placeholder="New York"
                  className="p-3 border-2 border-gray-200 rounded-lg placeholder:text-slate-400 focus:outline-none focus:border-[#4640DE]"
                  type="text"
                />
                {errors.city && (
                  <p className="text-[#1814F3]">{errors.city.message}</p>
                )}
              </div>
              <div className="flex flex-col gap-2 w-[48%]">
                <label className="mb-1 text-slate-500" htmlFor="postalCode">
                  Postal Code
                </label>
                <input
                  {...register("postalCode")}
                  id="postalCode"
                  placeholder="12345"
                  className="p-3 border-2 border-gray-200 rounded-lg placeholder:text-slate-400 focus:outline-none focus:border-[#4640DE]"
                  type="text"
                />
                {errors.postalCode && (
                  <p className="text-[#1814F3]">{errors.postalCode.message}</p>
                )}
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div
            key={3}
            className="flex flex-col w-full xxs:px-4 xxs:py-3 xs:px-5 xs:py-4 sm:px-6 sm:py-6 lg:px-10 lg:py-3 gap-2"
          >
            <div className="flex gap-3 items-center w-full justify-center py-6">
              <div className="flex items-center circle p-4 pt-5 bg-blue-50 rounded-full">
                <Image
                  src="/assets/logo-blue.svg"
                  width={24}
                  height={24}
                  alt=""
                />
              </div>
              <h3 className="text-2xl font-medium text-[#3C3B8B] text-center">
                Personal Information
              </h3>
            </div>

            <div className="flex flex-col gap-2">
              <label className="mb-1 text-slate-500" htmlFor="dateOfBirth">
                Date of Birth
              </label>
              <input
                {...register("dateOfBirth")}
                id="dateOfBirth"
                type="date"
                className="p-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#4640DE]"
              />
              {errors.dateOfBirth && (
                <p className="text-[#1814F3]">{errors.dateOfBirth.message}</p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label className="mb-1 text-slate-500" htmlFor="currency">
                Currency
              </label>
              <select
                {...register("preference.currency")}
                id="currency"
                className="p-3 border-2 border-gray-200 rounded-lg placeholder:text-slate-400 focus:outline-none focus:border-[#4640DE] mt-1 block w-full text-sm"
              >
                <option value="USD">USD - US Dollar</option>
                <option value="EUR">EUR - Euro</option>
                <option value="GBP">GBP - British Pound</option>
                <option value="JPY">JPY - Japanese Yen</option>
                <option value="CNY">CNY - Chinese Yuan</option>
                <option value="INR">INR - Indian Rupee</option>
                <option value="ETB">ETB - Ethiopian Birr</option>
              </select>
              {errors.preference?.currency && (
                <p className="text-[#1814F3]">
                  {errors.preference.currency.message}
                </p>
              )}
            </div>
            <div className="flex gap-2">
              <input
                {...register("preference.sentOrReceiveDigitalCurrency")}
                id="sentOrReceiveDigitalCurrency"
                type="checkbox"
                className="h-5 w-5 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4640DE]"
              />
              <label
                className="text-slate-500"
                htmlFor="sentOrReceiveDigitalCurrency"
              >
                Send or Receive Digital Currency
              </label>
              {errors.preference?.sentOrReceiveDigitalCurrency && (
                <p className="text-[#1814F3]">
                  {errors.preference.sentOrReceiveDigitalCurrency.message}
                </p>
              )}
            </div>

            <div className="flex gap-2">
              <input
                {...register("preference.receiveMerchantOrder")}
                id="receiveMerchantOrder"
                type="checkbox"
                className="h-5 w-5 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4640DE]"
              />
              <label className="text-slate-500" htmlFor="receiveMerchantOrder">
                Receive Merchant Order
              </label>
              {errors.preference?.receiveMerchantOrder && (
                <p className="text-[#1814F3]">
                  {errors.preference.receiveMerchantOrder.message}
                </p>
              )}
            </div>

            <div className="flex gap-2">
              <input
                {...register("preference.accountRecommendations")}
                id="accountRecommendations"
                type="checkbox"
                className="h-5 w-5 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4640DE]"
              />
              <label
                className="text-slate-500"
                htmlFor="accountRecommendations"
              >
                Account Recommendations
              </label>
              {errors.preference?.accountRecommendations && (
                <p className="text-[#1814F3]">
                  {errors.preference.accountRecommendations.message}
                </p>
              )}
            </div>
          </div>
        )}

        <div className="w-full p-6 flex justify-between mt-4">
          {step > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="px-4 py-2 rounded-xl border-2 border-[#1814F3] text-[#1814F3]"
            >
              Previous
            </button>
          )}
          {step < 3 ? (
            <button
              type="button"
              onClick={nextStep}
              className={`bg-[#1814F3] text-white px-6 py-3 rounded-xl ${
                step == 1 ? "grow" : ""
              }`}
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              onClick={() => {
                handleSubmit(onSubmit);
                // setFlag(!flag);
              }}
              // disabled={flag}
              className=" flex gap-3 items-center bg-[#1814F3] text-white px-6 py-3 rounded-md"
            >
              {/* <FontAwesomeIcon
                icon={faSpinner}
                className={flag ? "visible text-2xl animate-spin" : "hidden"}
              /> */}
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
