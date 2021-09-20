import React from "react";
import Link from "next/link";

const LoginField = () => {
  return (
    <div className="flex-col">
      <div className="w-10/12 lg:w-5/12 mx-auto">
        <div className="text-cashfer-purple py-16 text-2xl">Log In</div>
        <div className="mb-12 font-medium text-gray-700 dark:text-gray-300">
          Welcome back
        </div>

        <form action="">
          <div className="w-full mx-auto">
            <label className="text-gray-500 text-xs" htmlFor="">
              Email
            </label>
            <div className="">
              <input
                className="w-full border pl-1 focus:outline-none focus:ring
                focus:border-cashfer-purple focus-within:text-cashfer-purple mt-2 h-9 dark:focus-within:text-white"
                type="text"
                placeholder=""
              />
            </div>
          </div>
          <div className="mt-8">
            <label className="text-gray-500 text-xs" htmlFor="">
              Password
            </label>
            <div className="">
              <input
                className="w-full border pl-1 focus:outline-none focus:ring
                focus:border-cashfer-purple focus-within:text-cashfer-purple mt-2 h-9"
                type="text"
                placeholder=""
              />
            </div>
          </div>
          <div className="text-xs flex justify-between items-center mt-2">
            <div>
              <div className="flex items-center">
                <input
                  className=" absolute h-4 w-4 opacity-0"
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
                <div className="bg-white border-2 border-cashfer-purple w-4 h-4 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-cashfer-purple">
                  <svg
                    className="fill-current hidden w-3 h-3 text-cashfer-purple pointer-events-none"
                    version="1.1"
                    viewBox="0 0 17 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <g
                        transform="translate(-9 -11)"
                        fill="#644C99"
                        fill-rule="nonzero"
                      >
                        <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                      </g>
                    </g>
                  </svg>
                </div>
                Stay Logged In?
              </div>
            </div>
            <div>
              {" "}
              <Link href="/forgotpassword">
                <a className="text-cashfer-purple">
                  <span className="">Forgot Password</span>
                </a>
              </Link>
            </div>
          </div>
          <div className="bg-cashfer-purple text-white p-3 rounded-lg text-center mt-16">
            <button>Log In</button>
          </div>
        </form>
      </div>

      <div className="text-center text-sm text-gray-700 dark:text-gray-300 mt-4">
        Don’t have an account?{" "}
        <Link href="/register">
          <a className="text-cashfer-purple">
            <span className="">Sign Up</span>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default LoginField;
