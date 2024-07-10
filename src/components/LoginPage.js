import React, { useState } from "react";


export default function LoginForm(props) {
    const [text, setText] = useState('');
    // setext('I an kiran');
    const uppercaseClick = () => {
        console.log("I have clicked this button");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const mytext = (event) => {
        let enteredText = event.target.value;
        setText(enteredText)
    }
    return (
        <div className="container">
            <h1>Enter the text to convert  </h1>
            <textarea className="form-control" placeholder="Enter the text here" rows="8" value={text} onChange={mytext} id="floatingTextarea"></textarea>
            <button onClick={uppercaseClick} className="btn btn-primary my-3">Click Here</button>
            <div className="my-3">
                <h3>Text Summary</h3>
                <div className="d-flex justify-content-between">
                <p>Number of letters :- { text.length}</p>
                <p>Number of characters :- { text.split(' ').length}</p>
                </div>
            </div>

        </div>
    )
}