import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const AddForm = () => {
  const initialCar = {
    id: "",
    brand: "",
    model: "",
    price: "",
  };
  const [newCar, setNewCar] = useState(initialCar);

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewCar({ ...newCar, [name]: value });
  };

  const addCar = (newCar) => {
    // id auto == length + 1
    axios
      .post("https://64edd0121f8721827141c8a3.mockapi.io/cars", newCar)
      .then(() => {
        navigate("/cars");
      });
  };

  const handleSumit = (event) => {
    event.preventDefault();
    if (!newCar.brand || !newCar.model || !newCar.price) {
      alert("All fields not empty!!!");
      return;
    }

    addCar(newCar);
    event.target.reset();
    setNewCar(initialCar);
  };
  return (
    <form className="form-add" onSubmit={handleSumit}>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="brand">Brand:</label>
            </td>
            <td>
              <input
                type="text"
                id="brand"
                name="brand"
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="model">Model:</label>
            </td>
            <td>
              <input
                type="text"
                id="model"
                name="model"
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="price">Price:</label>
            </td>
            <td>
              <input
                type="number"
                id="price"
                name="price"
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <button type="submit">Add</button>
              <button type="reset">reset</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
};

export default AddForm;
