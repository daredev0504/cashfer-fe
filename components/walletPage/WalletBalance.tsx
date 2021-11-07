import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { walletService } from "../../Services/walletService";
import { alertService } from "../../Services/alertService";
import { userService } from "../../Services/userService";

const WalletBalance = (props: any) => {
  const [wallets, setwallets] = useState([]);

    const mapWallets = props.wallets.map((wallet: any) => {
     const formatter = new Intl.NumberFormat("en-US", {
       style: "currency",
       currency: `${wallet.currencyCode}`,
       minimumFractionDigits: 2,
     });
    return <span key={wallet.id}>{formatter.format(wallet.balance)}</span>;
  });

  return (
    <>
      <div className=" dark:bg-gray-800 myshadow w-11/12 block mx-auto text-center p-12 rounded-lg mt-16 bg-white lg:w-6/12">
        <div className="mb-8 lg:mb-0">
          {" "}
          <div className="lg:flex lg:justify-between lg:items-start mb-6 mx-auto">
            {" "}
            <div className="dark:text-white text-left text-sm mb-6 text-cashfer-dark">
              wallet balance
            </div>
            <Link href="/dashboard/transactions">
              <div className=" cursor-pointer border border-gray-200 p-4 rounded-md dark:text-gray-300">
                Transactions &nbsp;&nbsp;&nbsp;
                <FontAwesomeIcon
                  size="1x"
                  color="#644C99"
                  icon={faExternalLinkAlt}
                ></FontAwesomeIcon>
              </div>
            </Link>
          </div>
          <div className="text-4xl text-center lg:text-left lg:text-5xl text-cashfer-purple font-medium">
            {mapWallets}
          </div>
        </div>
      </div>
    </>
  );
};

export default WalletBalance;
