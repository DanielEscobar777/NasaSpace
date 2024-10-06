import Image from "next/image";
import React from "react";

const Slide1 = () => {
  return (
    <div >
      <div className="bg-white rounded-lg shadow-lg flex items-center justify-center">
        <Image
          width={1600}
          height={900}
          sizes="100vw"
          alt="background"
          src="/fondoBlanco.png"
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Slide1;
