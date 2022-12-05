
import React, { useState } from "react";
function App() {
  
let [count, setCount] = useState(100)
let counterPlus = () => {
  setCount(count++)
}
  return (

    <>
      <h1>Счетчик</h1>
      <h2>{count}</h2>
      <button onClick={counterPlus}>+</button>
      <button onClick={() => setCount(count--)}>-</button>
    </>

  )
}

export default App;
