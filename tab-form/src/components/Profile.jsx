import React from "react";
import "./Profile.css";

const Profile = ({ data, setData, errors }) => {
  const { name, age, email } = data;

  const handleChange = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="profile-form">

      <div className="form-group">
        <label>Name</label>

        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="Enter your name"
        />

        {errors?.name && <p className="error">{errors.name}</p>}
      </div>

      <div className="form-group">
        <label>Age</label>

        <input
          type="number"
          name="age"
          value={age}
          onChange={handleChange}
          placeholder="Enter your age"
        />

        {errors?.age && <p className="error">{errors.age}</p>}
      </div>

      <div className="form-group">
        <label>Email</label>

        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Enter your email"
        />

        {errors?.email && <p className="error">{errors.email}</p>}
      </div>

    </div>
  );
};

export default Profile;