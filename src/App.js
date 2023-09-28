import React  from 'react';
import './App.css';
import FormsReact from './Forms';
import Looping from './looping';
import Uncontrolled from './uncontrolled';

function App() {
  return (
    <div className="App">
      {/* <FormsReact/> */}
      {/* <Uncontrolled/> */}
      <Looping/>
    </div>
  );
}

export default App;
