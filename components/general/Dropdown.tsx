import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Dropdown = () => {
  const [show, setshow] = useState(false);

  function showDropdown() {
    setshow(true);
  }
  function hideDropdown() {
    setshow(false);
  }

  return (
    <div>
      <button
        onMouseEnter={() => showDropdown()}
      
        className=""
        type="button"
      >
        <div className="">
          <FontAwesomeIcon
            size="2x"
            color="#644C99"
            icon={faCaretDown}
          ></FontAwesomeIcon>
        </div>
      </button>

      {show ? (
        <div
          onMouseOver={() => showDropdown()}
          onMouseLeave={() => hideDropdown()}
          className="absolute right-0 z-10 bg-white shadow-lg text-sm border rounded-lg py-2 text-gray-600 w-52"
        >
          <Link href="/login">
            <a className="block px-4 py-2 hover:bg-cashfer-light-purple">
              <FontAwesomeIcon
                size="1x"
                color="#644c99"
                stroke="5px"
                icon={faUser}
              ></FontAwesomeIcon>{" "}
              <span className=""> &nbsp;Profile</span>
            </a>
          </Link>
          <Link href="/login">
            <a className="block px-4 py-2 hover:bg-cashfer-light-purple">
              <FontAwesomeIcon
                size="1x"
                color="red"
                stroke="5px"
                icon={faPowerOff}
              ></FontAwesomeIcon>{" "}
              <span className=""> &nbsp; Logout</span>
            </a>
          </Link>
          <Link href="/login">
            <a className="block px-4 py-2 hover:bg-cashfer-light-purple">
              <span className="">Dark mode</span>
            </a>
          </Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Dropdown;
