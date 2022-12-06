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
      <h1 className={cl.counter}>{count}</h1>
      <div className={cl.wrapper}>
        <button className={cl.buttonPlus} onClick={onClickPlus}>Plus</button>
        <button className={cl.buttonMinus} onClick={onClickMinus}>Minus</button>
      </div>
    </>
  )
}
export default App