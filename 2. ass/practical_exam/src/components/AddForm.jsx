import { useState } from "react";

const AddForm = ({addCountry}) => {
  const initialCountry = { 
    id: "",
    code: "",
    name: "",
    capital: ""}
    const [newCountry, setNewCountry] = useState(initialCountry)
  
    const handleChange = (event) => {
      const {name, value} = event.target;
      setNewCountry({...newCountry,[name] : value});
    }
  
    const handleSumit = (event) => {
      event.preventDefault();
      console.log(newCountry)
      if(!newCountry.code || !newCountry.name || !newCountry.capital){
        alert("All fields not empty!!!");
        return
      } 

      addCountry(newCountry);
      event.target.reset();
      setNewCountry(initialCountry);
  
    } 
  return (
    <div className="add-form" onSubmit={handleSumit}>
      <form>
        <table>
          <tbody>
            <tr>
              <td align="right">Contry Code:</td>
              <td>
                <input onChange={handleChange} type="text" name="code" id="code" />
              </td>
            </tr>
            <tr>
              <td align="right">Country Name:</td>
              <td>
                <input onChange={handleChange} type="text" name="name" id="name" />
              </td>
            </tr>
            <tr>
              <td align="right">Captital City:</td>
              <td>
                <input onChange={handleChange} type="text" name="capital" id="capital" />
              </td>
            </tr>
            <tr>
              <td />
              <td align="left">
                <button type="submit">Add new</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default AddForm;
