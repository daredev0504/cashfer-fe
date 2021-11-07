import getConfig from "next/config";
import { fetchWrapper } from "../Helpers/fetchWrapper";
import { walletService } from "./walletService";
import { useEffect } from "react";

const { publicRuntimeConfig } = getConfig();

const baseUrl = `${publicRuntimeConfig.apiUrl}`;

export const transactionService = {
  getMyTransactions,
  getMyTransactionsLoggedIn,
};

function getMyTransactions(walletId: string) {
  console.log("#################################", walletId);

  return fetchWrapper
    .get(`${baseUrl}/Transaction/${walletId}/getTransactionByWallet`)
    .then((data) => {
      return data.data;
    })
    .catch(() => {});
}

function getMyTransactionsLoggedIn() {
  return fetchWrapper
    .get(`${baseUrl}/Transaction`)
    .then((data) => {
      return data.data;
    })
    .catch(() => {});
}
