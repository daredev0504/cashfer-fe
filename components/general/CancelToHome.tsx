import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const CancelToHome = () => {
  return (
    <div>
      <div className="block mt-4 lg:hidden bg-gray-200 float-right lg:mr-0 mr-4 w-2/12 lg:w-1/12 px-3 py-4 text-center rounded-full">
        <Link href="/">
          <FontAwesomeIcon
            className=""
            size="1x"
            color="#644C99"
            icon={faTimes}
          ></FontAwesomeIcon>
        </Link>
      </div>
    </div>
  );
};

export default CancelToHome;
