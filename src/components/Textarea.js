import React, { useState } from 'react'

export default function Textarea(props) {

    const [text, setText] = useState("");

    const [mode, setMode] = useState(
        {
            backgroundColor: "white",
            color: "black"
        }
    );

    const [btnText, setbtnText] = useState("Dark Mode");

    let handleOnChange = (event) => {
        setText(event.target.value);
    }

    let handleUpperCase = () => {
        if(text.length===0){
            props.showAlert("Please provide a text first", "warning");
        }
        else{
            let newText = text.toUpperCase();
            setText(newText);
            props.showAlert("Converted to uppercase", "success");
        }
    }

    let handleLowerCase = () => {
        if(text.length===0){
            props.showAlert("Please provide a text first", "warning");
        }
        else{
            let newText = text.toLowerCase();
            setText(newText);
            props.showAlert("Converted to lowercase", "success");
        }
    }

    let handleReverse = () => {
        if(text.length===0){
            props.showAlert("Please provide a text first", "warning");
        }
        else{
            let newText = "";
            for (let i = text.length - 1; i >= 0; i--) {
                newText += text[i];
            }
            setText(newText);
            props.showAlert("Reversed", "success");
        }
    }

    let handleClear = () => {
        if(text.length===0){
            props.showAlert("Please provide a text first", "warning");
        }
        else{
            let newText = "";
            setText(newText);
            props.showAlert("Cleared", "success");
        }
    }

    let handleEmailExtracter = () => {
        //let emailRegex=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        let newText = text.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/g);
        console.log(newText);
        setText(newText);
    }

    let handleTheme = () => {
        if (mode.backgroundColor === "black") {
            setMode({
                backgroundColor: "white",
                color: "black"
            });

            setbtnText("Dark Mode");
        }
        else {
            setMode({
                backgroundColor: "black",
                color: "white"
            });

            setbtnText("Day Mode");
        }

    }

    return (
        <>
            <div className="container my-3" style={{ color: props.theme === "dark" ? "white" : "black" }}>
                <h1>Enter your text to analyze</h1>
                <textarea name="text" id="myText" cols="100" rows="5" value={text} onChange={handleOnChange} style={mode}></textarea>
                <div className="btn-container my-3">
                    <button type="button" className="btn btn-primary mybtn" onClick={handleUpperCase}>Uppercase</button>
                    <button type="button" className="btn btn-primary mybtn" onClick={handleLowerCase}>Lowercase</button>
                    <button type="button" className="btn btn-primary mybtn" onClick={handleReverse}>Reverse</button>
                    <button type="button" className="btn btn-primary mybtn" onClick={handleEmailExtracter} disabled>Find email</button>
                    <button type="button" className="btn btn-primary mybtn" onClick={handleTheme}>{btnText}</button>
                    <button type="button" className="btn btn-primary mybtn" onClick={handleClear}>Clear</button>
                </div>
                <div className="text-summary">
                    <h2>Your text summary</h2>
                    <p>
                        {/* Words: {text.split(" ").length} & Characters: {text.length} */}
                        Words: {text.split(" ").filter((el)=>{return el.length!==0}).length} & Characters: {text.length}
                    </p>
                </div>
                <div className="preview my-4">
                    <h2>Preview</h2>
                    <p>{text.length>0 ? text : "Please enter your text above to preview it here"}</p>
                </div>
            </div>
        </>
    )
}
