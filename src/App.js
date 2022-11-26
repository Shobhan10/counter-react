import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header>
        <h1>Counter App</h1>
      </header>
      <h3>Current value of count is {count}</h3>
      <button onClick={() => setCount(0)}>RESET COUNTER</button>
      <button onClick={() => setCount(count + 1)}>INCREASE COUNTER</button>
      <button onClick={() => setCount(count - 1)}>DECREASE COUNTER</button>
    </div>
  );
}

export default App;
