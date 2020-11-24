import React, { useReducer } from 'react'
import CounterReducer from './CounterReducer';


function Child2() {
    
    const [state, dispatch] = useReducer(CounterReducer, 1)
    return (
        <div>
            <h1>This is from Counter Reducer </h1>
            <h2>Value of reducer is {state} </h2>
            
            <button onClick={()=> dispatch('INCREMENT')}>Update Reducer</button>
        </div>
    )
}

export default Child2
