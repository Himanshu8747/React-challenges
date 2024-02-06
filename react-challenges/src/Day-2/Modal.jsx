import { useState } from "react"
import ModalHeader from "./ModalHeader";
import ModalBody from "./ModalBody";

const Modal = () => {
  const [modalTitle,setModalTitle] = useState("");
  const [modalBody,setModalBody] = useState("");
  const [isSetOpen,setIsSetOpen] = useState(false);
  return (
    <div className="container">
      <input type="text" placeholder="Enter Modal title" value={modalTitle} onChange={(e)=>setModalTitle(e.target.value)} />
      <textarea placeholder="Enter Modals Body" value={modalBody} onChange={(e)=>setModalBody(e.target.value)}/>
      <button onClick={()=>setIsSetOpen(!isSetOpen)}>Open Modal</button>
      {isSetOpen && <div>
        <ModalHeader title={modalTitle} setIsSetOpen={setIsSetOpen}/>
        <ModalBody modalBody={modalBody} />
        </div>}
    </div>
  )
}

export default Modal

