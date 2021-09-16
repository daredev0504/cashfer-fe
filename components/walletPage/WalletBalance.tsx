import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const WalletBalance = () => {
  return (
    <>
      <div className="w-11/12 block text-center lg:flex lg:justify-between mx-auto lg:items-start p-12 rounded-lg mt-16 bg-white lg:w-6/12">
        <div className="mb-8 lg:mb-0">
          {" "}
          <div className="text-sm mb-6 text-cashfer-dark">wallet balance</div>
          <div className="text-5xl text-cashfer-purple font-medium">
            <span className="text-2xl">NGN</span> 500
          </div>
        </div>

        <Link href="/dashboard/transactions">
          <div className="border border-gray-200 p-4 rounded-md">
            Transactions &nbsp;&nbsp;&nbsp;
            <FontAwesomeIcon
              size="1x"
              color="#644C99"
              icon={faExternalLinkAlt}
            ></FontAwesomeIcon>
          </div>
        </Link>
      </div>
    </>
  );
};

export default WalletBalance;
