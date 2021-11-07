import React, { useState } from "react";
import { userService } from "../../Services/userService";
import GoogleLogin from "react-google-login";
import { useRouter } from "next/router";
import { alertService } from "../../Services/alertService";
import GoogleButton from "react-google-button";

const ExternalSignInUpGoogle = () => {
  const [googleData, setgoogleData] = useState({});
  const router = useRouter();

  const handleLogin = async (googleData: any) => {
    // const res = await fetch("https://localhost:44362/api/Auth/google", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     idToken: googleData.tokenId,
    //     provider:"Google"
    //   }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    // const data = await res.json();

    const result = userService
      .ExternalLogin(googleData)
      .then(() => {
        //get return url from query parameters or default to '/'
        const returnUrl = router.query.returnUrl || "/dashboard";
        alertService.success("log in successful");
        console.log("$$$$$$$$$$$$$");
        var delayInMilliseconds = 1000; //1 second
        setTimeout(function () {
          //your code to be executed after 1 second
          router.push(returnUrl);
        }, delayInMilliseconds);
      })
      .catch(() => {
        //alertService.error("incorrect username or password");
      })
      .finally(() => {});

    // store returned user somehow
  };
  const responseGoogle = (response: any) => {
    console.log(response);
  };

  return (
    <div>
      <div className="mt-4 w-7/12 lg:w-8/12 mx-auto">
        <div className="mt-4">
          {" "}
          <GoogleLogin
            clientId={process.env.cliend_id}
            render={(renderProps) => (
              <div className="border w-2/5">
                {" "}
                <GoogleButton onClick={renderProps.onClick} />
              </div>
            )}
            buttonText="Log in with Google"
            onSuccess={handleLogin}
            onFailure={handleLogin}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      </div>
    </div>
  );
};

export default ExternalSignInUpGoogle;
