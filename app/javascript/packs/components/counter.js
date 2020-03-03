import React, {useState} from 'react'

const Counter = (props) => {
    const [counter, setCounter] = useState(0)
    return (
        <div>
            <h2>Counter App</h2>
            <span>{counter}</span>
            <button onClick = {()=> setCounter(counter + 1)}>+</button>
            <button onClick = {()=> setCounter(counter - 1)}>-</button>
        </div>
    )
}

export default Counter;