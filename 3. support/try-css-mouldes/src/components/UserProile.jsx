const UserProile = ({ name, pic }) => {
  return (
    <>
      <h1>{name}</h1>
      <img src={pic} alt={name} className="user-profile-pic" />
      <h2>Hobbies</h2>
      <ul>
        <li>Badminton</li>
        <li>Chess</li>
        <li>Gaming</li>
      </ul>
    </>
  );
};

export default UserProile;
