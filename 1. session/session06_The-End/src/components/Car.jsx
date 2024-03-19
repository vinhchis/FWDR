import React from "react";
class Car extends React.Component {
  constructor(){
    super();
    this.state = {
      brand: 'Vinfast',
      model: 'VF8 Primim',
      price: 10000
    }
  }

  handleChange = () => {
    this.setState({
      model: 'VF 9 Plus',
      price: 23000
    })
  }
  render(){
    return(
      <div className="parent-container">
        <h2>{this.state.brand} Brand (of Parent)</h2>
        <p>Systax: this.state.NameOfState</p>
        <div className="list-items">
          <p>+ Name of Model: {this.state.model}</p>
          <p>+ Price of Car: {this.state.price} $</p>
        </div>
        <button onClick={() => this.handleChange()}>change</button>
      </div>
    )
  }
}

export default Car;