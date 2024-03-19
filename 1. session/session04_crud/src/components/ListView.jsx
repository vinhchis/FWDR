const ListView = ({cars, setPickedCar, deleteCar}) => {
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
          cars.map((car) =>( 
            <tr key={car.id}>
              <td>{car.brand}</td>
              <td>{car.model}</td>
              <td>{car.price}</td>
              <td>
                <button onClick={() => {deleteCar(car.id)}}>Delete</button>| 
                <button onClick={() => {setPickedCar(car)}}>Edit</button>
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
