import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import Image from "next/image";
import Link from "next/link";
import Dropdown from "../general/Dropdown";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <div>
      <nav className=" sticky top-0 px-2 lg:flex lg:items-center lg:justify-between lg:px-8 py-2 bg-white shadow-md">
        <div className="flex justify-between">
          <Image src="/cashfer logo.png" width="156" height="35" />
          <button
            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            {!navbarOpen ? (
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-cashfer-purple hover:opacity-60"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
            ) : (
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-cashfer-purple hover:opacity-60"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            )}
          </button>
        </div>

        <div className={navbarOpen ? "block" : "hidden lg:flex"}>
          <div className="block lg:flex lg:justify-between lg:items-center p-4 lg:p-2 lg:w-64 w-full">
            <div className="">
              <Link href="#">
                <FontAwesomeIcon
                  size="2x"
                  color="#644C99"
                  icon={faBell}
                ></FontAwesomeIcon>
              </Link>
            </div>

            <div className="lg:flex lg:items-center lg:justify-between w-36">
              <div className="border-2 border-cashfer-purple h-8 w-8 rounded-full overflow-hidden">
                <img
                  className="  w-full h-full object-cover"
                  src="/chelsea.jpg"
                />
              </div>

              <div className="">
                <span className="text-cashfer-purple">John Doe</span>
              </div>

              <div className="">
                <Dropdown />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
