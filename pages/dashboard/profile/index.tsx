import * as React from "react";
import Head from "next/head";
import Tabs from "../../../components/general/Tabs";
import ProfileDetails from "../../../components/profilePage/ProfileDetails";
import FollowSideBar from "../../../components/profilePage/FollowSideBar";

interface IProfileProps {}

const Profile: React.FunctionComponent<IProfileProps> = (props): any => {
  return (
    <div>
      <Head>
        <title>Transaction</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/cashfer favicon.svg" />
      </Head>

      <div className="dark:bg-gray-900 bg-cashfer-light-purple">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            {" "}
            <ProfileDetails />
            <div>
              <Tabs>
                <div label="Portfolio">
                  this is <i>portfolio</i> tab
                </div>
                <div label="About">
                  this is <i>about</i> tab
                </div>
              </Tabs>
            </div>
          </div>

          <div className="dark:bg-gray-800 hidden lg:block w-80 bg-cashfer-medium-purple h-screen">
            {" "}
            <FollowSideBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
