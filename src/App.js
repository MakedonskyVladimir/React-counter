import React from "react";

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
      <h3>Counter</h3>
      <h1>{count}</h1>
      <button onClick={onClickPlus}>Plus</button>
      <button onClick={onClickMinus}>Minus</button>
    </>
  )
}
export default App