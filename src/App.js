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
    // removing dashes
    setDisplay(e.target.id.split("-").join(" "));
  };

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

// ===== TODO =====

// example: https://codepen.io/freeCodeCamp/full/MJyNMd
// mp3 from https://www.fesliyanstudios.com/royalty-free-sound-effects-download/drums-273

// User Story #6: When I press the trigger key associated with each .drum-pad, the audio clip contained in its child audio
// element should be triggered (e.g. pressing the Q key should trigger the drum pad which contains the string "Q", pressing the
// W key should trigger the drum pad which contains the string "W", etc.).

// User Story #7: When a .drum-pad is triggered, a string describing the associated audio clip is displayed as the inner text of
//  the #display element (each string must be unique).

// User Story #1: I should be able to see an outer container with a corresponding id="drum-machine" that contains all other elements.
// User Story #2: Within #drum-machine I can see an element with a corresponding id="display".
// User Story #3: Within #drum-machine I can see 9 clickable drum pad elements, each with a class name of drum-pad, a unique id
// that describes the audio clip the drum pad will be set up to trigger, and an inner text that corresponds to one of the following
// keys on the keyboard: Q, W, E, A, S, D, Z, X, C. The drum pads MUST be in this order.
// User Story #4: Within each .drum-pad, there should be an HTML5 audio element which has a src attribute pointing to an audio
// clip, a class name of clip, and an id corresponding to the inner text of its parent .drum-pad (e.g. id="Q", id="W", id="E" etc.).
// User Story #5: When I click on a .drum-pad element, the audio clip contained in its child audio element should be triggered.
