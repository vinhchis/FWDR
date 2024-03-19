import { useState, useEffect } from "react";
const EditForm = ({pickedPhone, updatePhone}) => {
  const initialPhone = { 
    id: "",
    brand: "",
    model: "",
    price: ""
  }
  const [updatedPhone, setUpdatedPhone] = useState(initialPhone);

  useEffect(() => {
    setUpdatedPhone(pickedPhone)
  },[pickedPhone])

  const handleChange = (event) => {
    const {name, value} = event.target;
    setUpdatedPhone({...updatedPhone,[name] : value});
  }

  const handleSumit = (event) => {
    event.preventDefault();
    const isOk = window.confirm("Are you sure to update this car!!");
    if(isOk){
      if(!updatedPhone.model || !updatedPhone.brand || !updatedPhone.price){
        alert("All fields not empty!!!");
        return
      }
      updatePhone(updatedPhone);
      setUpdatedPhone(initialPhone);
    }
  } 

  return (
      <div className="edit-form form" onSubmit={handleSumit}>
        <form>
          <table>
            <tbody>
              <tr>
                <td align="right">Brand: </td>
                <td>
                  <input
                    onChange={handleChange}
                    type="text"
                    name="brand"
                    id="brand"
                    value={updatedPhone.brand}
                  />
                </td>
              </tr>
              <tr>
                <td align="right">Model: </td>
                <td>
                  <input
                    onChange={handleChange}
                    type="text"
                    name="model"
                    id="model"
                    value={updatedPhone.model}
                  />
                </td>
              </tr>
              <tr>
                <td align="right">Price</td>
                <td>
                  <input
                    onChange={handleChange}
                    type="number"
                    name="price"
                    id="price"
                    value={updatedPhone.price}
                  />
                </td>
              </tr>
              <tr>
                <td />
                <td align="left">
                  <button type="submit">Save</button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
  );
};

export default EditForm;
