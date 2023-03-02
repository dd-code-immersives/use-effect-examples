import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';


function Top() {
  const [count, setCount] = useState(0);

  //will run in response to the component Top() changing  
  // in class based react is equivalent to DidComponentMount 
  useEffect(() => {
    console.log("Top rendered");
  });

  return (
    <div>
      <div onClick={() => setCount(count + 1)}>Top Level {count}</div>
      <Middle />
    </div>
  );
}

function Middle() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Middle rendered");
  });

  return (
    <div>
      <div onClick={() => setCount(count + 1)}>Middle Level {count}</div>
      <Bottom />
    </div>
  );
}

function Bottom() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Bottom rendered");
  });

  return <div onClick={() => setCount(count + 1)}>Bottom Level {count}</div>;
}







function App() {

  //run when component is mounted 
  // aka after it is rendered
  useEffect(() => {
    console.log('mounted');
    return () => console.log('unmounting...');
  }, [])  // <-- add this empty array here
  


  
  return (
    <div className="App">
      <Top/>
      <Middle/>
      <Bottom/>
    </div>
  );
}

export default App;
