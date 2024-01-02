import React,{useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("Enter text here2");
    const handleUpperClick=()=>{
          console.log("upperClicked"+ text)
          let newtext=text.toUpperCase();
          setText(newtext)
          props.showAlert("Converted to UpperCase!","success");
    }

  const handleLoClick = () => {
    console.log("LowerClicked" + text);
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to LowerCase!", "success");

  };




    const handleOnChange = (event) => {
      setText(event.target.value)

    };
  //  handle copy:

const handleCopy=()=>{
     console.log("I am copy");
     var text=document.getElementById("myBox");
     text.select();
     text.setSelectionRange(0,9999);
     navigator.clipboard.writeText(text.value);
    props.showAlert("Copied To Clipboard!", "success");

    }

    //handle REmove Extra Spaces]
    const handleExtraSpaces = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra Spaces Removed!", "success");

    };




const handleClearClick = () => {
  let newtext = '';
  setText(newtext);
  props.showAlert("Text Cleared!", "success");

};




    return (
      <>
        <div
          className="container"
          style={{ color: props.mode === "dark" ? "white" : "#042743" }}
        ></div>
        <div>
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <textarea
              className="form-control"
              onChange={handleOnChange}
              style={{
                backgroundColor: props.mode === "dark" ? "grey" : "white",
                color: props.mode === "dark" ? "white" : "#042743",
              }}
              value={text}
              id="myBox"
              rows="8"
            ></textarea>
          </div>
          <button className="btn btn-primary mx-3" onClick={handleUpperClick}>
            Convert to UpperCase
          </button>
          <button className="btn btn-primary mx-3" onClick={handleLoClick}>
            Convert to LowerCase
          </button>
          <button className="btn btn-primary mx-3" onClick={handleClearClick}>
            Clear Text
          </button>
          <button className="btn btn-primary mx-3" onClick={handleCopy}>
            Copy Text
          </button>
          <button className="btn btn-primary mx-3" onClick={handleExtraSpaces}>
            Remove Extra Spaces
          </button>
        </div>
        <div
          className="container my-3"
          style={{ color: props.mode === "dark" ? "white" : "#042743" }}
        >
          <h2>Your Text Summary</h2>
          <p>
            {text.split(" ").length} words and {text.length} characters
          </p>
          <h4>
            {text.trim() === ""
              ? "No text entered"
              : `${text.split(/\s+/).length * 0.008} Minutes Read`}
          </h4>

          <h2>Preview</h2>
          <p>{text.length>0?text:"Enter Something in the textbox above to preview here"}</p>
        </div>
      </>
    );
}

