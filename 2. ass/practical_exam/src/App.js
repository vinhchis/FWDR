import { useEffect, useState } from "react";
import AddForm from "./components/AddForm";
import ListView from "./components/ListView";
import CountryDB from "./Countries.json";
import EditForm from "./components/EditForm";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [pickedCountry, setPickedCountry] = useState({
    id: "",
    code: "",
    name: "",
    capital: "",
  });

  useEffect(() => {
    setCountries(CountryDB);
    console.log("run only");
  },[]);

  const addCountry = (newCountry) => {
    setCountries([...countries, { ...newCountry, id: countries.length + 1 }]);
  };

  const deleteCountry = (id) => {
    const isDelete = window.confirm("Are you sure to delelte this country!!");
    if(isDelete){
      setCountries((countries) => countries.filter((c) => c.id != id));
    }
    return;
  };

  const updateCountry = (updatedCountry) => {
    setCountries((countries) =>
      countries.map((c) => (c.id == updatedCountry.id ? updatedCountry : c))
    );
  };

  return (
    <div>
      <header>
        <div className="header-top">
          <div className="logo">
            <img src="./assets/img/logo.png" alt="SOFTING" />
          </div>
          <div className="search-box">
            <input type="text" placeholder="Enter your search" />
          </div>
        </div>
        <nav>
          <div>
            <a href="#">HomePage</a>
          </div>
          <div>
            <a href="#">Investment</a>
          </div>
          <div>
            <a href="#">Business</a>
          </div>
          <div>
            <a href="#">Society</a>
          </div>
          <div>
            <a href="#">About</a>
          </div>
        </nav>
      </header>

      <AddForm addCountry={addCountry}/>
      <EditForm updateCountry={updateCountry} pickedCountry={pickedCountry}/>
      <ListView countries={countries} deleteCountry={deleteCountry} setPickedCountry={setPickedCountry}/>
      
    </div>
  );
};

export default App;
