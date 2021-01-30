import React from 'react'
import Massiv from './components/Massiv/Massiv';
import Week from './components/Week/Week';
import Workers from './components/Workers/Workers';

function App(){

  return (
    <div className="App m-4">
      <div className="row  justify-content-md-center">
        <div className="col-6" >
          <h4>Задание №1</h4>
          <Week />
        </div>

        <div className="col-6">          
        <h4>Задание №2</h4>
        <Massiv /></div>
      </div>
      
      <h4>Задание №3</h4>
      <Workers />
    </div>
  );
}

export default App