import { Link, Route, Routes } from "react-router-dom";
import ListView from "./components/ListView";
import AddForm from "./components/AddForm";
import EditForm from "./components/EditForm";

const App = () => {
  return (
    <>
      <h1>
        Item Management System
      </h1>

      <nav>
        <Link className="nav-item" to="/">Home</Link>
        {/* <Link className="nav-item" to="/">Utilities</Link> */}
        <Link className="nav-item" to="/cars">Product</Link>
        <Link className="nav-item" to="/cars/add">Add New</Link>
        {/* <Link className="nav-item" to="/about">About</Link> */}


      </nav>

      <Routes>
          <Route path="/" element={<ListView/>}/>
          <Route path="/cars" element={<ListView/>}/>
          <Route path="/cars/add" element={<AddForm/>}/>
          <Route path="/edit/:id" element={<EditForm/>}/>


          {/* <Route path="" element={}/> */}

      </Routes>
    </>
  );
};

export default App;
