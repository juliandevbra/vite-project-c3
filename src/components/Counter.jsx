import { useState } from "react"
import CardStyles from '../Styles/Card.module.css'

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
    <div className={CardStyles.btnGroup}>
        <button onClick={restar}>-</button>
        <h3>{counter}</h3>
        <button onClick={sumar}>+</button>
    </div>

  )
}

export default Counter