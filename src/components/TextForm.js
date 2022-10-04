import React , {useState} from 'react'


export default function TextForm(props) {
    const  handleUpClick = ()=>{
        // console.log("Uppercase was clicked : " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase" ,"success" );
    }
    const  handleLoClick = ()=>{
        // console.log("Uppercase was clicked : " + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowerrcase" ,"success" );

    }

    const  handle = ()=>{
        // console.log("Reverse was clicked : " + text);
        let newText = text.split('').reverse().join('');
        setText(newText);
        props.showAlert("Reverse was done" ,"success" );

    }


    const  handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value);
    }

    const [text , setText] = useState('');
    // text = "new text"    Wrong way to change the text

    // setText("khgtg");    //corrext way to change the text
    // console.log(useState('Ener text jhere2 '));
  return (
    <>
    {/* <div className="container" style ={{color :props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading} </h1>
        <div className="mb-3">
        <textarea className="form-control"  value={text} onChange ={handleOnChange} style ={{backgroundColor :props.mode==='light'?'grey':'white'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to lowercase</button>    
        <button className="btn btn-primary mx-1" onClick={handle}>Reverse the text</button>    
        </div>
    <div className="container my-3" style ={{color :props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div> */}
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}> 
            <h1 className='mb-4'>{props.heading}</h1>
            <div className="mb-3"> 
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handle}>Reverse</button>
             </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
    </>
  )
}
