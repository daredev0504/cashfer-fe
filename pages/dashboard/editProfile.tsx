import React from 'react'
import Head from "next/head";
import Layout from "../../components/dashboardPage/Layout";

import { useTheme } from "next-themes";
import EditFields from '../../components/editProfilePage/EditFields';

const editProfile = () => {
    const { theme, setTheme } = useTheme();

    const Toggle = () => {
      setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
      <div>
        <Head>
          <title>Edit Profile</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/cashfer favicon.svg" />
        </Head>
        <div className="bg-cashfer-light-purple">
          <Layout toggle={Toggle}>
            <div>
             <EditFields />
            </div>
          </Layout>
        </div>
      </div>
    );
}

export default editProfile
