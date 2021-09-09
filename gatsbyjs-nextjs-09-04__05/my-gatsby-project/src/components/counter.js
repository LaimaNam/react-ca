import React, { useState, useEffect } from "react"

const Counter = () => {
  // hooks
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState("")
  //side effects
  useEffect(() => {
    if (count !== 0 && count % 2 === 0) {
      setMessage("Count is even")
    } else {
      setMessage("")
    }
  }, [count])

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
      <p>{message}</p>
    </div>
  )
}

export default Counter
