// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   // Link
// } from 'react-router-dom';

function App() {
  const [mode,setMode] = useState('light'); //default color
  // state for alert
  const[alert,setAlert] = useState(null); //setAlert is use to set the state variable alert and this will pass in alert below

  
  //function which will hellp tho show alert messages
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    // will disappear the alert after 3 second
    setTimeout(()=>{
      setAlert(null);
    },3000);
  }
  
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled.", "success");

      // if we want to change title everytime we enable dark mode
      // document.title = 'TextUtils - Dark Mode';

      // code for popup message - it's not good from user POV
      // setInterval(() =>{
      //   document.title = "TextUtils is amazing."
      // }, 2000);
      // setInterval(() =>{
      //   document.title = "Install TextUtils Now."
      // }, 1000);
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled.", "success");
      // document.title = 'TextUtils - Light Mode';
    }
  }

  //searchbar
  const handleSearch = (searchTerm) =>{
    console.log('Search term:', searchTerm);
  }

  return (
    <>
    {/* <Navbar title="TextUtils" aboutText = "About us" />  tiltle = "hello" is a prop here */}
    {/* <Navbar/> */}
    {/* <Router> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />

    {/* prop for alert method */}
    {/* <Alert alert="This is alert."/> */}
    <Alert alert = {alert}/> 
    <div className="container  my-3" >

      {/* <Routes>
        <Route exact path="/about" element={<About/>}></Route>
        
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter text to enhance" mode = {mode} /> }></Route>
      </Routes> */}
      <TextForm showAlert={showAlert} heading="Enter text to enhance" mode = {mode} />  
      {/* <About/> */}
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
