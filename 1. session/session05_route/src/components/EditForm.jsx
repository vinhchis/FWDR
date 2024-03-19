import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const EditForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const initialCar = {
    id: "",
    brand: "",
    model: "",
    price: "",
  };
  const [updatedCar, setUpdatedCar] = useState(initialCar);

  const getCar = (id) => {
    axios
      .get(`https://64edd0121f8721827141c8a3.mockapi.io/cars/${id}`)
      .then((response) => response.data)
      .then((carInfo) => {
        setUpdatedCar(carInfo);
      });
  };

  const updateCar = (updatedCar) => {
    // setCars((cars) =>
    //   cars.map((car) => (car.id == updatedCar.id ? updatedCar : car))
    // );

    axios
      .put(`https://64edd0121f8721827141c8a3.mockapi.io/cars/${id}`, updatedCar)
      .then(() => {
        navigate("/");
      });
  };

  useEffect(() => {
    getCar(id);
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUpdatedCar({ ...updatedCar, [name]: value });
  };

  const handleSumit = (event) => {
    event.preventDefault();
    const isOk = window.confirm("Are you sure to update this car!!");
    if (isOk) {
      if (!updatedCar.brand || !updatedCar.model || !updatedCar.price) {
        alert("All fields not empty!!!");
        return;
      }
      updateCar(updatedCar);
      setUpdatedCar(initialCar);
    }
  };
  return (
    <form className="form-edit" onSubmit={handleSumit}>
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
                value={updatedCar.brand}
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
                value={updatedCar.model}
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
                value={updatedCar.price}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <button type="submit">Save</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
};

export default EditForm;
