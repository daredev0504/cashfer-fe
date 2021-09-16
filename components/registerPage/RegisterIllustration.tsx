import React from 'react'
import Image from "next/image";

const RegisterIllustration = () => {
    return (
      <div>
        <div className="lg:flex-col bg-cashfer-purple lg:h-screen">
          <div className="p-12">
            <Image src="/cashfer logo light.png" width="156" height="35" />
          </div>
          <div className="text-3xl font-semibold leading-relaxed text-white mx-16 mb-8">
            A few click away from creating your CashFer Wallet
          </div>
          <div className="m-16">
            <Image src="/wallet-reg illustration.png" width="250" height="300" />
          </div>
        </div>
      </div>
    );
}

export default RegisterIllustration
