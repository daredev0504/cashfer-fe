import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { userService } from "../../Services/userService";
import { alertService } from "../../Services/alertService";
import Image from "next/image";

const RegisterFields = (props: any) => {
  const [isRegistering, setisRegistering] = useState(false);
  const router = useRouter();
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    maincurrencyid: "19",
    username: "",
    phonenumber: "",
    address: "",
    email: "",
    password: "",
  });
  const [confirmPassword, setconfirmPassword] = useState("");

  const handleChange = (event: any) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
    console.log("you chose ", value);
    
  };


  function handleRegister(event: any) {
    
    if (confirmPassword === user.password) {
      event.preventDefault();
      setisRegistering(true);

      const result = userService
        .register(user)
        .then(() => {
          // get return url from query parameters or default to '/'
          alertService.success("registration successful", {
            keepAfterRouteChange: true,
          });

          var delayInMilliseconds = 1000; //1 second
          console.log(result);

          setTimeout(function () {
            //your code to be executed after 1 second
           router.push("/login");
          }, delayInMilliseconds);
        })
        .catch(() => {
          alertService.error("an error occured");
        })
        .finally(() => {
          setisRegistering(false);
        });

    }
    else{
       alertService.error("passwords does not match");
    }
    
    // setUser({
    //   firstname: "",
    //   lastname: "",
    //   maincurrencyid: "",
    //   username: "",
    //   phonenumber: "",
    //   address: "",
    //   email: "",
    //   password: "",
    // });
    // setconfirmPassword("")
  }

  return (
    <div className="flex-col">
      <div className="w-10/12 lg:w-full mx-auto">
        <div className="text-cashfer-purple py-8 text-2xl">Register</div>
        <div className="mb-3 text-lg font-medium text-gray-700 dark:text-gray-300">
          Just a few basic details about you
        </div>
        <div className="text-xs text-gray-400 mb-12">
          Let’s get you set up, verify your email and start Cashferring !
        </div>

        <form action="" onSubmit={handleRegister}>
          <div className="flex items-center justify-between gap-4 mb-4">
            <div className="w-1/2 mx-auto">
              <label className="text-gray-500 text-xs" htmlFor="">
                First Name
              </label>
              <div className="">
                <input
                  className="w-full border pl-1 focus:outline-none focus:ring
                focus:border-cashfer-purple focus-within:text-purple-400 mt-2 h-9"
                  type="text"
                  placeholder=""
                  required
                  name="firstname"
                  onChange={handleChange}
                  value={user.firstname}
                />
              </div>
            </div>
            <div className="w-1/2">
              <label className="text-gray-500 text-xs" htmlFor="">
                Last Name
              </label>
              <div className="">
                <input
                  className="w-full border pl-1 focus:outline-none focus:ring
                focus:border-cashfer-purple focus-within:text-purple-400 mt-2 h-9"
                  type="text"
                  placeholder=""
                  required
                  name="lastname"
                  onChange={handleChange}
                  value={user.lastname}
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between gap-4 mb-4">
            <div className="w-1/2 mx-auto">
              <label className="text-gray-500 text-xs" htmlFor="">
                Email
              </label>
              <div className="">
                <input
                  className="w-full border pl-1 focus:outline-none focus:ring
                focus:border-cashfer-purple focus-within:text-purple-400 mt-2 h-9"
                  type="text"
                  placeholder=""
                  required
                  name="email"
                  onChange={handleChange}
                  value={user.email}
                />
              </div>
            </div>
            <div className="w-1/2">
              <label className="text-gray-500 text-xs" htmlFor="">
                Username
              </label>

              <div className="">
                <input
                  className="w-full border pl-1 focus:outline-none focus:ring
                focus:border-cashfer-purple focus-within:text-purple-400 mt-2 h-9"
                  type="text"
                  placeholder=""
                  required
                  name="username"
                  onChange={handleChange}
                  value={user.username}
                />
              </div>
            </div>

            <div className="w-1/2">
              <div className="">
                <label className="text-gray-500 text-xs" htmlFor="">
                  Currency
                </label>
                <select
                  className="text-sm w-full border pl-1 focus:outline-none focus:ring
                focus:border-cashfer-purple mt-2 h-9"
                  placeholder=""
                  value={user.maincurrencyid}
                  name="maincurrencyid"
                  onChange={handleChange}
                >
                  {props.data.map((option: any) => (
                    <option
                      className="text-purple-400"
                      value={option.id}
                      key={option.code}
                    >
                      {option.code}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between gap-4 mb-4">
            <div className="w-1/2 mx-auto">
              <label className="text-gray-500 text-xs" htmlFor="">
                Phone Number
              </label>
              <div className="">
                <input
                  className="w-full border pl-1 focus:outline-none focus:ring
                focus:border-cashfer-purple focus-within:text-purple-400 mt-2 h-9"
                  type="text"
                  placeholder=""
                  required
                  name="phonenumber"
                  onChange={handleChange}
                  value={user.phonenumber}
                />
              </div>
            </div>
            <div className="w-1/2">
              <label className="text-gray-500 text-xs" htmlFor="">
                Address
              </label>
              <div className="">
                <input
                  className="w-full border pl-1 focus:outline-none focus:ring
                focus:border-cashfer-purple focus-within:text-purple-400 mt-2 h-9"
                  type="text"
                  placeholder=""
                  required
                  name="address"
                  onChange={handleChange}
                  value={user.address}
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between gap-4 mb-4">
            <div className="w-1/2 mx-auto">
              <label className="text-gray-500 text-xs" htmlFor="">
                Password
              </label>
              <div className="">
                <input
                  className="w-full border pl-1 focus:outline-none focus:ring
                focus:border-cashfer-purple focus-within:text-purple-400 mt-2 h-9"
                  type="password"
                  placeholder=""
                  required
                  name="password"
                  onChange={handleChange}
                  value={user.password}
                />
              </div>
            </div>
            <div className="w-1/2">
              <label className="text-gray-500 text-xs" htmlFor="">
                Confirm Password
              </label>
              <div className="">
                <input
                  className="w-full border pl-1 focus:outline-none focus:ring
                focus:border-cashfer-purple focus-within:text-purple-400 mt-2 h-9"
                  type="password"
                  placeholder=""
                  onChange={(event) => setconfirmPassword(event.target.value)}
                  required
                  value={confirmPassword}
                  name="confirmPassword"
                />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/5 bg-cashfer-purple text-white rounded-lg text-center mt-16 hover:opacity-90">
            <button className="w-full h-hull p-3">
              {isRegistering && (
                <div className="inline-block animate-spin mr-5">
                  {" "}
                  <Image src="/Spinner-1s-200px.png" width="15" height="15" />
                </div>
              )}
              {isRegistering == true ? "Registering..." : "Register"}
            </button>
          </div>
        </form>
      </div>

      <div className=" text-center lg:text-left text-sm text-gray-700 dark:text-gray-300 mt-4">
        Already have an account?{" "}
        <Link href="/login">
          <a className="text-cashfer-purple">
            <span className="">Log In</span>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default RegisterFields;
