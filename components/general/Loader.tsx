import React from 'react'
import Image from 'next/image';

const Loader = ({data}: any) => {
  
    return (
      <div className="bg-gray-900 flex w-full h-screen justify-center items-center text-3xl text-cashfer-light-purple">
        <div className="inline-block animate-spin mr-5">
          {" "}
          <Image src="/Spinner-1s-200px.png" width="15" height="15" />
        </div>
        Loading...
      </div>
    );
}

export default Loader
