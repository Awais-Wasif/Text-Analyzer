import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');

   function changeToUpperCase() {
    let _changeText = text.toUpperCase();
    setText(_changeText);
    console.log("Upper case Done");
  }

   function changeToLowerCase()
  {
    let _changeText = text.toLowerCase();
    setText(_changeText);
    console.log("Lower case Done");
  }

   function clearText()
  {
    setText("")
    console.log("Text Cleared")
  }

  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  }

  return (
    <>
      <div className="container">
        <label className={props.mode === 'dark'?'text-white':'text-dark'} >Enter text to analyze</label>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          placeholder="Enter text here" // Add the placeholder text here
          id="exampleFormControlTextarea1"
          rows="5"
        ></textarea><br></br>
        <button className='btn btn-primary' onClick={changeToUpperCase}>Convert to Uppercase</button>
        <button className='btn btn-primary mx-2' onClick={changeToLowerCase}>Convert to Lowercase</button>
        <button className='btn btn-danger mx-2' onClick={clearText}>Clear Text</button>
      </div>
      <div className="container my-3">
        <h1 className={props.mode === 'dark'?'text-white':'text-dark'}>Text Summary</h1>
        <p className={props.mode === 'dark'?'text-white':'text-dark'}>{text.split(" ").length} words and {text.length} characters</p>
        <p className={props.mode === 'dark'?'text-white':'text-dark'}>{0.008 * text.split(" ").length} Minutes read</p>
      </div>
      </>
  );
}
