import React, {useState} from "react";

export default function TextForm(props){
    const [text,setText] = useState('Enter text here');

    const handleUpClick = () => {
        console.log(text)
        let upText = text.toUpperCase()
        setText(upText)
    }
    const handleOnChange = (event) => {
        console.log("Text changed")
        setText(event.target.value)
    }
    return(
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea  className="form-control" value={text} onChange={handleOnChange} id="myBox" rows={3} />
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
        </div>
    )
}