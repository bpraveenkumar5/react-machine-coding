import React, { useState } from "react";
import "./Register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    mobile: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setNameError("");
    setEmailError("");
    setPasswordError("");
    setMobileError("");
    setSuccessMessage("");

    let isValid = true;

    if (formData.fullName === "") {
      setNameError("Full Name is required");
      isValid = false;
    }

    if (formData.email === "") {
      setEmailError("Email is required");
      isValid = false;
    } else if (!formData.email.includes("@")) {
      setEmailError("Email must contain @");
      isValid = false;
    }

    if (formData.password === "") {
      setPasswordError("Password is required");
      isValid = false;
    } else if (formData.password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      isValid = false;
    }

    if (formData.mobile === "") {
      setMobileError("Mobile Number is required");
      isValid = false;
    } else if (
      formData.mobile.length !== 10 ||
      isNaN(formData.mobile)
    ) {
      setMobileError("Mobile Number must contain exactly 10 digits");
      isValid = false;
    }

    if (isValid) {
      setSuccessMessage("Form Submitted Successfully!");

      setSubmittedData(formData);
    }
  };

  return (
    <div className="container">

      <form className="form" onSubmit={handleSubmit}>

        <h2>Registration Form</h2>

        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
          <span>{nameError}</span>
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <span>{emailError}</span>
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <span>{passwordError}</span>
        </div>

        <div className="form-group">
          <label>Mobile Number</label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
          />
          <span>{mobileError}</span>
        </div>

        <button type="submit">Submit</button>

        {successMessage && (
          <p className="success">{successMessage}</p>
        )}

      </form>

      {submittedData && (
        <div className="card">

          <h2>Submitted Data</h2>

          <table>
            <tbody>
              <tr>
                <th>Full Name</th>
                <td>{submittedData.fullName}</td>
              </tr>

              <tr>
                <th>Email</th>
                <td>{submittedData.email}</td>
              </tr>

              <tr>
                <th>Password</th>
                <td>{submittedData.password}</td>
              </tr>

              <tr>
                <th>Mobile</th>
                <td>{submittedData.mobile}</td>
              </tr>
            </tbody>
          </table>

        </div>
      )}

    </div>
  );
};

export default Register;