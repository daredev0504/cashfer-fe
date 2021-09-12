import React from 'react'
import Image from "next/image";

const LoginIllustration = () => {
    return (
      <div className="lg:flex-col bg-cashfer-purple lg:h-screen">
        <div className="p-12">
          <Image src="/cashfer logo light.png" width="156" height="35" />
        </div>
        <div className="text-4xl text-white mx-16 mb-8">
          Continue <br /> <span className="font-bold"> CashFerring</span>
        </div>
        <div className="m-16">
          <Image src="/wallet illustration.png" width="350" height="300" />
        </div>
      </div>
    );
}

export default LoginIllustration
