import React, { useState } from 'react';
import './Textform.css';

export default function Textform(props) {
  const [text, setText] = useState('');

  const handleUppercase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.setalert("Text converted to uppercase", "success");
  };

  const handleLowercase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.setalert("Text converted to lowercase", "success");
  };

  const handleCapitalize = () => {
    let newText = text.replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize first letter of each word
    setText(newText);
    props.setalert("Text capitalized", "success");
  };

  const handleRemoveExtraSpaces = () => {
    let newText = text.replace(/\s+/g, ' ').trim(); // Replace multiple spaces with a single space and trim
    setText(newText);
    props.setalert("Extra spaces removed", "success");
  };

  const handleReverseText = () => {
    let newText = text.split('').reverse().join(''); // Reverse the text
    setText(newText);
    props.setalert("Text reversed", "success");
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(text);
    props.setalert("Text copied to clipboard", "success");
  };

  const handleDeleteText = () => {
    setText('');
    props.setalert("Text cleared", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="container">
        <form className={`bg-${props.mode}`}>
          <div className="form-group">
            <label htmlFor="Textarea" className="text-primary fw-bold">{props.exa}</label>
            <textarea
             style={{ backgroundColor: props.mode === 'light' ? 'black' : 'white', color: props.mode === 'light' ? 'white' : 'black' }}

              className="form-control mb-3"
              id="Textarea"
              rows="8"
              value={text}
              onChange={handleOnChange}
              placeholder="Enter a Text"
            ></textarea>
          </div>
          <button type="button" className="btn btn-primary tf" onClick={handleUppercase}>Convert to UpperCase</button>
          <button type="button" className="btn btn-primary tf mx-2" onClick={handleLowercase}>Convert to LowerCase</button>
          <button type="button" className="btn btn-primary tf mx-2" onClick={handleCapitalize}>Capitalize Words</button>
          <button type="button" className="btn btn-primary tf mx-2" onClick={handleRemoveExtraSpaces}>Remove Extra Spaces</button>
          <button type="button" className="btn btn-primary tf mx-2" onClick={handleReverseText}>Reverse Text</button>
          <button type="button" className="btn btn-primary tf mx-2" onClick={handleCopyText}>Copy Text</button>
          <button type="button" className="btn btn-primary tf mx-2" onClick={handleDeleteText}>Clear Text</button>
       
        </form>
      </div>

      <div className="container summary-container text-primary my-5"  style={{ backgroundColor: props.mode === 'light' ? 'black' : 'white'}}>
        <h2>Your Text summary</h2>
        <p>
          {text.trim() === '' ? 0 : text.split(" ").length} Words and {text.length} Characters
        </p>
        <p>you can read the text in {0.008 * text.split(" ").length} Words/Minute</p>
        <h4>Preview</h4>
        <p>{text.length>0?text:"Enter something to preview"}</p>
      </div>
    </>
  );
}
