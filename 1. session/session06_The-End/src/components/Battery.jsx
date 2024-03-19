import Modal from "./Modal";

const Battery = ({battery, chargeBattery, showModel, toggleModal}) => {

  return(
    <div className="parent-container">
      <h2>useState and useEffect demo</h2>
      <div className="list-items">
        Screen: {battery} % charging ...
      </div>
      <Modal onShow={showModel} onClose={toggleModal}/>
      <br />
      <button onClick={() => chargeBattery()}>Battery charge</button>
    </div>
  )
}

export default Battery