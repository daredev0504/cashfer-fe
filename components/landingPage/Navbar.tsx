import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faBars } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="dark:bg-gray-900 sticky top-0 flex flex-wrap items-center justify-between px-2 py-3 bg-white shadow-md mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex items-center justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-grey-500"
              href="#pablo"
            >
              <Image src="/cashfer logo.png" width="156" height="35" />
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <div>
                <FontAwesomeIcon
                  color="#644C99"
                  icon={faBars}
                ></FontAwesomeIcon>
              </div>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item my-8 lg:my-0 lg:mx-6">
                <Link href="/register">
                  <a className="rounded-md px-4 py-3 bg-cashfer-purple text-xs font-medium text-white hover:opacity-90">
                    <span className="">Sign Up</span>
                  </a>
                </Link>
              </li>
              <li className="nav-item mb-5 lg:mb-0">
                <Link href="/login">
                  <a className="rounded-md px-4 py-3 border border-cashfer-purple text-xs font-medium text-cashfer-purple hover:opacity-90">
                    <span className="">Log In</span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
