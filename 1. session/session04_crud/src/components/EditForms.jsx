import { useState, useEffect } from "react";

const EditForm = ({pickedCar, updateCar}) => { 
  const initialCar = { 
    id: "",
    brand: "",
    model: "",
    price: ""
  }
  const [updatedCar, setUpdatedCar] = useState(initialCar);

  useEffect(() => {
    setUpdatedCar(pickedCar)
  },[pickedCar])

  const handleChange = (event) => {
    const {name, value} = event.target;
    setUpdatedCar({...updatedCar,[name] : value});
  }

  const handleSumit = (event) => {
    event.preventDefault();
    const isOk = window.confirm("Are you sure to update this car!!");
    if(isOk){
      if(!updatedCar.brand || !updatedCar.model || !updatedCar.price){
        alert("All fields not empty!!!");
        return
      }
      updateCar(updatedCar);
      setUpdatedCar(initialCar);
    }
  } 

  return(
    <h2>
      <form className="form-edit" onSubmit={handleSumit}>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="brand">Brand:</label>
            </td>
            <td>
              <input type="text" id="brand" name="brand" value={updatedCar.brand} onChange={handleChange}/>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="model">Model:</label>
            </td>
            <td>
              <input type="text" id="model" name="model" value={updatedCar.model} onChange={handleChange}/>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="price">Price:</label>
            </td>
            <td>
              <input type="number" id="price" name="price" value={updatedCar.price} onChange={handleChange}/>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <button type="submit">Update</button>
              {/* <button type="reset">reset</button> */}
            </td>
          </tr>
        </tbody>
      </table>
    </form>
    </h2>
  )
};

export default EditForm;
