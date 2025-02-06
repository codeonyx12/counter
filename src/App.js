import { useState, useEffect } from "react";
import "./App.css";
import CounterButton from "./components/counter-button/index.jsx";

function App() {
  const getInitialCount = () => {
    const storedCount = localStorage.getItem("count");
    return storedCount ? parseInt(storedCount, 10) : 0;
  };

  const [count, setCount] = useState(getInitialCount);

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  return (
    <div className="app">
      <CounterButton type="inc" setter={setCount} />
      <span className="counter">{count}</span>
      <CounterButton type="dec" setter={setCount} />
    </div>
  );
}

export default App;
