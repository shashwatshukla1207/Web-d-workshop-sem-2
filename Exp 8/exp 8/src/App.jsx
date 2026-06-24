import React, { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  const increment = ()=> { 
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => { 
    setCount(0);
  };
    return (
    <div className="container">
        <h1>React Counter Application</h1>
        <h2 className="counter">{count}</h2>
        <div className="buttons">
          <button onClick={increment}>Increment (+)</button>
          <button onClick={decrement}>Decrement (-)</button>
            <button onClick={reset}>Reset</button>
      </div>
        <p> Name- Shashwat Shukla</p>
  <p> 2503201001061</p>
  <p>2025b01011273</p>
    </div>
  );
}
export default App;