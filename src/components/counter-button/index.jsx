import React from "react";
import "../../App.css";

function CounterButton({ type, setter }) {
  function increaseButtonOnClick() {
    setter((prevCount) => prevCount + 1);
  }

  function decreaseButtonOnClick() {
    setter((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  }

  return (
    <button
      onClick={type === "inc" ? increaseButtonOnClick : decreaseButtonOnClick}
      className={type === "inc" ? "increaseButton" : "decreaseButton"}
    >
      {type === "inc" ? "+" : "-"}
    </button>
  );
}

export default CounterButton;
