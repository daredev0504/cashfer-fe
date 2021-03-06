import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";
import { userService } from "../Services/userService";
import { alertService } from "../Services/alertService";
import Navbar from "../components/landingPage/Navbar";
import Footer from "../components/landingPage/Footer";

const forgotPassword = () => {
  const [isLoggingIn, setisLoggingIn] = useState(false);
  const [email, setEmail] = useState("");
  const [show, setshow] = useState(false)
  const router = useRouter();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setisLoggingIn(true);

    const data = {
      email: email,
      clientURI: "http://localhost:3000/resetPassword",
    };

    const result = userService
      .forgotPassword(data)
      .then(() => {
        // get return url from query parameters or default to '/'
        //const returnUrl = router.query.returnUrl || "/dashboard";
        alertService.success("reset link sent !");

       setshow(true)
      })
      .catch(() => {
       
      })
      .finally(() => {
        setisLoggingIn(false);
      });

    setEmail("");
  };


  return (
    <div className="">
      <Navbar/>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/cashfer favicon.svg" />
      </Head>
      {show == true ? (
        <div className="w-10/12 lg:w-3/12 mx-auto  bg-cashfer-medium-purple dark:bg-gray-800 p-12 rounded-md mt-8">
          if we found the account associated with this email, you would receive
          a message soon. Please check your inbox and spam folders
          <div className="bg-cashfer-purple text-white rounded-lg text-center mt-8 hover:opacity-90">
            <button className="w-full h-full p-3">
              Resend Password Reset Email
            </button>
          </div>
        </div>
      ) : (
        <form className="pb-24" action="" onSubmit={handleSubmit}>
          <div className="w-10/12 lg:w-3/12 mx-auto  bg-cashfer-medium-purple dark:bg-gray-800 p-12 rounded-md mt-8 mb-7">
            <div className="text-2xl">Change Password</div>
            <p className="mb-8 text-xs mt-4">
              Enter your email address, if this email exist with us, we will
              send you a password reset link
            </p>
            <label className="text-gray-500 text-xs" htmlFor="">
              Email
            </label>
            <div className="">
              <input
                className="w-full border pl-1 focus:outline-none focus:ring
                focus:border-cashfer-purple focus-within:text-cashfer-purple mt-2 h-9 dark:focus-within:text-white"
                type="text"
                placeholder=""
                onChange={(event) => setEmail(event.target.value)}
                name="email"
                value={email}
                required
              />
            </div>

            <div className="bg-cashfer-purple text-white rounded-lg text-center mt-8 hover:opacity-90">
              <button className="w-full h-hull p-3">
                {isLoggingIn && (
                  <div className="inline-block animate-spin mr-5">
                    {" "}
                    <Image src="/Spinner-1s-200px.png" width="15" height="15" />
                  </div>
                )}
                {isLoggingIn == true ? "Sending..." : "Send Reset Link"}
              </button>
            </div>
          </div>
        </form>
      )}
      <Footer/>
    </div>
  );
};

export default forgotPassword;
