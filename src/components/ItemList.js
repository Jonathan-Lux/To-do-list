import { FaRegTrashAlt } from "react-icons/fa";
import { MdOutlineDone, MdOutlineDoneAll } from "react-icons/md";

export function ItemListTodo(props) {
  function DoneImg(props) {
    if (props.done) {
      return <MdOutlineDoneAll />;
    } else {
      return <MdOutlineDone />;
    }
  }

  return (
        <li className={props.item.done ? "done list" : "list"}>
          {props.item.text}
          <div>
            <button
              onClick={() => {
                props.onDeleteItem(props.item);
              }}
            >
              <FaRegTrashAlt />
            </button>
            <button
              onClick={() => {
                props.onDonelist(props.item);
              }}>
              <DoneImg done={props.item.done}></DoneImg>
            </button>
          </div>
        </li>
      )}

  

