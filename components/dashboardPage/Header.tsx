import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import Image from "next/image";
import Link from "next/link";
import Dropdown from "../general/Dropdown";
import { userService } from "../../Services/userService";
import {setAuthToken} from "../../Helpers/setAuthToken";

const Header = (props: any) => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [name, setname] = useState("");
  const [user, setuser] = useState(null);
  const [image, setimage] = useState(null);
  
React.useEffect(() => {
  setAuthToken(userService.userValue);
}, []);
 
  useEffect(() => {
     let abortController = new AbortController();
    const getUser = () => {
      userService
        .getUser()
        .then((data) => {
           console.log("&&&&&&&&&&&&&&&&&", data);
          setuser(data.data);
          setimage(data.data.avatarUrl);
          setname(data.data.userName)
        })
        .catch(() => {
          //userService.logout();
        });
    };
   
    getUser();
   return () => {
     abortController.abort();
   };
  }, []);

  return (
    <div>
      <nav className="dark:bg-gray-900 px-2 lg:flex lg:items-center lg:justify-between lg:px-8 py-2 bg-white shadow-md">
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
              <Link href={"/notification"}>
                <div>
                  {" "}
                  <FontAwesomeIcon
                    size="2x"
                    color="#644C99"
                    icon={faBell}
                  ></FontAwesomeIcon>
                </div>
              </Link>
            </div>

            <div className="lg:flex lg:items-center lg:justify-between w-36">
              <div className="border-2 border-cashfer-purple h-8 w-8 rounded-full overflow-hidden">
                <img className="  w-full h-full object-cover" src={image == null ? "https://cdn-icons-png.flaticon.com/512/149/149071.png":image} />
              </div>

              <div className="">
                <span className="text-cashfer-purple">{name}</span>
              </div>

              <div className="">
                <Dropdown toggler={props.toggler} />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
