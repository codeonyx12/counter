import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const getInitialCount = () => {
    const storedCount = localStorage.getItem("count");
    return storedCount ? parseInt(storedCount, 10) : 0;
  };

  const [count, setCount] = useState(getInitialCount);

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  function increaseButtonOnClick() {
    setCount((prevCount) => prevCount + 1);
  }

  function decreaseButtonOnClick() {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  }
  return (
    <div className="App">
      <button onClick={increaseButtonOnClick} className="increaseButton">
        +
      </button>
      <span className="counter">{count}</span>
      <button onClick={decreaseButtonOnClick} className="decreaseButton">
        -
      </button>
    </div>
  );
}

export default App;
