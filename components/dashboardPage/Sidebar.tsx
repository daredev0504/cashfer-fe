import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExchangeAlt } from "@fortawesome/free-solid-svg-icons";
import { faWallet } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className="flex justify-around items-center fixed bottom-0 lg:relative w-full lg:block lg:w-60 lg:h-full bg-cashfer-medium-purple pt-0 lg:pt-8">
      <Link href="/dashboard/">
        <div className="text-center lg:text-left p-4 lg:mx-4 rounded-lg hover:bg-purple-200 lg:space-x-4 lg:mb-4 text-cashfer-dark">
          <FontAwesomeIcon
            size="1x"
            color="#644C99"
            icon={faWallet}
          ></FontAwesomeIcon>
          <div className="lg:inline-block text-xs lg:text-base">Wallet</div>
        </div>
      </Link>

      <Link href="/dashboard/transactions">
        <div className="text-center lg:text-left p-4 lg:mx-4 rounded-lg hover:bg-purple-200 lg:space-x-4 lg:mb-4 text-cashfer-dark">
          <FontAwesomeIcon
            size="1x"
            color="#644C99"
            icon={faExchangeAlt}
          ></FontAwesomeIcon>
          <div className="lg:inline-block text-xs lg:text-base">
            Transactions
          </div>
        </div>
      </Link>

      <Link href="/dashboard/profile">
        <div className="text-center lg:text-left p-4 lg:mx-4 rounded-lg hover:bg-purple-200 lg:space-x-4 lg:mb-4 text-cashfer-dark">
          <FontAwesomeIcon
            size="1x"
            color="#644C99"
            icon={faUser}
          ></FontAwesomeIcon>
          <div className="lg:inline-block text-xs lg:text-base">Profile</div>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
