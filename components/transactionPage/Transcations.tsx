import * as React from 'react';
import Tabs from "../../components/general/Tabs";
import TableList from '../general/TableList';

const Transcations = () => {

return (
  <>
    <div className="w-full pt-8">
      {" "}
      <Tabs>
        <div label="All" className="w-full">
         <TableList />
        </div>
        <div label="Credit">
          this is <i>Credit</i> tab
        </div>
        <div label="Dedit">
          this is <i>Debit</i> tab
        </div>
      </Tabs>
    </div>
  </>
);
}

export default Transcations
