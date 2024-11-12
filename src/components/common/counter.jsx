import { useState } from "react";
import "../../layout/counter.css"

const Counter = () => {
    // is binding these functions to a state
  const [count, setCount] = useState(0)

  const increase = () => {
    setCount(count + 1)
  }
  const decrease = () => {
    setCount(count - 1)
  }

  return (
    <>
        <h1 className="titleText">Counter</h1>
        <p className="subTitle">Count: {count}</p>
        <button className="buttonStyle" onClick={increase}>+</button>
        <button className="buttonStyle" onClick={decrease}>-</button>
    </>
  )
}

export default Counter  