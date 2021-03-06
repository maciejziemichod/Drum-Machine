import React from "react";

export default function Display(props) {
  return (
    <div
      id="display"
      className="bg-primary w-50 text-light mx-auto p-3 mb-4"
      style={{ height: "3.5rem" }}
    >
      {props.text}
    </div>
  );
}
