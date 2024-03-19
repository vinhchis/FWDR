const Modal = ({onShow, onClose}) => {
  return (
    onShow ? (
      <div className="modal-overlay">
        <div className="modal">
        <h2>Congaturation: Your battery is full!</h2>
        <button onClick={() => onClose()}>[ X ]</button>
        </div>
      </div>
    ): null
  )
}

export default Modal