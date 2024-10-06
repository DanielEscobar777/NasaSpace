"use client";
import React, { useState } from "react";
import { RangeInput } from "./Componentes/RangeInput";
import MyMap from "./Componentes/MyMap";
type Props = {};

function MapContainer({}: Props) {
  const [opacityValue, setOpacityValue] = useState(0.5); // Valor inicial del rango
  const handleRangeChange = (event) => {
    setOpacityValue(event.target.value);
  };
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <h2 className="bg-slate-200 p-5 text-2xl font-semibold text-center shadow-md rounded-lg mt-5">
        My Map
      </h2>
      <div className="mt-5 w-full max-w-md px-4">
        <RangeInput value={opacityValue} handleChange={handleRangeChange} />
      </div>
      <div className="relative w-full max-w-5xl h-[600px] mt-4 rounded-lg overflow-hidden shadow-lg">
        <MyMap opacity={opacityValue} />
      </div>
    </div>
  );
}

export default MapContainer;
