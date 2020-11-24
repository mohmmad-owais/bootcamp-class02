import React,{useState}  from 'react'; 
import './App.css';
import CounterContext from './CounterContext';
import Parent from './Parent';



function App() {
  let countState = useState(1)
  return (

    <CounterContext.Provider value={countState}>
      <div>
        <Parent />

    </div>
</CounterContext.Provider>    
  );
}

export default App;
