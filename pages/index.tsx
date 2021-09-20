import type { NextPage } from "next";
import Head from "next/head";
import Feature from "../components/landingPage/Feature";
import Footer from "../components/landingPage/Footer";
import Hero from "../components/landingPage/Hero";
import Navbar from "../components/landingPage/Navbar";



const Home: NextPage = () => {
  
  return (
    <div className="">
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/cashfer favicon.svg" />
      </Head>
      <div>
        <Navbar />
        <Hero />
        <Feature />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
