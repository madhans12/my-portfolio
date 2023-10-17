import React from "react";
import SkilsComp from "./SkilsData";
import { SkilsData } from "./SkilsData";

const Skils = () => {
  const Skil = SkilsData.skil;
  return (
    <div className="skil-container">
      {Skil.map((skil) => (
        <SkilsComp Skils={skil} key={skil.id} />
      ))}
    </div>
  );
};

export default Skils;
