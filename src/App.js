import React, { useState, useEffect } from "react";
import Display from "./components/Display.js";
import DrumPad from "./components/DrumPad.js";
import "./App.css";

const soundsData = [
  {
    id: "Bass",
    key: "Q",
    src: "https://www.fesliyanstudios.com/play-mp3/6650",
    keyCode: 81,
  },
  {
    id: "Sticks",
    key: "W",
    src: "https://www.fesliyanstudios.com/play-mp3/6679",
    keyCode: 87,
  },
  {
    id: "Hi-Hat-Closed",
    key: "E",
    src: "https://www.fesliyanstudios.com/play-mp3/6698",
    keyCode: 69,
  },
  {
    id: "Hi-Hat-Open",
    key: "A",
    src: "https://www.fesliyanstudios.com/play-mp3/6709",
    keyCode: 65,
  },
  {
    id: "Snare",
    key: "S",
    src: "https://www.fesliyanstudios.com/play-mp3/6764",
    keyCode: 83,
  },
  {
    id: "Floor-Tom",
    key: "D",
    src: "https://www.fesliyanstudios.com/play-mp3/6686",
    keyCode: 68,
  },
  {
    id: "Medium-Tom",
    key: "Z",
    src: "https://www.fesliyanstudios.com/play-mp3/6718",
    keyCode: 90,
  },
  {
    id: "Small-Tom",
    key: "X",
    src: "https://www.fesliyanstudios.com/play-mp3/6753",
    keyCode: 88,
  },
  {
    id: "Splash",
    key: "C",
    src: "https://www.fesliyanstudios.com/play-mp3/6780",
    keyCode: 67,
  },
];

function App() {
  const [display, setDisplay] = useState("");

  //gives a quick background glimpse
  const changeBackground = (element) => {
    const pad = document.getElementById(element);
    pad.classList.add("clicked");
    setTimeout(() => {
      pad.classList.remove("clicked");
    }, 100);
  };

  const handleClick = (e) => {
    const sound = document.getElementById(e.target.innerText);
    // it makes possible to spam any button, there is no need to wait until the sound stops playing
    sound.currentTime = 0;
    sound.play();
    changeBackground(e.target.id);
    // setting display data and removing dashes
    setDisplay(e.target.id.split("-").join(" "));
  };

  const handleKeyPress = (e) => {
    for (let elem of soundsData) {
      if (e.keyCode === elem.keyCode) {
        const sound = document.getElementById(elem.key);
        // it makes possible to spam any button, there is no need to wait until the sound stops playing
        sound.currentTime = 0;
        sound.play();
        changeBackground(elem.id);
        // setting display data and removing dashes
        setDisplay(elem.id.split("-").join(" "));
        break;
      }
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    // cleaning up listener
    return () => document.removeEventListener("keydown", handleKeyPress);
  });

  return (
    <div
      id="drum-machine"
      className="w-50 mx-auto bg-secondary text-light text-center p-3"
    >
      <Display text={display} />
      <div className="pad-board">
        {soundsData.map((sound) => (
          <DrumPad
            key={sound.id}
            id={sound.id}
            text={sound.key}
            src={sound.src}
            handleClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
