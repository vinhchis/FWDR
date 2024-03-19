import React, { useState, useEffect, Fragment } from "react";
import ListView from "./components/ListView";
import AddForm from "./components/AddForms";
import EditForm from "./components/EditForms";
import CarsDB from "./cars.json";
import "./App.css";

const App = () => {
  const [cars, setCars] = useState([]);
  const [pickedCar, setPickedCar] = useState({
    id: "",
    brand: "",
    model: "",
    price: "",
  });
  // run only once
  useEffect(() => {
    setCars(CarsDB);
  }, []);

  const addCar = (newCar) => {
    setCars([...cars, { ...newCar, id: cars.length + 1 }]);
  };

  const deleteCar = (id) => {
    setCars((cars) => cars.filter((car) => car.id != id));
  };

  const updateCar = (updatedCar) => {
    setCars((cars) =>
      cars.map((car) => (car.id == updatedCar.id ? updatedCar : car))
    );
  };

  const [isToggledAdd, setToggledAdd] = useState(false);
  const [isToggledEdit, setToggledEdit] = useState(false);

  const handleToggleAdd = () => {
    setToggledAdd(!isToggledAdd);
  };

  const handleToggleEdit = () => {
    setToggledEdit(!isToggledEdit);
  };

  return (
    <div>
      <div>
        <button className="btn-show" onClick={handleToggleAdd}>Add Car</button>
        {isToggledAdd ? <AddForm addCar={addCar} /> : null}
      </div>
      <div>
        <button className="btn-show" onClick={handleToggleEdit}>Edit Car</button>

        {isToggledEdit ? (
          <EditForm pickedCar={pickedCar} updateCar={updateCar} />
        ) : null}
      </div>
      <div>
        <h2>List Cars</h2>
        <ListView
          cars={cars}
          setPickedCar={setPickedCar}
          deleteCar={deleteCar}
        />
      </div>
    </div>
  );
};

export default App;
