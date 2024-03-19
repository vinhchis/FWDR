import { useState } from "react";
import { Routes, Route, Link, Navigate, Router } from "react-router-dom";
import UserList from "./components/UserList";
import Home from "./components/Home";
import UserDetail from "./components/UserDetail";
import NotFound from "./components/NotFound";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";

const App = () => {
  // const USER_LIST = [
  //   {
  //     name: "Cuban",
  //     pic: "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
  //     bio: "Travel fan. Hipster-friendly tv scholar. Friendly communicator. Coffee enthusiast.",
  //   },
  //   {
  //     name: "Spencer",
  //     pic: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
  //     bio: "Award-winning web lover. Thinker. Social media advocate. Creator. Bacon scholar. Zombie geek",
  //   },
  //   {
  //     name: "Robert",
  //     pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2C_xadF4WT19MkU5PpYyU8njyMgMIuttwXQ&usqp=CAU",
  //     bio: "Professional communicator. Travel scholar. Friendly music junkie. Hardcore zombie aficionado",
  //   },

  //   {
  //     name: "Einstein",
  //     pic: "https://media.istockphoto.com/id/1179420343/photo/smiling-man-outdoors-in-the-city.jpg?s=612x612&w=0&k=20&c=8l-gOboGEFSyCFXr09EguDmV0E0bFT5usAms1wyFBh8=",
  //     bio: "Typical travel guru. Friendly entrepreneur. Zombie expert. Thinker. Pop culture evangelist",
  //   },
  // ];

  // var users = USER_LIST;
  
  return (
    <>
      <div className="App">
        <nav className="nav-list">
          <Link to="/">Home</Link>
          <Link to="/users">Users</Link>
          <Link to="/users/add">Add User</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList/>} />
          <Route path="/people" element={<Navigate replace to={"/users"} />} />
          <Route path="/users/:id" element={<UserDetail/>} />
          <Route path="/users/add" element={<AddUser/>}/>
          <Route path="/users/edit/:id" element={<EditUser/>}/>

          <Route path="*" element={<NotFound />} />
        </Routes>

      </div>
    </>
  );
};

export default App;
