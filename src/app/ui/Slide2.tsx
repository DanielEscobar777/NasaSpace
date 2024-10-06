import Image from "next/image";
import React from "react";

const Slide2 = () => {
  return (
    <div className="container"
    >
      <div className="bg-zinc-600 rounded-lg    p-4 shadow-lg flex items-center justify-center">
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

export default Slide2;
