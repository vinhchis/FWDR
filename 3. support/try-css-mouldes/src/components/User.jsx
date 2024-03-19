import { useNavigate } from "react-router-dom";

function User({ name, pic, id, deleteButton, updateButton }) {
  const navigate = useNavigate();
  return (
    <section className="user-container">
      <img className="user-profile-pic" src={pic} alt={name} />
      <h2 className="user-name">
        Hello, <span className="user-first-name">{name}</span> 🎉🔥
      </h2>
      <button
        onClick={() => {
          navigate(`/users/${id}`);
        }}
      >
        Info
      </button>
      {deleteButton}
      {updateButton}
    </section>
  );
}

export default User;
