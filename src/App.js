import React, {useState} from 'react'; 
import './App.css';
import Message from './Message';


function App() {
    let [count,setCount] = useState(1);
    let [isMorning,setMorning] = useState(false);
  return (
    <div className={`App ${isMorning ? 'dayLight': ''}`}>
        <h1>Good {isMorning ? 'Morning' : 'Night'}</h1>
        
        <Message counter={count} />
        <button onClick={()=> setCount(++count)}>Update Counter</button>
        <br />
        <button onClick={()=> setMorning(!isMorning)}>Update daytime</button>
    </div>
  );
}

export default App;
