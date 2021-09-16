import React from "react";
import Table from './Table';
import { useMemo } from 'react';
import {getData} from '../../data';


const TableList = () => {
    const data = useMemo(() => getData(), []);

    const columns = useMemo(
      () => [
        {
          Header: "Date",
          accessor: "date",
        },
        {
          Header: "Transaction Type",
          accessor: "title",
        },
        {
          Header: "Amount",
          accessor: "status",
        },
        {
          Header: "Currency",
          accessor: "role",
        },
        {
          Header: "Wallet Id",
          accessor: "email",
        },
      ],
      []
    );
  return (
    <>
      <div className="mb-16 w-full mx-4 overflow-x-auto rounded-3xl mt-16 lg:mx-auto lg:w-9/12 p-8 bg-white">
        <h1 className="text-cashfer-purple text-2xl font-semibold mb-8">Recent Transactions</h1>
        <div className="">
          <Table columns={columns} data={data} />
        </div>
      </div>
    </>
  );
};

export default TableList;
