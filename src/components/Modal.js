import {useState} from"react"

function Modal(props){

    function hideModal(e){
        let target = e.target
        if(target.id === "modal"){
        props.onHideModal();
        }
    }

    return(
        <div id="modal" onClick={hideModal} className={props.show ? "modal" : "modal hide"} >
            <div className="modal-context">{props.children}</div>
        </div>
    )
}


export default Modal