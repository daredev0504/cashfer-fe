import React from "react";
import { useTable } from 'react-table';

interface ITableProps {
  data: any[];
  columns: { Header: string; accessor: string }[];
}

const Table: React.FunctionComponent<ITableProps> = ({
  columns,
  data,
}): any => {
  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  // Render the UI for your table
  return (
    <table className="w-full" {...getTableProps()} border="1">
      <thead className="">
        {headerGroups.map((headerGroup) => (
          <tr className="text-left" {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th className="p-4 bg-cashfer-medium-purple text-cashfer-dark text-sm" {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>

      <tbody className="text-sm text-cashfer-dark" {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr className="" {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td className=" text-left p-5" {...cell.getCellProps()}>
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
