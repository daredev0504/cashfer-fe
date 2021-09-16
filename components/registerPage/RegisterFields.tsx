import React from 'react'
import Link from "next/link";

const RegisterFields = () => {
    return (
      <div className="flex-col">
        <div className="w-10/12 lg:w-full mx-auto">
          <div className="text-cashfer-purple py-8 text-2xl">Register</div>
          <div className="mb-3 text-lg font-medium text-gray-700">
            Just a few basic details about you
          </div>
          <div className="text-xs text-gray-400 mb-12">
            Let’s get you set up, verify your email and start Cashferring !
          </div>

          <form action="">
            <div className="flex items-center justify-between gap-4 mb-4">
              <div className="w-1/2 mx-auto">
                <label className="text-gray-500 text-xs" htmlFor="">
                  First Name
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
              <div className="w-1/2">
                <label className="text-gray-500 text-xs" htmlFor="">
                  Last Name
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
            </div>

            <div className="flex items-center justify-between gap-4 mb-4">
              <div className="w-1/2 mx-auto">
                <label className="text-gray-500 text-xs" htmlFor="">
                  Email
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
              <div className="w-1/2">
                <label className="text-gray-500 text-xs" htmlFor="">
                  Username
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
              <div className="w-1/2">
                <div className="">
                  <input
                    className="w-full border pl-1 focus:outline-none focus:ring
                focus:border-cashfer-purple focus-within:text-cashfer-purple mt-2 h-9"
                    type="text"
                    placeholder=""
                  />
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
                focus:border-cashfer-purple focus-within:text-cashfer-purple mt-2 h-9"
                    type="text"
                    placeholder=""
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
                focus:border-cashfer-purple focus-within:text-cashfer-purple mt-2 h-9"
                    type="text"
                    placeholder=""
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
                focus:border-cashfer-purple focus-within:text-cashfer-purple mt-2 h-9"
                    type="text"
                    placeholder=""
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
                focus:border-cashfer-purple focus-within:text-cashfer-purple mt-2 h-9"
                    type="text"
                    placeholder=""
                  />
                </div>
              </div>
            </div>

            <div className="w-1/5 bg-cashfer-purple text-white p-3 rounded-lg text-center mt-12">
              <button>Register</button>
            </div>
          </form>
        </div>

        <div className="text-sm text-gray-700 mt-4">
          Already have an account?{" "}
          <Link href="/login">
            <a className="text-cashfer-purple">
              <span className="">Log In</span>
            </a>
          </Link>
        </div>
      </div>
    );
}

export default RegisterFields
