import React, { useState, useEffect, useContext } from "react";
import Table from "./Table";
import { useMemo } from "react";
import TransactionContext from "../../Context/transaction/TransactionContext";

const TableList = (props: any) => {

  const context = useContext(TransactionContext);
  const [data, setdata] = useState([])

  useEffect(() => {
   setdata(context.data)
   
    return () => {
     setdata([])
    }
  }, [context.data])

  console.log("+++++++++++++++++++++++", context.data);
  const columns = useMemo(
    () => [
      {
        Header: "Date",
        accessor: "date",
      },
      {
        Header: "Transaction Type",
        accessor: "type",
      },
      {
        Header: "Amount",
        accessor: "amount",
      },
      {
        Header: "Currency",
        accessor: "currencyId",
      },
      {
        Header: "Wallet Id",
        accessor: "walletId",
      },
    ],
    []
  );
  return (
    <>
      <div className=" dark:bg-gray-800 mb-16 w-full mx-4 overflow-x-auto rounded-3xl mt-16 lg:mx-auto lg:w-9/12 p-8 bg-white">
        <h1 className="text-cashfer-purple text-2xl font-semibold mb-8">
          Recent Transactions
        </h1>
        <div className="w-full">
          {data?.length <= 0 ? (
            <div className="text-gray-300 dark:text-gray-700 text-3xl">
              No transactions yet
            </div>
          ) : (
            <Table  columns={columns} data={data} />
          )}
        </div>
      </div>
    </>
  );
};

export default TableList;
