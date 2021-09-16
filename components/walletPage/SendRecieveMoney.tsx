import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

const SendRecieveMoney = () => {
    return (
      <div className="w-8/12 text-center mx-auto space-y-4 lg:space-y-0 lg:flex lg:w-10/12 mt-12 gap-8 lg:justify-end">
        <div>
          <AddMoney />
        </div>
        <div>
          <ReceiveMoney />
        </div>
      </div>
    );
}

export default SendRecieveMoney

const AddMoney = () => {
    return (
      <div>
        <div className=" bg-cashfer-purple border border-gray-200 p-4 rounded-md text-white">
          <FontAwesomeIcon
            size="1x"
            color="white"
            icon={faPlusCircle}
          ></FontAwesomeIcon>
          &nbsp;&nbsp;&nbsp;Add Money
        </div>
      </div>
    );
}

const ReceiveMoney = () => {
  return (
    <div>
      <div className="bg-white text-cashfer-purple border border-gray-200 p-4 rounded-md">
        <FontAwesomeIcon
          size="1x"
          color="#644C99"
          icon={faPaperPlane}
        ></FontAwesomeIcon>
        &nbsp;&nbsp;&nbsp;Send Money
      </div>
    </div>
  );
};


