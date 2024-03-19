import { useState } from "react";

const AddForm = ({addPhone}) => {
  const initialPhone = {
    id: "",
    model: "",
    brand: "",
    price: "",
  };
  const [newPhone, setNewPhone] = useState(initialPhone);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewPhone({ ...newPhone, [name]: value });
  };

  const handleSumit = (event) => {
    event.preventDefault();
    console.log(newPhone);
    if (!newPhone.model || !newPhone.brand || !newPhone.price) {
      alert("All fields not empty!!!");
      return;
    }

    addPhone(newPhone);
    event.target.reset();
    setNewPhone(initialPhone);
  };
  return (
    <div>
      <div className="add-form form" onSubmit={handleSumit}>
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
    </div>
  );
};

export default AddForm;
