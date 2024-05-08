import React, { useState } from 'react';


export default function TextForm (props) {
    //to convert text into uppercase
    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text)
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase.", "success");
    }

    const handleOnChange = (event) => {
        // console.log("Handle Onchange");
        setText(event.target.value);
    }

    //to convert text into lowercase
    const handleoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase.", "success");
    }

    //to clear text from text box
    const handleClear = () => {
        setText(" ");
        props.showAlert("Text cleared.", "success");
    }
    
    // to copy text from text box
    const handleCopy = () =>{
        let text = document.getElementById('myBox');
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied to clipboard.", "success");
    }

    // to handle extra spaces
    const handleExtraSpace = () => {
        let newText = text.split(/\s+/).join(' ');
        setText(newText);
        props.showAlert("Extra space removed.","success");
    }

    //to make first letter capital
    const handleFirstChar = () =>{
        let newText = text.charAt(0).toUpperCase() + text.slice(1);
        setText(newText);
        props.showAlert("Changed first character to uppercase.", "success");
    }

    // const handleCount = () => {
    //     if(text.length === 0){
    //         setText = 0;
    //     } else {
    //         text.split(" ").length;
    //     }
    // }
    // state making
    const [text,setText] = useState('');  {/*using Array disstructuring*/}
    
    // setText("Text only");
    return (
        <>
        <div className='container' style={{ color: props.mode ==='dark'?'white':'black' }}>
            <h1>{props.heading} </h1>   {/* anyheading we pass from app.js textform will render here*/ }
            <div className="mb-3" >
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode ==='dark'?'#3b3535':'white', color: props.mode ==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>  {/*row 8 for expanding text area*/}
            </div>
            <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Uppercase</button> {/*button for convert text to uppercase*/}
            <button className='btn btn-primary mx-2' onClick={handleoClick}>Convert to Lowercase</button>
            <button className='btn btn-primary mx-2' onClick={handleClear}>clear Text</button>
            <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy Text</button>
            <button className='btn btn-primary mx-2' onClick={handleExtraSpace}>Remove extra space</button>
            <button className='btn btn-primary mx-2' onClick={handleFirstChar}>Make first letter capital</button>
        </div>
        <div className="container2 my-3" style={{ color: props.mode ==='dark'?'white':'black' }}>
            <h1>Text summary</h1>
            {/* <p>{text.split(" ").length} words and {text.length}</p>  {/* to tell the user how many words and letters are written by them*/ } 
            <p>{text.length === 0? 0 + " words": text.trim().split(" ").length + " words" }</p>
            <p>{0.008 *text.split(" ").length} minutes to read </p>  {/* to tell the user how much time the inputed value will take to read*/}
            <h3>Preview</h3> 
            <p>{text.length === 0 ? "Enter something in the above box to preview it here." : text }</p>
        </div>
        </>
    );
}

