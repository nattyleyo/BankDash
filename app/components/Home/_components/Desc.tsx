import Image from "next/image";
import React from "react";

const Desc = () => {
  return (
    <section className="px-4 py-16 md:px-8 lg:px-32">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-center text-[#343C6A] dark:text-white mb-12">
        Empower Your Financial Journey: Manage, Track, and Grow with Ease
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="flex items-center gap-4 p-6 bg-blue-100 dark:bg-[#2C2C33] rounded-lg">
          <div className="flex p-4 rounded-full bg-white dark:bg-[#181818]">
            <Image
              src="/assets/account-icon-active.svg"
              height={24}
              width={24}
              alt="Icon"
            />
          </div>
          <div>
            <h1 className="text-primaryBlack dark:text-white font-semibold">
              Accounts Payable
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Manage Pay and Reconcile Business
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 p-6 bg-blue-100 dark:bg-[#2C2C33] rounded-lg">
          <div className="flex p-4 rounded-full bg-white dark:bg-[#181818]">
            <Image
              src="/assets/loan-icon-active.svg"
              height={24}
              width={24}
              alt="Icon"
            />
          </div>
          <div>
            <h1 className="text-primaryBlack dark:text-white font-semibold">
              Loans
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Actively Track Loans
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 p-6 bg-blue-100 dark:bg-[#2C2C33] rounded-lg">
          <div className="flex p-4 rounded-full bg-white dark:bg-[#181818]">
            <Image
              src="/assets/invest-icon-active.svg"
              height={24}
              width={24}
              alt="Icon"
            />
          </div>
          <div>
            <h1 className="text-primaryBlack dark:text-white font-semibold">
              Investments
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Focus on Your Investments
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 p-6 bg-blue-100 dark:bg-[#2C2C33] rounded-lg">
          <div className="flex p-4 rounded-full bg-white dark:bg-[#181818]">
            <Image
              src="/assets/card-icon-active.svg"
              height={24}
              width={24}
              alt="Icon"
            />
          </div>
          <div>
            <h1 className="text-primaryBlack dark:text-white font-semibold">
              Credit Cards
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Unlimited Credit Cards at Your Fingertips
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Desc;
