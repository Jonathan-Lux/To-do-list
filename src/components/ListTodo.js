import { ItemListTodo } from "./ItemList";


function ListTodo (props){
    return(
    <ul>
    {props.itemList.map(item =><ItemListTodo key={item.id} onDonelist={props.onDonelist} onDeleteItem={props.onDeleteItem} item={item}></ItemListTodo> )}
         
    </ul>
    )
}


export default ListTodo;