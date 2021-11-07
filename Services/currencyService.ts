import getConfig from "next/config";
import Router from "next/router";
import { fetchWrapper } from "../Helpers/fetchWrapper";

const { publicRuntimeConfig } = getConfig();

const baseUrl = `${publicRuntimeConfig.apiUrl}`;

export const currencyService = {
  getAll
};

function getAll() {
  return fetchWrapper.getForCurrency(`${baseUrl}/api/Currency/GetAllCurrencies`)
}
