import React, { useState } from 'react';
import './Textform.css';

export default function Textform(props) {
  const [text, setText] = useState('');

  const isTextEmpty = () => {
    return text.trim() === '';
  };

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
    let newText = text.replace(/\b\w/g, (char) => char.toUpperCase());
    setText(newText);
    props.setalert("Text capitalized", "success");
  };

  const handleRemoveExtraSpaces = () => {
    let newText = text.replace(/\s+/g, ' ').trim();
    setText(newText);
    props.setalert("Extra spaces removed", "success");
  };

  const handleReverseText = () => {
    let newText = text.split('').reverse().join('');
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

  const handlespeaktext = (event) => {
    var speak=document.getElementById("Textarea").value;
    var msg=new SpeechSynthesisUtterance(speak);
    window.speechSynthesis.speak(msg);
    props.setalert("The text says", "success");
   };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="container text-form-container">
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
          <div className="container">
  <div className="row">
    <div className="col-6 col-sm-4 col-md-3 mb-2">
      <button type="button" className="btn btn-primary btn-block tf-btn" onClick={handleUppercase} disabled={isTextEmpty()}>Convert to UpperCase</button>
    </div>
    <div className="col-6 col-sm-4 col-md-3 mb-2">
      <button type="button" className="btn btn-primary btn-block tf-btn" onClick={handleLowercase} disabled={isTextEmpty()}>Convert to LowerCase</button>
    </div>
    <div className="col-6 col-sm-4 col-md-3 mb-2">
      <button type="button" className="btn btn-primary btn-block tf-btn" onClick={handleCapitalize} disabled={isTextEmpty()}>Capitalize Words</button>
    </div>
    <div className="col-6 col-sm-4 col-md-3 mb-2">
      <button type="button" className="btn btn-primary btn-block tf-btn" onClick={handleRemoveExtraSpaces} disabled={isTextEmpty()}>Remove Spaces</button>
    </div>
    <div className="col-6 col-sm-4 col-md-3 mb-2">
      <button type="button" className="btn btn-primary btn-block tf-btn" onClick={handleReverseText} disabled={isTextEmpty()}>Reverse</button>
    </div>
    <div className="col-6 col-sm-4 col-md-3 mb-2">
      <button type="button" className="btn btn-primary btn-block tf-btn" onClick={handleCopyText} disabled={isTextEmpty()}>Copy</button>
    </div>
    <div className="col-6 col-sm-4 col-md-3 mb-2">
      <button type="button" className="btn btn-primary btn-block tf-btn" onClick={handleDeleteText} disabled={isTextEmpty()}>Clear</button>
    </div>
    <div className="col-6 col-sm-4 col-md-3 mb-2">
      <button type="button" className="btn btn-primary btn-block tf-btn" onClick={handlespeaktext} disabled={isTextEmpty()}>Speak</button>
    </div>
  </div>
</div>

        </form>
      </div>
    

      <div className="container summary-container text-primary my-5" style={{ backgroundColor: props.mode === 'light' ? 'black' : 'white' }}>
        <h2>Your Text summary</h2>
        <p>{text.trim() === '' ? 0 : text.split(" ").length} Words and {text.length} Characters</p>
        <p>you can read the text in {0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Words/Minute</p>
        <h4>Preview</h4>
        <p>{text.length > 0 ? text : "Enter something to preview"}</p>
      </div>
    </>
  );
}
