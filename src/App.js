import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

import Reddit from './components/Reddit'

function Top() {
  const [count, setCount] = useState(0);

  //will run in response to the component Top() changing 
  // so every click below useEffect will run  
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


function ThreeCounts() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  // when we pass props to useEffect, useEffect runs when the props change.
  // so this useEffect will only run when count2 changes.
  useEffect(() => {
    console.log("count2 changed!");
  }, [count2]);

  return (
    <div>
      {count1} {count2} {count3}
      <br />
      <button onClick={() => setCount1(count1 + 1)}>Increment count1</button>
      <button onClick={() => setCount2(count2 + 1)}>Increment count2</button>
      <button onClick={() => setCount3(count3 + 1)}>Increment count3</button>
    </div>
  );
}



function App() {

  //runs when component is mounted 
  // will only run once
  // aka after it is rendered

  //set the default subredit to reactjs
  const [inputValue, setValue] = useState("reactjs");
  const [subreddit, setSubreddit] = useState(inputValue);
 
  useEffect(() => {
    console.log('mounted');
    return () => console.log('unmounting...');
  }, [])  // <-- add this empty array here (which means it will only run once)
  

  const handleSubmit = e => {
    e.preventDefault();
    setSubreddit(inputValue);
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input
        value={inputValue}
        onChange={e => setValue(e.target.value)}
      />
    </form>
    <Reddit subreddit={subreddit} />
  </>
  );
}

export default App;
