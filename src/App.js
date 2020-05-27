import React, { useState, useEffect } from "react";
import Display from "./components/Display.js";
import DrumPad from "./components/DrumPad.js";
import "./App.css";

const soundsData = [
  { id: "", key: "Q", src: "", keyCode: 81 },
  { id: "", key: "W", src: "", keyCode: 87 },
  { id: "", key: "E", src: "", keyCode: 69 },
  { id: "", key: "A", src: "", keyCode: 65 },
  { id: "", key: "S", src: "", keyCode: 83 },
  { id: "", key: "D", src: "", keyCode: 68 },
  { id: "", key: "Z", src: "", keyCode: 90 },
  { id: "", key: "X", src: "", keyCode: 88 },
  { id: "", key: "C", src: "", keyCode: 67 },
];

function App() {
  return (
    <div
      id="drum-machine"
      className="w-50 mx-auto bg-secondary text-light text-center p-3"
    >
      <Display text="henlo" />
      <div className="pad-board">
        {soundsData.map((sound) => (
          <DrumPad
            key={sound.key /*FIX to sound.id*/}
            id={sound.id}
            text={sound.key}
            src={sound.src}
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
// User Story #5: When I click on a .drum-pad element, the audio clip contained in its child audio element should be triggered.

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
