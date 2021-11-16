import React, { createContext } from "react";

interface ITransactionContextInterface {
  data: any[];
}

const TransactionContext = createContext<ITransactionContextInterface | null>(null);

export default TransactionContext;
