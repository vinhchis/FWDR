const Parent = ({daddy}) => {

  return(
    <div className="parent-container">
      <h2>My Properties</h2>
      <div>
        View of Child
      </div>
      <br />
      Systax: props.State.NameOfState
      <div className="list-items">
        <p>+ House: {daddy.house}</p>
        <p>+ Car: {daddy.car}</p>
        <p>+ Money: {daddy.money} $</p>
      </div>
    </div>
  )
}

export default Parent