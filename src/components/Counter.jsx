import { useState } from "react"

const Counter = () => {

    // let contador = 0
    const [counter, setCounter] = useState(0)

    // const counter = useState()[0]
    // const setCounter = useState()[1]

    const sumar = () => {
       setCounter(counter + 1)
    }

    const restar = () => {
        setCounter(counter - 1)
    }
    
  return (
    <>
        <button onClick={restar}>-</button>
        <h3>{counter}</h3>
        <button onClick={sumar}>+</button>
    </>

  )
}

export default Counter