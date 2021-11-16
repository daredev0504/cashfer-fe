import React, { useState, useEffect } from "react";
import { useTable } from "react-table";
import useLocalStorage from "../../Helpers/customHooks";
import { userService } from "../../Services/userService";
import Loader from "./Loader";

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
  const [isLoading, setisLoading] = useState(true);
  console.log("!!!!!!!!!!!!!!!!!!", data);

  useEffect(() => {
    if (data.length > 0) {
      setisLoading(false);
    } else {
      userService.logout();
    }
  }, [data]);

  // Render the UI for your table

  try {
    return (
      <div>
        {" "}
        {isLoading === true ? (
          <div>
            <Loader />
          </div>
        ) : (
          <table className="w-full" {...getTableProps()} border="1">
            <thead className="">
              {headerGroups.map((headerGroup) => (
                <tr
                  className="text-left"
                  {...headerGroup.getHeaderGroupProps()}
                >
                  {headerGroup.headers.map((column) => (
                    <th
                      className="p-4 dark:bg-gray-700 dark:text-cashfer-medium-purple bg-cashfer-medium-purple text-cashfer-dark text-sm"
                      {...column.getHeaderProps()}
                    >
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>

            <tbody
              className="dark:text-gray-300 text-sm text-cashfer-dark"
              {...getTableBodyProps()}
            >
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
        )}
      </div>
    );
  } catch (error) {
    return <div>an error occured</div>
  }
};
export default Table;
