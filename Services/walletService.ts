import { BehaviorSubject } from "rxjs";
import getConfig from "next/config";
import { fetchWrapper } from "../Helpers/fetchWrapper";


const { publicRuntimeConfig } = getConfig();

const baseUrl = `${publicRuntimeConfig.apiUrl}`;


export const walletService = {
  getMyWallet,
  fundMyWallet
};

function getMyWallet() {
  return fetchWrapper.get(`${baseUrl}/Wallet/GetAllMyWallets`)
     .then((data) => {
       return data.data.data;
     });
}

function fundMyWallet(fundingData: any) {
  return fetchWrapper
    .post(`${baseUrl}/Wallet/fundFreeWallet`, fundingData)
    .then((data) => {
      return data
    });
}
