import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState('dark');

  const [al, setal] = useState(null);
const setalert=(message,type)=>{
          setal({
            msg:message,
            type:type
          });
          setTimeout(() => {
            setal(null)
          }, 1500);
}
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'white';
      setalert("Light mode enabled","success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'black';
      //this is calling a function
      setalert("Dark mode enabled","success");
    }
  };

  return (
    <>

      <Navbar title="Text Magic" mode={mode} togglemode={toggleMode} />
      <Alert alert={al}/>
      <div className="container my-5">
        <Textform setalert={setalert} exa="Enter text to analyze" mode={mode} togglemode={toggleMode} />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
