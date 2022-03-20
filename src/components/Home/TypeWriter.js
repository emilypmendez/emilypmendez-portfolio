import React from "react";
import Typewriter from "typewriter-effect";

function TypeWriter() {
  return (
    <Typewriter
      options={{
        strings: [
          "Integrity. Innovation. Impact.",
          "Front End Developer 💅",
          "Coffee Enthusiast 🙃 ☕ 👌",
          "Music Lover 🎶🎵🎶"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50
      }}
    />
  );
}

export default TypeWriter;
