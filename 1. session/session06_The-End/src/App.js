import { useEffect, useState } from "react";
import Car from "./components/Car";
import Parent from "./components/Parent";
import Battery from "./components/Battery";

const App = () => {
  const daddy = {
    house: "LM 81",
    car: "VF 8",
    money: "1000",
  };

  const [battery, setBattery] = useState(0);
  const [showModel, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModel);
  }
  const chargeBattery = () => {
    setBattery(battery + 10);
  };

  useEffect(() => {
    if (battery === 100) {
      document.title = "Your battery is full!";
      toggleModal();
      setBattery(0);
    }
  });

  return (
    <div className="container">
      <div>
        <Parent daddy={daddy} />
        <Car />
      </div>
      <Battery battery={battery} chargeBattery={chargeBattery} showModel={showModel} toggleModal={toggleModal}/>
    </div>
  );
};

export default App;
