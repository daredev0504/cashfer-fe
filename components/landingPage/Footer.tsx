import React from "react";
import Image from "next/image";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faDribbble } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="block text-center mt-16 bg-cashfer-purple p-4 lg:flex lg:justify-around lg:items-center">
      <div className="mb-4 lg:mb-0">
        <Image src="/cashfer logo light.png" width="156" height="35" />
      </div>
      <div className="text-white mb-4 lg:mb-0">
        Made with{" "}
        <span>
          {" "}
          <FontAwesomeIcon color="#C2A5FF" icon={faHeart}></FontAwesomeIcon>
        </span>{" "}
        by Peter Adebimpe
      </div>
      <div>
        <div className="w-2/5 flex justify-evenly lg:gap-4 mx-auto lg:items-center">
          <div className="relative rounded-full px-2 py-1">
            <a href="">
              {" "}
              <FontAwesomeIcon color="white" icon={faTwitter}></FontAwesomeIcon>
            </a>
          </div>
          <div className="rounded-full px-2 py-1">
            <a href="#">
              {" "}
              <FontAwesomeIcon
                color="white"
                icon={faLinkedin}
              ></FontAwesomeIcon>
            </a>
          </div>
          <div className="rounded-full px-2 py-1">
            <a href="https://dribbble.com/pragmatic_darey">
              {" "}
              <FontAwesomeIcon
                color="white"
                icon={faDribbble}
              ></FontAwesomeIcon>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Footer;
