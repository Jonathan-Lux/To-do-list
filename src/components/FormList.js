import { useState } from "react";

export function FormList(props) {
  const [text, setText] = useState("");
  
  function textInput(e) {
    let textInputList = e.target.value;
    setText(textInputList);
  }

  function addTextInput(e) {
    e.preventDefault();
    if (text===""){
      alert("Digite sua tarefa")
      return
    } 
    else{
      props.onAddItemList(text);
      setText("");
    }
  }

  return (
    <div className="action">
    <form>
      <input onChange={textInput} type="text" value={text}></input>
      <button onClick={addTextInput}>Add</button>
    </form>
    </div>
  );
}
