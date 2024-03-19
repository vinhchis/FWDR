import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { object, string } from "yup";

function AddUser() {
  const navigate = useNavigate();
  const userValidationSchema = object({
    name: string().required(),
    pic: string().url().required(),
    bio: string().min(10).required(),
  });
  
  const addUser = (newUser) => {
    fetch(`https://64edd0121f8721827141c8a3.mockapi.io/users`, {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => navigate("/users"));
  };
  const { handleSubmit, handleChange, errors, touched, 
    handleBlur } = useFormik({
    initialValues: {
      name: "",
      pic: "",
      bio: "",
    },
    onSubmit: (newUser) => {
      addUser(newUser);
    },
    validationSchema: userValidationSchema
  });


  return (
    <form className="add-user-form" onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        onBlur={handleBlur}
        type="text"
        placeholder="Name"
        name="name"
      />
      {touched.name && errors.name ? (<p>{errors.name}</p>): null}

      
      <input
        onChange={handleChange}
        onBlur={handleBlur}
        type="text"
        placeholder="Pic"
        name="pic"
      />
      {touched.pic && errors.pic ? (<p>{errors.pic}</p>): null}


      <input
        onChange={handleChange}
        onBlur={handleBlur}
        type="text"
        placeholder="Bio"
        name="bio"
      />
      {touched.bio && errors.bio ? (<p>{errors.bio}</p>): null}

      {/* <p>Errors</p>
      <pre>{JSON.stringify(formik.errors)}</pre> */}
      <button type="submit">Add user</button>
      
    </form>
  );
}
export default AddUser;
