const ModalHeader = ({title,setIsSetOpen}) => {
  const closeModal=()=>{
    setIsSetOpen(false);
  }  
  return (
    <div className="modal-header">
        <h2 className="modal-heading">{title}</h2>
        <button className="close" onClick={closeModal}>X</button>
    </div>
  )
}

export default ModalHeader