"use client";
import { useForm } from "react-hook-form";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import LoginValue from "@/types/LoginValue";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faTimes } from "@fortawesome/free-solid-svg-icons";

const LoginForm = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginValue>();

  const onSubmit = async (data: LoginValue) => {
    setLoading(true);
    setError("");
    const result = await signIn("credentials", {
      redirect: false,
      userName: data.userName,
      password: data.password,
    });

    if (result?.error) {
      setError("Invalid Credential");
      setLoading(false);
    } else {
      router.push("/");
    }
  };

  return (
    <div className="relative flex flex-col justify-center gap-2 max-w-[408px] min-w-72 p-10 bg-white rounded-2xl border-[0.3px] border-solid border-[#1814f326] shadow-sm shadow-blue-100 z-20 xxs:h-screen xs:h-[80vh] sm:h-fit">
      {/* Close Button */}
      <button
        onClick={() => router.push("/")}
        className="absolute top-4 right-4 p-2 bg-slate-200 hover:bg-slate-300 rounded-full"
        aria-label="Close and go back to home"
      >
        <FontAwesomeIcon icon={faTimes} className="text-slate-600 text-lg" />
      </button>

      <div className="flex flex-col gap-2 justify-center items-center ">
        <div className="flex items-center circle p-4 pt-5 bg-blue-50 rounded-full">
          <Image
            src="/assets/logo-blue.svg"
            width={48}
            height={48}
            alt="Logo"
          />
        </div>
        <h1 className="min-w-[408px] p-2 text-slate-800 font-extrabold text-3xl text-center">
          Welcome <span className="text-[#1814F3]">Back.</span>
        </h1>
      </div>

      <form
        className="pt-3 flex flex-col gap-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        {error && <p className="text-[#1814F3] mt-2 text-center">{error}</p>}

        <div className="mt-3 flex flex-col">
          <label className="mb-1 text-slate-500" htmlFor="userName">
            UserName
          </label>
          <input
            {...register("userName", { required: "UserName is required" })}
            placeholder="Enter UserName"
            id="userName"
            className="p-3 border-2 border-gray-200 rounded-lg placeholder:text-slate-400 focus:outline-none focus:border-[#4640DE]"
            type="text"
            disabled={loading}
          />
          {errors.userName && (
            <p className="text-red-500">{errors.userName.message}</p>
          )}
        </div>

        <div className="mt-3 flex flex-col">
          <label className="mb-1 text-slate-500" htmlFor="password">
            Password
          </label>
          <input
            {...register("password", { required: "Password is required" })}
            placeholder="Enter password"
            id="password"
            className="p-3 border-2 border-gray-200 rounded-lg placeholder:text-slate-400 focus:outline-none focus:border-[#4640DE]"
            type="password"
            disabled={loading}
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </div>

        <div className="px-6 py-3 mt-3 flex flex-col bg-[#1814F3] rounded-xl">
          <button
            type="submit"
            disabled={loading}
            className="flex gap-3 items-center justify-center bg-[#1814F3] text-white rounded-md"
          >
            <FontAwesomeIcon
              icon={faSpinner}
              className={loading ? "visible text-2xl animate-spin" : "hidden"}
            />
            {loading ? "Loading..." : "Login"}
          </button>
        </div>
      </form>
      {/* <div className="w-full flex justify-center">Or</div> */}
      {/* <div className="social-login flex justify-center gap-6 w-full"> */}
      {/* <button
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="flex items-center justify-center border p-2 rounded-xl border-orange-500"
        >
          <Image
            width={32}
            height={32}
            src={"/assets/google-icon.png"}
            alt=""
          />
        </button> */}
      {/* <button
          onClick={() => signIn("facebook")}
          className="flex items-center justify-center border p-2 rounded-xl border-blue-600"
        >
          <Image
            width={32}
            height={32}
            src={"/assets/facebook-icon.png"}
            alt=""
          />
        </button> */}
      {/* <button
          onClick={() => signIn("github", { callbackUrl: "/" })}
          className="flex  items-center justify-center border p-2 rounded-xl border-black"
        >
          <Image
            width={32}
            height={32}
            src={"/assets/github-icon.png"}
            alt=""
          />
        </button> */}
      {/* </div> */}

      <div className="mt-2 text-center text-base font-normal text-slate-600">
        {`Don't have an account?`}
        <Link
          href={`/signup`}
          passHref
          className="ml-2 font-normal text-[#4640DE] underline cursor-pointer"
        >
          SignUp
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
