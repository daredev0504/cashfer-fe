import * as React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

interface IProfileDetailsProps {
}

const ProfileDetails: React.FunctionComponent<IProfileDetailsProps> = (props):any => {
  return (
    <div>
      <div className="dark:bg-gray-800 w-11/12 mt-4 lg:mt-16 rounded-2xl lg:w-3/5 bg-white mx-auto p-8">
        <div className="h-16 w-16 mx-auto lg:mx-0 border-2 border-cashfer-purple lg:h-32 lg:w-32 rounded-full overflow-hidden ">
          <img className="  w-full h-full object-cover" src="/chelsea.jpg" />
        </div>

        <div className="dark:text-white block text-center lg:flex lg:items-baseline lg:gap-2 my-4 text-cashfer-dark text-3xl">
          <div> Peter Adebimpe</div>
          <div className="text-sm text-cashfer-purple">@tosingh54</div>
        </div>

        <div className="dark:text-white text-center lg:text-left font-semibold text-cashfer-dark">
          09032290095
        </div>
        <div className="dark:text-white text-center lg:text-left text-cashfer-dark mb-8">
          petoski.ade@gmail.com
        </div>

        <div className="w-full flex justify-between items-center lg:w-6/12">
          <div className="rounded-md bg-cashfer-purple text-white text-sm px-4 py-2">
            {" "}
            Edit Profile
          </div>
          <div className="rounded-md text-sm border-2 border-dotted border-cashfer-purple px-4 py-2">
            <FontAwesomeIcon
              size="1x"
              color="#644C99"
              icon={faLink}
            ></FontAwesomeIcon>
            &nbsp; Copy link
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
