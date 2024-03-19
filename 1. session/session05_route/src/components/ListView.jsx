import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const ListView = () => {
  const [cars, setCars] = useState([]);
  const navigate = useNavigate();

  const getCars = () => {
    axios
      .get("https://64edd0121f8721827141c8a3.mockapi.io/cars")
      .then((response) => response.data)
      .then((listCar) => {
        setCars(listCar);
      });
  };

  useEffect(() => {
    getCars();
  }, []);

  const deleteCar = (id) => {
    const isDel = window.confirm("Are you want to delete this car!!!");
    if(isDel){
      axios
      .delete(`https://64edd0121f8721827141c8a3.mockapi.io/cars/${id}`)
      .then(() => getCars());
    }
  };

  return (
    <table className="list-view">
      <thead>
        <tr>
          <th>Brand</th>
          <th>Model</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {cars.length > 0 ? (
          cars.map((car) => (
            <tr key={car.id}>
              <td>{car.brand}</td>
              <td>{car.model}</td>
              <td>{car.price}</td>
              <td>
                <button onClick={() => deleteCar(car.id)}>Delete</button>|
                <button onClick={() => {navigate(`/edit/${car.id}`)}}>Edit</button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4">No any Cars</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default ListView;
