import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import DarkModeToggle from "../../components/general/DarkModeToggle";
import { userService } from "../../Services/userService";


const Dropdown = (props:any) => {
  const [show, setshow] = useState(false);

  function showDropdown() {
    setshow(true);
  }
  function hideDropdown() {
    setshow(false);
  }
function logout(){
userService.logout();
}

  return (
    <div>
      <button onMouseOver={() => showDropdown()} className="" type="button">
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
          className="dark:bg-gray-900 dark:text-white absolute right-0 z-10 bg-white shadow-lg text-sm rounded-lg py-2 text-gray-600 w-52"
        >
          <Link href="/dashboard/profile">
            <a className="block px-4 py-3 dark:hover:bg-gray-800 hover:bg-cashfer-light-purple">
              <FontAwesomeIcon
                size="1x"
                color="#644c99"
                stroke="5px"
                icon={faUser}
              ></FontAwesomeIcon>{" "}
              <span className=""> &nbsp;Profile</span>
            </a>
          </Link>
          <div className="cursor-pointer" onClick={logout}>
            <a className="block px-4 py-3 dark:hover:bg-gray-800 hover:bg-cashfer-light-purple">
              <FontAwesomeIcon
                size="1x"
                color="red"
                stroke="5px"
                icon={faPowerOff}
              ></FontAwesomeIcon>{" "}
              <span className=""> &nbsp;Logout</span>
            </a>
          </div>
          
            <a className="block px-4 py-3 dark:hover:bg-gray-800 hover:bg-cashfer-light-purple">
              <span className="">Dark mode</span>{" "}
              <span className="float-right">
                <DarkModeToggle togglerr={props.toggler} />
              </span>
            </a>
          
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Dropdown;
