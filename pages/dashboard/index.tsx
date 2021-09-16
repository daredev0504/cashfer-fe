import React from "react";
import Head from "next/head";
import WalletBalance from "../../components/walletPage/WalletBalance";
import Tabs from "../../components/general/Tabs";
import Layout from "../../components/dashboardPage/Layout";
import SendRecieveMoney from "../../components/walletPage/SendRecieveMoney";
import TableList from "../../components/general/TableTryOut";

const Index = () => {
  return (
    <div>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/cashfer favicon.svg" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="bg-cashfer-light-purple">
        <Layout>
          <div>
            <SendRecieveMoney />
            <WalletBalance />
            <div className="">
              <TableList />
            </div>
          </div>
        </Layout>
      </div>
    </div>
  );
};

export default Index;