import * as React from "react";
import { userData } from "../../data";
import Link from "next/link";

const FollowList = () => {
  const [userList, setuserList] = React.useState(userData);

  return (
    <div className="my-12">
      {userList.map((user) => (
       
          <div>
            <UserFollow key={user.username} user={user} />
          </div>
        
      ))}
    </div>
  );
};

export default FollowList;

const UserFollow = (props: any) => {
  const { imgUrl, username, name } = props.user;

  return (
    <>
      <div className=" dark:bg-gray-800 w-full mb-4 cursor-pointer hover:bg-gray-50 flex justify-between items-center lg:w-6/12 bg-white lg:mb-1 mx-auto rounded-lg">
        <div className="flex items-start w-full">
          <Link href={"profile/" + username}>
            <div className="w-full p-6 flex">
              <div className="border-2 border-cashfer-purple h-16 w-16 rounded-full overflow-hidden mr-4">
                <img className=" w-full h-full object-cover" src={imgUrl} />
              </div>
              <div>
                <div className=" dark:text-white text-cashfer-dark">{name}</div>
                <div className=" dark:text-purple-500 text-cashfer-purple text-xs">
                  {"@" + username}
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div onClick={()=>alert("followed")} className="mr-6 text-sm bg-cashfer-purple text-white px-4 py-2 rounded-lg">
          follow
        </div>
      </div>
    </>
  );
};
