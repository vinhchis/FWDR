import { useState, useEffect } from "react";
const EditForm = ({ updateCountry , pickedCountry}) => {
  const initialCountry = { 
    id: "",
    brand: "",
    model: "",
    price: ""
  }
  const [updatedCountry, setUpdatedCountry] = useState(initialCountry);

  useEffect(() => {
    setUpdatedCountry(pickedCountry)
  },[pickedCountry])

  const handleChange = (event) => {
    const {name, value} = event.target;
    setUpdatedCountry({...updatedCountry,[name] : value});
  }

  const handleSumit = (event) => {
    event.preventDefault();
    const isOk = window.confirm("Are you sure to update this car!!");
    if(isOk){
      if(!updatedCountry.code || !updatedCountry.name || !updatedCountry.capital){
        alert("All fields not empty!!!");
        return
      }
      updateCountry(updatedCountry);
      setUpdatedCountry(initialCountry);
    }
  } 

  return (
    <div className="add-form" onSubmit={handleSumit}>
      <form>
        <table>
          <tbody>
            <tr>
              <td align="right">Contry Code:</td>
              <td>
                <input
                  onChange={handleChange}
                  type="text"
                  name="code"
                  id="code"
                  value={updatedCountry.code}
                />
              </td>
            </tr>
            <tr>
              <td align="right">Country Name:</td>
              <td>
                <input
                  onChange={handleChange}
                  type="text"
                  name="name"
                  id="name"
                  value={updatedCountry.name}
                />
              </td>
            </tr>
            <tr>
              <td align="right">Captital City:</td>
              <td>
                <input
                  onChange={handleChange}
                  type="text"
                  name="capital"
                  id="capital"
                  value={updatedCountry.capital}
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
