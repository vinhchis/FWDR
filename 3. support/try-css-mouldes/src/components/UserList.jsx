import User from "./User";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function UserList() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const getUsers = () => {
    // default => GET method
    fetch("https://64edd0121f8721827141c8a3.mockapi.io/users")
      .then((data) => data.json())
      .then((UserList) => setUsers(UserList));
  };

  useEffect(() => getUsers(), []);

  const deleteUser = (id) => {
    fetch(`https://64edd0121f8721827141c8a3.mockapi.io/users/${id}`, {
      method: "DELETE",
    }).then((data) => data.json()).then(() => getUsers());
  };



  return (
    <div className="user-list-container">
      {/* index trùng với id   */}
      {users.map((usr) => (
        // dùng key:  react cần phần biệt các phần tử của 1 mảng
        <User
          name={usr.name}
          pic={usr.pic}
          id={usr.id}
          key={usr.id}
          deleteButton={
            <button onClick={() => deleteUser(usr.id)}>Delete</button>
          }

          updateButton={
            <button onClick={() => navigate(`/users/edit/${usr.id}`)}>Update</button>
          }
        />
      ))}
    </div>
  );
}

export default UserList;
