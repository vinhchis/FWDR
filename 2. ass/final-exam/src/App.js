import { useEffect, useState } from "react";
import ListView from "./components/ListView.jsx";
import PhonesDB from "./Phones.json";
import AddForm from "./components/AddForm.jsx";
import EditForm from "./components/EditForm.jsx";

const App = () => {
  const [phones, setPhones] = useState([]);
  const [pickedPhone, setPickedPhone] = useState({
    id: "",
    model: "",
    brand: "",
    price: "",
  });

  const [editting, setEditting] = useState(false);

  useEffect(() => {
    setPhones(PhonesDB);
  }, []);

  const addPhone = (newPhone) => {
    setPhones([...phones, { ...newPhone, id: phones.length + 1 }]);
  };

  const updatePhone = (updatedPhone) => {
    setPhones((phones) =>
      phones.map((p) => (p.id == updatedPhone.id ? updatedPhone : p))
    );
  };

  return (
    <>
      {editting ? (
        <EditForm pickedPhone={pickedPhone} updatePhone={updatePhone} />
      ) : (
        <AddForm addPhone={addPhone} />
      )}

      <ListView
        phones={phones}
        addPhone={addPhone}
        setPickedPhone={setPickedPhone}
        setEditting={setEditting}
      />
    </>
  );
};

export default App;
