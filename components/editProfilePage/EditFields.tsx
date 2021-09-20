import React from 'react'

const EditFields = () => {
    return (
      <>
        <div className="w-full px-8 lg:px-0 lg:w-8/12 mx-auto flex-col my-12">
          <div className="border-2 border-cashfer-purple h-32 w-32 rounded-full overflow-hidden mx-auto my-8">
            <img className=" w-full h-full object-cover" src="/chelsea.jpg" />
            <div className="bg-white z-10 absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                <path
                  fill-rule="evenodd"
                  d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>

          <div className="w-full py-8 lg:w-11/12 mx-auto bg-white lg:p-12 rounded-lg">
            {" "}
            <form action="">
              <div className="block w-10/12 lg:w-full mx-auto lg:mx-0 lg:flex lg:items-center lg:justify-between lg:gap-4 mb-4">
                <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
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
                <div className="w-full lg:w-1/2">
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

              <div className="block w-10/12 lg:w-full mx-auto lg:mx-0 lg:flex lg:items-center lg:justify-between lg:gap-4 mb-4">
                <div className="w-full lg:w-1/2 mx-auto mb-4 lg:mb-0">
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
                <div className="w-full lg:w-1/2 mx-auto">
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
              </div>

              <div className="block w-10/12 lg:w-full mx-auto lg:mx-0 lg:flex lg:items-center lg:justify-between lg:gap-4 mb-4">
                <div className="w-full lg:w-1/2 mx-auto mb-4 lg:mb-0">
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
                <div className="w-full lg:w-1/2 mx-auto">
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

              <div className="w-10/12 lg:w-1/5 bg-cashfer-purple text-white p-3 rounded-lg text-center mt-12 mx-auto">
                <button>Save</button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
}

export default EditFields
