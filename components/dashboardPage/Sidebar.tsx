import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExchangeAlt } from "@fortawesome/free-solid-svg-icons";
import { faWallet } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { faCommentAlt } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

const Sidebar = (props: any) => {

  const router = useRouter();

  return (
    <div className="dark:bg-gray-800 flex justify-evenly items-center fixed bottom-0 lg:fixed lg:top-16 w-full lg:block lg:h-screen lg:w-60 bg-cashfer-medium-purple pt-0 lg:pt-8">
      <Link href="/dashboard/">
        <div
          className={
            router.pathname == "/dashboard"
              ? "dark:hover:bg-gray-700 dark:bg-gray-700 bg-purple-200 cursor-pointer text-center lg:text-left p-4 lg:mx-4 rounded-lg hover:bg-purple-200 lg:space-x-4 lg:mb-4 text-cashfer-dark"
              : "dark:hover:bg-gray-700 cursor-pointer text-center lg:text-left p-4 lg:mx-4 rounded-lg hover:bg-purple-200 lg:space-x-4 lg:mb-4 text-cashfer-dark"
          }
        >
          <FontAwesomeIcon
            size="1x"
            color="#644C99"
            icon={faWallet}
          ></FontAwesomeIcon>
          <div className="dark:text-gray-300 lg:inline-block text-xs lg:text-base">
            Wallet
          </div>
        </div>
      </Link>

      <Link href="/dashboard/transactions">
        <div
          className={
            router.pathname == "/dashboard/transactions"
              ? "dark:hover:bg-gray-700 dark:bg-gray-700 bg-purple-200 cursor-pointer text-center lg:text-left p-4 lg:mx-4 rounded-lg hover:bg-purple-200 lg:space-x-4 lg:mb-4 dark:text-cashfer-dark"
              : "dark:hover:bg-gray-700 cursor-pointer text-center lg:text-left p-4 lg:mx-4 rounded-lg hover:bg-purple-200 lg:space-x-4 lg:mb-4 text-cashfer-dark"
          }
        >
          <FontAwesomeIcon
            size="1x"
            color="#644C99"
            icon={faExchangeAlt}
          ></FontAwesomeIcon>
          <div className="dark:text-gray-300 lg:inline-block text-xs lg:text-base">
            Transactions
          </div>
        </div>
      </Link>

      <Link href={"/dashboard/profile"}>
        <div
          className={
            router.pathname == "/dashboard/profile"
              ? "dark:hover:bg-gray-700 dark:bg-gray-700 bg-purple-200 cursor-pointer text-center lg:text-left p-4 lg:mx-4 rounded-lg hover:bg-purple-200 lg:space-x-4 lg:mb-4 text-cashfer-dark"
              : "dark:hover:bg-gray-700 cursor-pointer text-center lg:text-left p-4 lg:mx-4 rounded-lg hover:bg-purple-200 lg:space-x-4 lg:mb-4 text-cashfer-dark"
          }
        >
          <FontAwesomeIcon
            size="1x"
            color="#644C99"
            icon={faUser}
          ></FontAwesomeIcon>
          <div className="dark:text-gray-300 lg:inline-block text-xs lg:text-base">
            Profile
          </div>
        </div>
      </Link>

      <Link href={"/dashboard/chat"}>
        <div
          className={
            router.pathname == "/dashboard/profile/"
              ? "dark:hover:bg-gray-700 dark:bg-gray-700 bg-purple-200 cursor-pointer text-center lg:text-left p-4 lg:mx-4 rounded-lg hover:bg-purple-200 lg:space-x-4 lg:mb-4 text-cashfer-dark"
              : "dark:hover:bg-gray-700 cursor-pointer text-center lg:text-left p-4 lg:mx-4 rounded-lg hover:bg-purple-200 lg:space-x-4 lg:mb-4 text-cashfer-dark"
          }
        >
          <FontAwesomeIcon
            size="1x"
            color="#644C99"
            icon={faCommentAlt}
          ></FontAwesomeIcon>
          <div className="dark:text-gray-300 lg:inline-block text-xs lg:text-base">
            Chats
          </div>
        </div>
      </Link>

      <div className="dark:hover:bg-gray-700 cursor-pointer text-center lg:text-left p-4 lg:mx-4 rounded-lg hover:bg-purple-200 lg:space-x-4 lg:mb-4 text-cashfer-dark">
        <FontAwesomeIcon
          size="1x"
          color="#644C99"
          icon={faCog}
        ></FontAwesomeIcon>
        <div className="dark:text-gray-300 lg:inline-block text-xs lg:text-base">
          Settings
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

