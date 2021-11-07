import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import "../styles/globals.css";
import "../styles/misc.css";
import { ThemeProvider } from "next-themes";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import type { AppProps } from "next/app";
import { userService } from "../Services/userService";
import { Alert } from "../components/general/Alerts";
import Layout from "../components/dashboardPage/Layout";
import { useTheme } from "next-themes";

//axios.defaults.headers.common = { Authorization: `Bearer ${userService.userValue.data.accessToken}` };
// console.log(userService.userValue);

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [authorized, setAuthorized] = useState(false);
  const { theme, setTheme } = useTheme();

  const publicPaths = [
    "/login",
    "/register",
    "/",
    "/forgotPassword",
    "/resetPassword",
  ];

  const Toggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    // on initial load - run auth check
    authCheck(router.asPath);

    // on route change start - hide page content by setting authorized to false
    const hideContent = () => setAuthorized(false);
    router.events.on("routeChangeStart", hideContent);

    // on route change complete - run auth check
    router.events.on("routeChangeComplete", authCheck);

    // unsubscribe from events in useEffect return function
    return () => {
      router.events.off("routeChangeStart", hideContent);
      router.events.off("routeChangeComplete", authCheck);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function authCheck(url: string) {
    // redirect to login page if accessing a private page and not logged in
    setUser(userService.userValue);

    const path = url.split("?")[0];
    if (!userService.userValue && !publicPaths.includes(path)) {
      setAuthorized(false);
      router.push({
        pathname: "/login",
        query: { returnUrl: router.asPath },
      });
    } else {
      setAuthorized(true);
    }
  }

  return (
    <ThemeProvider attribute="class">
      <div className="w-full">
        {" "}
        <Alert />
      </div>

      {publicPaths.includes(router.pathname) == true ? (
        <Component {...pageProps} />
      ) : (
        <Layout toggle={Toggle}>
          {authorized && <Component {...pageProps} />}
        </Layout>
      )}
      
    </ThemeProvider>
  );
}
export default MyApp;
