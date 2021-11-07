import React, { createContext, useReducer, useEffect } from "react";

interface IWalletContextInterface {
  data: {};
  isModalOpen: boolean;
  fundWallet: any;
  error: {};
}

const WalletContext = createContext<IWalletContextInterface | null>(null);

export default WalletContext;
