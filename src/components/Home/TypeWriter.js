import React from "react";
import Typewriter from "typewriter-effect";

function TypeWriter() {
  return (
    <Typewriter
      options={{
        strings: [
          "Integrity. Innovation. Impact.",
          "Front End Developer π",
          "Coffee Enthusiast π β π",
          "Music Lover πΆπ΅πΆ"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50
      }}
    />
  );
}

export default TypeWriter;
