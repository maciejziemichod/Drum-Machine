import React from "react";

export default function DrumPad(props) {
  return (
    <div id={props.id} className="drum-pad bg-light w-75 text-dark m-2 p-3">
      {props.text}
      <audio src={props.src} className="clip" id={props.text}></audio>
    </div>
  );
}
