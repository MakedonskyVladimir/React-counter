import React from "react";
import cl from './App.module.css'; 


const App = () => {
  const [count, setCount] = React.useState(0)

  const onClickPlus = () => {
    setCount(count + 1)
  }
  const onClickMinus = () => {
    setCount(count - 1)
  }
  return (
    <>
      <h3 className={cl.title}>Counter</h3>
      <h1>{count}</h1>
      <button onClick={onClickPlus}>Plus</button>
      <button onClick={onClickMinus}>Minus</button>
    </>
  )
}
export default App