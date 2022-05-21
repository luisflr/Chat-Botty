import React from "react";

export default function CustomButton({ actionButton, text, color }) {
  const getColor = "btn btn-outline-" + color;

  return (
    <button onClick={actionButton} className={getColor}>
      {text}
    </button>
  );
}
