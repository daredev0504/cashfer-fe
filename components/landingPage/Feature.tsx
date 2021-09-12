import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandSparkles } from "@fortawesome/free-solid-svg-icons";
import { faMeteor } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const Feature = () => {
  return (
    <div className=" mt-40">
      <div className=" text-2xl text-cashfer-purple font-bold text-center">
        Why CashFer
      </div>
      <div className="text-gray-400 text-center mt-2">
        Cashfer provides inciting features for your needs
      </div>
      <div className="block text-center lg:gap-12 rounded-3xl mt-12 p-10 lg:w-9/12 lg:mx-auto lg:flex lg:justify-between lg:items-baseline bg-white">
        <div className="mb-8 lg:mb-0 lg:w-3/12">
          <div className="mb-4">
            <FontAwesomeIcon
              size="2x"
              color="#644C99"
              icon={faBookmark}
            ></FontAwesomeIcon>
          </div>
          <div className="text-xl text-cashfer-dark mb-4 font-medium">
            Easy to Use
          </div>
          <div className="text-gray-400">
            We provide you ana easy way possible to use the App
          </div>
        </div>
        <div className=" mb-8 lg:mb-0 lg:w-3/12">
          <div className="mb-4">
            <FontAwesomeIcon
              size="2x"
              color="#644C99"
              icon={faMeteor}
            ></FontAwesomeIcon>
          </div>
          <div className="text-xl text-cashfer-dark mb-4 font-medium">
            Speedy Transactions
          </div>
          <div>
            <div className="text-gray-400">
              We provide you ana easy way possible to use the App
            </div>
          </div>
        </div>
        <div className="mb-8 lg:mb-0 lg:w-3/12">
          <div className="mb-4">
            <FontAwesomeIcon
              size="2x"
              color="#644C99"
              icon={faHandSparkles}
            ></FontAwesomeIcon>
          </div>
          <div className="text-cashfer-dark text-xl mb-4 font-medium">
            Clean Interface
          </div>
          <div className="text-gray-400">
            Our clean and clear Interface engages users and gives them a good
            experience.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
