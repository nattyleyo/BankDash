import React, { useState } from "react";
import Image from "next/image";
import white from "../../../public/assets/sim-white-icon.png";
import gray from "../../../public/assets/sim-gray-icon.png";
import black from "../../../public/assets/sim-black-icon.png";
import { Card } from "../../Redux/slices/cardSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

interface CardType {
  data: Card;
  isBlack: boolean;
  isFade: boolean;
  isSimGray: boolean;
  className?: string;
}

export const convertDate = (dateString: string): string => {
  const date = new Date(dateString);
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString().slice(-2);
  return `${month}/${year}`;
};

const VisaCard: React.FC<CardType> = ({
  data,
  isBlack,
  isFade,
  isSimGray,
  className,
}) => {
  // console.log(data, "Data");
  const cardNo = `${data.semiCardNumber.slice(
    0,
    4
  )} **** **** ${data.semiCardNumber.slice(-4)}`;
  const [flag, setFlag] = useState(false);
  return (
    <div
      className={`w-full max-h-[242px] xxs:min-w-[300px] font-Lato flex flex-col gap-2 grow rounded-3xl ${
        isBlack
          ? `text-colorBody-1 bg-white dark:bg-[#232328] dark:text-gray-200 dark:border-gray-500 border-solid border-[1px] border-gray-200`
          : isFade
          ? "text-white bg-card-gradient-2"
          : "text-white bg-card-gradient-1"
      } `}
    >
      <div className="flex flex-col gap-6 p-6">
        <div className="flex xxs:text-xs md:text-sm">
          <div className="balance-box flex flex-col grow">
            <div className="label font-normal flex items-center gap-2">
              Balance
              <button
                onClick={() => {
                  setFlag(!flag);
                }}
              >
                <FontAwesomeIcon icon={!flag ? faEyeSlash : faEye} />
              </button>
            </div>
            <div
              className={`balance gap-2 flex xxs:text-lg md:text-xl font-medium
              `}
            >
              $ {flag ? data.balance : "******"}
            </div>
          </div>
          <Image
            width={48}
            height={24}
            src={isBlack && !isSimGray ? black : isSimGray ? gray : white}
            alt={isBlack ? "black" : isSimGray ? "gray" : "white"}
            className="simIcon xxs:h-8 xxs:w-10 md:w-12"
          />
        </div>
        <div className="flex">
          <div className="holder-box text-sm font-normal flex flex-col grow">
            <div className="label opacity-70 xxs:text-sm md:text-sm">
              CARD HOLDER
            </div>
            <div className="name xxs:text-sm md:text-base font-medium">
              {data.cardHolder}
            </div>
          </div>
          <div className="valid-box">
            <div className="label opacity-70 xxs:text-sm md:text-base">
              VALID THRU
            </div>
            <div className="name xxs:text-sm md:text-base font-medium">
              {convertDate(data.expiryDate)}
            </div>
          </div>
        </div>
      </div>
      <div
        className={`flex items-center gap-2 card-box rounded-b-3xl text-nowrap p-4 bg-card-box-light ${
          isBlack ? "border-solid border-t-2 border-gray-200" : ""
        }`}
      >
        <div className="number flex grow font-medium xxs:text-lg md:text-xl">
          {cardNo}
        </div>
        <div className="number flex">
          <div
            className={`circle xxs:w-7 xxs:h-7 md:w-8 md:h-8 ${
              isBlack ? "bg-colorBody-2" : "bg-white"
            } opacity-50 rounded-full`}
          ></div>
          <div
            className={`circle xxs:w-7 xxs:h-7 w-8 h-8 ${
              isBlack ? "bg-colorBody-2" : "bg-white"
            } opacity-50 -ml-4 rounded-full`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default VisaCard;
