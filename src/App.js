import { useEffect, useState } from "react";
import { FormList } from "./components/FormList";
import ListTodo  from "./components/ListTodo";
import Item from "./components/ClassItens";
import "./style.css"
import Modal from "./components/Modal";
const ITEMSAVE = "savedItem"

function App() {
  const [itemList, setItemList] = useState([]);
  const [show, setShow] = useState(false)

  useEffect(()=>{
      let saveItem = JSON.parse(localStorage.getItem(ITEMSAVE))
      if(saveItem){
      setItemList(saveItem)
      }
  },[])

  useEffect(()=>{
      localStorage.setItem(ITEMSAVE, JSON.stringify(itemList))
       },[itemList])

  function onAddItemList(text) {
    let item = new Item(text);
    setItemList([...itemList, item]);
    onHideModal()
  }

  function onDeleteItem(item) {
    let filterDelete = itemList.filter(it => it.id !== item.id);
    setItemList(filterDelete);
  }

  function onDonelist(item){
    let imgDone = itemList.map(it=>{
      if(it.id === item.id){
      it.done = !it.done
    }
    return it  
    }
    )
    setItemList(imgDone);
  }


  function onHideModal(){
    setShow(false)
  }

  return (
    <div className="container">
      <div className="header">
      <h1>Lista de Tarefas</h1>
      <button onClick={()=>{setShow(true)}} className="addBt">+</button>
      </div>
      <ListTodo onDonelist={onDonelist} onDeleteItem={onDeleteItem} itemList={itemList}></ListTodo>
      <Modal show={show} onHideModal={onHideModal} >
        <FormList onAddItemList={onAddItemList}/></Modal>
    </div>
  );
}

export default App;
