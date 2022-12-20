import React from "react";

export default function Header() {
  return (
    <div className="header">
      <img
        className="header--image"
        src="./src/assets/images/troll-face.png"
        alt="troll face"
      />
      <h2 className="header--title">Meme Generator</h2>
      <h4 className="header--project">React Course - Project 3</h4>
    </div>
  );
}
