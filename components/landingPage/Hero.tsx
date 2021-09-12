import React from "react";

const Hero = () => {
  return (
    <div className="container mx-auto mt-24">
      <div className="text-5xl lg:text-7xl font-bold text-center text-cashfer-purple mb-8">
        Transfer Money with Speed
      </div>
      <div className=" leading-relaxed w-4/5 lg:w-1/2 text-gray-400 mx-auto text-center">
        Make seamless financial transactions, create multiple wallets with
        different currencies, you can also upgrade to a premium plan for more
        access to what the platform can give you.
      </div>
      <div className="hover:opacity-90 w-1/2 lg:w-1/5 p-4 rounded-lg mx-auto text-center mt-16 text-white bg-cashfer-purple">
        <a onClick={()=>alert("this is the homepage")} href="">Start Cashferring</a>
      </div>
    </div>
  );
};

export default Hero;
