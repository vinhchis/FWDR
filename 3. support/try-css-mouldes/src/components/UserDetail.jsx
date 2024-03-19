import { useState, useEffect } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";

function UserDetail() {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const getUser = () => {
    fetch(`https://64edd0121f8721827141c8a3.mockapi.io/users/${id}`)
      .then((data) => data.json())
      .then((userInfo) => setUser(userInfo));
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <section className="user-detail-container">
      <img className="user-profile-pic" src={user.pic} alt={user.name} />
      <div>
        <h2 className="user-name">{user.name}</h2>
        <p>{user.bio}</p>
      </div>
    </section>
  );
}

export default UserDetail;
