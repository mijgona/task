import React from 'react'
import Massiv from './components/Massiv/Massiv';
import Week from './components/Week/Week';
import Workers from './components/Workers/Workers';

function App(){

  return (
    <div className="App">
      <Week />
      <Massiv />
      <Workers />
    </div>
  );
}

export default App