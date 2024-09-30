import React, { useState } from 'react'

export default function TextForm(props) {
    let buttonClicked1 = () => {
        console.log("upper case button is clicked");
        let newText1 = text.toUpperCase();
        setText(newText1);
    }
    let buttonClicked2 = () => {
      console.log("lowerCase button is clicked");
      let newText2 = text.toLowerCase();
      setText(newText2);
    }
    let buttonClicked3 = () => {
      console.log("Clear Text");
      let newText3 = "";
      setText(newText3);
    }
    let buttonClicked4 = () => {
      navigator.clipboard.writeText(text)
      alert('Text copied to Clipbboard !')
    }

    let handleOnChange = (event) => {
        setText(event.target.value)
    }

    const[text, setText] = useState("");
    
  return (
    <>
            <div className="mb-3">
                <h2>{props.heading}</h2>
                <textarea className="form-control" value={text} onChange={handleOnChange} placeholder='Enter Something' id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <div className="btn1 ">
            <button type="button" onClick={buttonClicked1} className="btn btn-primary mx-2">{props.button1}</button>
            <button type="button" onClick={buttonClicked2} className="btn btn-primary mx-2">{props.button2}</button>
            <button type="button" onClick={buttonClicked3} className="btn btn-primary mx-2">{props.button3}</button>
            <button type="button" onClick={buttonClicked4} className="btn btn-primary mx-2">{props.button4}</button>
            </div>
            <div className="container">
              <h2>Your Text Summary</h2>
              <p>{text.split(" ").length} words and {text.length} characters where time required to read this content is {text.split(" ").length * 0.252} sec </p>
            </div>
    </>
  )
}
