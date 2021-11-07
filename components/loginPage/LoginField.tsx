import React, { useState } from "react";
import Link from "next/link";
import { userService } from "../../Services/userService";
import { alertService } from "../../Services/alertService";
import { useRouter } from "next/router";
import Image from "next/image";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Yup from "yup";
import InputFields from "../general/InputFields"
import { useFormik } from "formik";
import ExternalSignInUpGoogle from "./ExternalSignInUpGoogle";

const LoginField = () => {
  const [isLoggingIn, setisLoggingIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const validate = Yup.object({
    password: Yup.string()
      .required("Please enter a password")
      .min(6, "Password too short")
      .test("isValidPass", "must contain at least one uppercase and one number", (value: any, context) => {
        const hasUpperCase = /[A-Z]/.test(value);
        const hasLowerCase = /[a-z]/.test(value);
        const hasNumber = /[0-9]/.test(value);
        let validConditions = 0;
        const numberOfMustBeValidConditions = 3;
        const conditions = [hasLowerCase, hasUpperCase, hasNumber];
        conditions.forEach((condition) =>
          condition ? validConditions++ : null
        );
        if (validConditions >= numberOfMustBeValidConditions) {
          return true;
        }
        return false;
      }),
    email: Yup.string().email("Email is Invalid").required("Required"),
  });

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validate,
  });

  function onSubmit(event: any) {
    //event.preventDefault();
    setisLoggingIn(true);

    const result = userService
      .login(formik.values.email, formik.values.password)
      .then(() => {
        // get return url from query parameters or default to '/'
        const returnUrl = router.query.returnUrl || "/dashboard";
        alertService.success("log in successful");

        var delayInMilliseconds = 1000; //1 second

        setTimeout(function () {
          //your code to be executed after 1 second
          router.push(returnUrl);
        }, delayInMilliseconds);
      })
      .catch(() => {
        alertService.error("incorrect username or password");
      })
      .finally(() => {
        setisLoggingIn(false);
      });

    setUser({
      email: "",
      password: "",
    });
  }

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="flex-col">
      <div className="w-10/12 lg:w-full mx-auto">
        <div className="text-cashfer-purple py-16 text-2xl">Log In</div>
        <div className="mb-12 font-medium text-gray-700 dark:text-gray-300">
          Welcome back
        </div>

        <form action="" onSubmit={formik.handleSubmit}>
          <div className="w-full mx-auto">
            <div className="">
              <div className="flex-col flex-grow">
                {" "}
                <InputFields
                  type="text"
                  name="email"
                  label="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-xs text-red-700 mt-1">
                    {formik.errors.email}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-end">
              <div className="flex-col flex-grow">
                {" "}
                <InputFields
                  type={showPassword ? "text" : "password"}
                  name="password"
                  label="Password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>

              <div
                onClick={handlePasswordToggle}
                className="ml-1 border p-1 h-9 mt-2"
              >
                {showPassword ? (
                  <FontAwesomeIcon
                    size="1x"
                    color="#644C99"
                    icon={faEyeSlash}
                  ></FontAwesomeIcon>
                ) : (
                  <FontAwesomeIcon
                    size="1x"
                    color="#644C99"
                    icon={faEye}
                  ></FontAwesomeIcon>
                )}{" "}
              </div>
            </div>
            <div>
              {" "}
              {formik.touched.password && formik.errors.password ? (
                <div className="text-xs text-red-700 mt-1">
                  {formik.errors.password}
                </div>
              ) : null}
            </div>
          </div>
          <div className="text-xs flex justify-between items-center mt-3">
            <div>
              <div className="flex items-center">
                <input
                  required
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
                    <g fill="none" fillRule="evenodd">
                      <g
                        transform="translate(-9 -11)"
                        fill="#644C99"
                        fillRule="nonzero"
                      >
                        <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                      </g>
                    </g>
                  </svg>
                </div>
                <label htmlFor=""> Stay Logged In?</label>
              </div>
            </div>
            <div>
              {" "}
              <Link href="/forgotPassword">
                <a className="text-cashfer-purple hover:underline">
                  <span className="">Forgot Password</span>
                </a>
              </Link>
            </div>
          </div>
          <div className="bg-cashfer-purple text-white rounded-lg text-center mt-16 hover:opacity-90">
            <button type="submit" className="w-full h-hull p-3">
              {isLoggingIn && (
                <div className="inline-block animate-spin mr-5">
                  {" "}
                  <Image src="/Spinner-1s-200px.png" width="15" height="15" />
                </div>
              )}
              {isLoggingIn == true ? "Logging In..." : "Log In"}
            </button>
          </div>
        </form>
      </div>

      <div className="text-center text-sm text-gray-700 dark:text-gray-300 mt-4">
        Don’t have an account?{" "}
        <Link href="/register">
          <a className="text-cashfer-purple">
            <span className="hover:underline">Sign Up</span>
          </a>
        </Link>
      </div>
      <div className="mt-8">
        <ExternalSignInUpGoogle />
      </div>
    </div>
  );
};

export default LoginField;
