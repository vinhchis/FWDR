import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import { object, string } from "yup";
import { useEffect, useState } from "react";

const EditUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://64edd0121f8721827141c8a3.mockapi.io/users/${id}`)
      .then((data) => data.json())
      .then((UserInfo) => setUser(UserInfo));
  }, []);
  return user ? <EditUserForm user={user} /> : <p>Loading...</p>;
};

const EditUserForm = ({ user }) => {
  const userValidationSchema = object({
    name: string().required(),
    pic: string().url().required(),
    bio: string().min(10).required(),
  });

  const navigate = useNavigate();

  const addUser = (updatedUser) => {
    fetch(`https://64edd0121f8721827141c8a3.mockapi.io/users/${user.id}`, {
      method: "PUT",
      body: JSON.stringify(updatedUser),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => navigate("/users"));
  };

  const { handleSubmit, handleChange, errors, touched, handleBlur, values } =
    useFormik({
      initialValues: {
        name: user.name,
        pic: user.pic,
        bio: user.bio,
      },
      onSubmit: (newUser) => {
        addUser(newUser);
      },
      validationSchema: userValidationSchema,
    });
  return (
    <form className="add-user-form" onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        onBlur={handleBlur}
        type="text"
        placeholder="Name"
        name="name"
        value={values.name}
      />
      {touched.name && errors.name ? <p>{errors.name}</p> : null}

      <input
        onChange={handleChange}
        onBlur={handleBlur}
        type="text"
        placeholder="Pic"
        name="pic"
        value={values.pic}
      />
      {touched.pic && errors.pic ? <p>{errors.pic}</p> : null}

      <input
        onChange={handleChange}
        onBlur={handleBlur}
        type="text"
        placeholder="Bio"
        name="bio"
        value={values.bio}
      />
      {touched.bio && errors.bio ? <p>{errors.bio}</p> : null}

      {/* <p>Errors</p>
      <pre>{JSON.stringify(formik.errors)}</pre> */}
      <button type="submit">Save</button>
    </form>
  );
};

export default EditUser;
