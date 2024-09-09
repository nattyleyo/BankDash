"use client";
import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faQuoteLeft,
  faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";
import Header from "./_components/Header";
import FAQSection from "./_components/FAQSection";
import Footer from "./_components/Footer";
import Desc from "./_components/Desc";

const LandingPage = () => {
  return (
    <div className="dark:bg-[#1A1A1B] bg-white text-gray-800 dark:text-white min-h-screen">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="flex flex-col-reverse xxs:pb-12 lg:flex-row justify-between items-center max-w-[86%] mx-auto px-6 md:px-12 lg:px-16 py-32">
        <div className="xxs:flex-col xxs:gap-6 md:flex-row gap-6 lg:w-1/2 mt-8 lg:mt-0">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#343C6A] dark:text-white mb-4">
            Your <span className="text-[#1814f6]">Financial</span> Dashboard
            Simplified{" "}
            <span className=" inline-flex w-fit mb-[-7px] overflow-hidden whitespace-nowrap border-r-4 border-r-[#1814f6] animate-typing">
              and Secure.
            </span>
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Manage all your financial data in one place with real-time insights,
            secure transactions, and personalized reports to keep your bank
            account under control.
          </p>
          <button className="bg-[#1814f6] text-white font-semibold py-3 px-6 rounded-full shadow-md hover:bg-[#0e0bcf]">
            Get Started
          </button>
        </div>
        <div className="lg:w-1/2">
          <Image
            src="/images/Home.png"
            alt="Financial dashboard illustration"
            width={600}
            height={400}
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 dark:bg-[#232328] py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <h2 className="text-3xl font-extrabold text-[#343C6A] dark:text-white text-center mb-12">
            Features that Make a Difference
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-white dark:bg-[#2C2C33] shadow-md rounded-lg p-6 text-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-[#1814f6] text-4xl mb-4"
              />
              <h3 className="text-xl font-semibold text-[#343C6A] dark:text-white mb-2">
                Real-time Insights
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Get up-to-the-minute data on your transactions and account
                balance.
              </p>
            </div>
            <div className="bg-white dark:bg-[#2C2C33] shadow-md rounded-lg p-6 text-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-[#1814f6] text-4xl mb-4"
              />
              <h3 className="text-xl font-semibold text-[#343C6A] dark:text-white mb-2">
                Secure Transactions
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our platform uses cutting-edge security measures to protect your
                data.
              </p>
            </div>
            <div className="bg-white dark:bg-[#2C2C33] shadow-md rounded-lg p-6 text-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-[#1814f6] text-4xl mb-4"
              />
              <h3 className="text-xl font-semibold text-[#343C6A] dark:text-white mb-2">
                Personalized Reports
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Receive tailored financial reports based on your transaction
                history and habits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <h2 className="text-3xl font-extrabold text-[#343C6A] dark:text-white text-center mb-12">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-white dark:bg-[#2C2C33] shadow-md rounded-lg p-6 text-center">
              <FontAwesomeIcon
                icon={faQuoteLeft}
                className="text-[#1814f6] text-4xl mb-4"
              />
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {`"This dashboard has changed the way I manage my finances. The
                real-time insights have been invaluable!"`}
              </p>
              <p className="font-bold text-[#343C6A] dark:text-white">
                John Doe
              </p>
            </div>
            <div className="bg-white dark:bg-[#2C2C33] shadow-md rounded-lg p-6 text-center">
              <FontAwesomeIcon
                icon={faQuoteLeft}
                className="text-[#1814f6] text-4xl mb-4"
              />
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {`"The security and simplicity of the platform have given me peace
                of mind in managing my transactions."`}
              </p>
              <p className="font-bold text-[#343C6A] dark:text-white">
                Jane Smith
              </p>
            </div>
            <div className="bg-white dark:bg-[#2C2C33] shadow-md rounded-lg p-6 text-center">
              <FontAwesomeIcon
                icon={faQuoteLeft}
                className="text-[#1814f6] text-4xl mb-4"
              />
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {`"I love the personalized reports! They help me stay on track
                with my financial goals."`}
              </p>
              <p className="font-bold text-[#343C6A] dark:text-white">
                Sarah Johnson
              </p>
            </div>
          </div>
        </div>
      </section>
      <Desc />

      {/* Pricing Section */}
      <section className="bg-gray-50 dark:bg-[#232328] py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <h2 className="text-3xl font-extrabold text-[#343C6A] dark:text-white text-center mb-12">
            Choose Your Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-white dark:bg-[#2C2C33] shadow-md rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-[#343C6A] dark:text-white mb-2">
                Basic Plan
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Free for individuals with basic needs.
              </p>
              <p className="text-2xl font-extrabold text-[#1814f6] mb-6">$0</p>
              <button className="bg-[#1814f6] text-white font-semibold py-3 px-6 rounded-full shadow-md hover:bg-[#0e0bcf]">
                Get Started
              </button>
            </div>
            <div className="bg-white dark:bg-[#2C2C33] shadow-md rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-[#343C6A] dark:text-white mb-2">
                Premium Plan
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Advanced features for power users.
              </p>
              <p className="text-2xl font-extrabold text-[#1814f6] mb-6">
                $9.99/mo
              </p>
              <button className="bg-[#1814f6] text-white font-semibold py-3 px-6 rounded-full shadow-md hover:bg-[#0e0bcf]">
                Get Started
              </button>
            </div>
            <div className="bg-white dark:bg-[#2C2C33] shadow-md rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-[#343C6A] dark:text-white mb-2">
                Enterprise Plan
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Tailored solutions for businesses.
              </p>
              <p className="text-2xl font-extrabold text-[#1814f6] mb-6">
                Contact Us
              </p>
              <button className="bg-[#1814f6] text-white font-semibold py-3 px-6 rounded-full shadow-md hover:bg-[#0e0bcf]">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default LandingPage;
