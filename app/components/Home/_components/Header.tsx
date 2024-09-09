"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faClose,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch, useAppSelector } from "@/app/Redux/store/store";
import { toggleDarkMode } from "@/app/Redux/slices/darkModeSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();
  const isDarkMode = useAppSelector((state) => state.darkMode.darkMode);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const userData = useAppSelector((state) => state.user);
  // console.log(session, "nhgf");
  const onDarkMode = () => {
    dispatch(toggleDarkMode());
  };

  const logo = isDarkMode ? "/assets/logo-white.svg" : "/assets/logo-blue.svg";

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu: any = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full font-inter fixed left-0 z-10 flex flex-row justify-between items-center bg-white dark:bg-[#232328] px-[6%] md:px-[5%] py-4 shadow-sm">
      {/* Logo and Toggle Button */}
      <div className="flex gap-2 items-center w-full md:w-fit">
        <Image
          src={logo || "/assets/logo-blue.svg"}
          alt="logo"
          width={36}
          height={36}
        />
        <h1 className="text-2xl font-extrabold text-[#343C6A] dark:text-white">
          BankDash.
        </h1>
      </div>

      <button
        className={
          isMenuOpen
            ? "hidden"
            : "visible lg:hidden bg-[#F5F7FA] rounded-[12px] border-2 border-solid border-slate-200 p-3 flex items-center hover:bg-[#d0e6f6]"
        }
        onClick={toggleMenu}
      >
        <FontAwesomeIcon
          icon={isMenuOpen ? faClose : faBars}
          className="text-2xl text-gray-700"
        />
      </button>

      {/* Navigation Links (Desktop) */}
      <nav className="hidden lg:flex gap-8 items-center text-lg font-medium dark:text-white">
        <Link
          href="/dashboard"
          className="hover:text-[#1814f6] dark:hover:text-yellow-400 transition-colors"
        >
          Dashboard
        </Link>
        <Link
          href="/features"
          className="hover:text-[#1814f6] dark:hover:text-yellow-400 transition-colors"
        >
          Features
        </Link>
        <Link
          href="/how-it-works"
          className="hover:text-[#1814f6] dark:hover:text-yellow-400 transition-colors"
        >
          How It Works
        </Link>
        <Link
          href="/help"
          className="hover:text-[#1814f6] dark:hover:text-yellow-400 transition-colors"
        >
          Help
        </Link>
      </nav>

      {/* Dark Mode Toggle and Auth Buttons (Desktop) */}
      <div className="hidden lg:flex gap-5">
        <button
          onClick={onDarkMode}
          className="flex items-center bg-[#F5F7FA] dark:bg-gray-700 rounded-full p-3 hover:bg-gray-200 dark:hover:bg-gray-600"
        >
          <FontAwesomeIcon
            icon={isDarkMode ? faSun : faMoon}
            className="text-[#718EBF] dark:text-yellow-400 text-xl px-1"
          />
        </button>
        {!session && (
          <>
            <button
              onClick={() => router.push("login")}
              className="text-gray-600 bg-gray-100 dark:bg-gray-700 font-semibold dark:text-white rounded-full p-3 px-6"
            >
              Login
            </button>
            <button
              onClick={() => router.push("signup")}
              className="text-white font-semibold bg-[#1814f6] rounded-full p-3 px-6"
            >
              SignUp
            </button>
          </>
        )}
        {session && (
          <button
            onClick={() => signOut({ redirect: true, callbackUrl: "/" })}
            className="text-white font-semibold bg-[#1814f6] rounded-full p-3 px-6"
          >
            LogOut
          </button>
        )}
      </div>

      {/* Side Menu for Mobile */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white dark:bg-[#232328] shadow-lg transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } z-20 lg:hidden`}
      >
        <div className="flex justify-between items-center p-4">
          <Image
            src={logo || "/assets/logo-blue.svg"}
            alt="logo"
            width={36}
            height={36}
          />
          <h1 className="text-2xl font-extrabold text-[#343C6A] dark:text-white">
            BankDash.
          </h1>
          <button onClick={toggleMenu}>
            <FontAwesomeIcon
              icon={faClose}
              className="text-2xl text-gray-700"
            />
          </button>
        </div>
        <nav className="flex flex-col gap-4 p-4 px-6 text-lg font-medium dark:text-white">
          <Link
            href="/dashboard"
            className="hover:text-[#1814f6] dark:hover:text-yellow-400 transition-colors"
            onClick={toggleMenu}
          >
            Dashboard
          </Link>
          <Link
            href="/features"
            className="hover:text-[#1814f6] dark:hover:text-yellow-400 transition-colors"
            onClick={toggleMenu}
          >
            Features
          </Link>
          <Link
            href="/how-it-works"
            className="hover:text-[#1814f6] dark:hover:text-yellow-400 transition-colors"
            onClick={toggleMenu}
          >
            How It Works
          </Link>
          <Link
            href="/help"
            className="hover:text-[#1814f6] dark:hover:text-yellow-400 transition-colors"
            onClick={toggleMenu}
          >
            Help
          </Link>
          <button
            onClick={onDarkMode}
            className="flex gap-2 items-center bg-[#F5F7FA] dark:bg-gray-700 rounded-full p-3 hover:bg-gray-200 dark:hover:bg-gray-600"
          >
            <FontAwesomeIcon
              icon={isDarkMode ? faSun : faMoon}
              className="text-[#718EBF] dark:text-yellow-400 text-xl px-1"
            />
            DarkMode
          </button>
          {!session && (
            <>
              <button
                onClick={() => {
                  router.push("login");
                  toggleMenu();
                }}
                className="text-gray-600 bg-gray-100 dark:bg-gray-700 font-semibold dark:text-white rounded-full p-3 px-6"
              >
                Login
              </button>
              <button
                onClick={() => {
                  router.push("signup");
                  toggleMenu();
                }}
                className="text-white font-semibold bg-[#1814f6] rounded-full p-3 px-6"
              >
                SignUp
              </button>
            </>
          )}
          {session && (
            <button
              onClick={() => signOut({ redirect: true, callbackUrl: "/" })}
              className="text-white font-semibold bg-[#1814f6] rounded-full p-3 px-6"
            >
              LogOut
            </button>
          )}
        </nav>
      </div>

      {/* Overlay when menu is open */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10 lg:hidden"
          onClick={toggleMenu}
        />
      )}
    </header>
  );
};

export default Header;
