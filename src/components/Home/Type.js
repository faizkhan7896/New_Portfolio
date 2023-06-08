import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "React Native Developer",
          "Cross Platforn App Developer",
        ],
        autoStart: true,
        loop: true,
        // loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
