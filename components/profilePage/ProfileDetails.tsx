import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { userService } from "../../Services/userService";
import Link from "next/link";


interface IProfileDetailsProps {}

const ProfileDetails: React.FunctionComponent<IProfileDetailsProps> = (
  props
): any => {
  const [user, setUser] = React.useState({
    name: "",
    userName: "",
    phoneNumber: "",
    email: "",
    avatarUrl:""
  });


  React.useEffect(() => {
    const getUser = () => {
      userService
        .getUser()
        .then((data) => {
          setUser(data.data);
        })
        .catch(() => {
          userService.logout();
        });
    };
    console.log("&&&&&&&&&&&&&&&&&", user);
    getUser();
  }, []);

  return (
    <div className="">
      <div className="dark:bg-gray-800 w-11/12 mt-4 lg:mt-16 rounded-2xl lg:w-3/5 bg-white mx-auto p-8 mb-8">
        <div className="h-16 w-16 mx-auto lg:mx-0 border-2 border-cashfer-purple lg:h-32 lg:w-32 rounded-full overflow-hidden ">
          <img className="  w-full h-full object-cover" src={user.avatarUrl == null ? "https://cdn-icons-png.flaticon.com/512/149/149071.png":user.avatarUrl} />
        </div>

        <div className="dark:text-white block text-center lg:flex lg:items-baseline lg:gap-2 my-4 text-cashfer-dark text-3xl">
          <div>{user.name}</div>
          <div className="text-sm text-cashfer-purple">@{user.userName}</div>
        </div>

        <div className="dark:text-gray-300 text-center lg:text-left font-semibold text-cashfer-dark">
          {user.phoneNumber}
        </div>
        <div className="dark:text-gray-300 text-center lg:text-left text-cashfer-dark mb-8">
          {user.email}
        </div>

        <div className="w-full flex justify-between items-center lg:w-6/12">
          <Link href="profile/edit">
            <div className=" cursor-pointer rounded-md bg-cashfer-purple text-white text-sm px-4 py-2">
              {" "}
              Edit Profile
            </div>
          </Link>
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
