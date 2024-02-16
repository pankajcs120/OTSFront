import React, { useState } from "react";
import upload from "../../utils/upload";
import "./Register.scss";
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";

function Register() {
  const [file, setFile] = useState(null);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    img: "",
    country: "",
    isSeller: false,
    desc: "",
    phone: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSeller = (e) => {
    setUser((prev) => {
      return { ...prev, isSeller: e.target.checked };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = await upload(file);

    try {
      await newRequest.post("/auth/register", {
        ...user,
        img: url,
      });
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h1>Create a New Account</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="file">Profile Picture</label>
            <input
              type="file"
              id="file"
              onChange={(e) => setFile(e.target.files[0])}
              accept="image/*"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="country">Country</label>
            <input
              type="text"
              id="country"
              name="country"
              placeholder="Enter your country"
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>

      <div className={`register-card ${user.isSeller ? "seller-card" : ""}`}>
        <h1>I Want to Become a Seller</h1>
        <div className="form-group toggle">
          <label htmlFor="isSeller">Activate the Seller Account</label>
          <label className="switch">
            <input type="checkbox" id="isSeller" onChange={handleSeller} />
            <span className="slider round"></span>
          </label>
        </div>
        {user.isSeller && (
          <>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="desc">Description</label>
              <textarea
                id="desc"
                name="desc"
                placeholder="A short description of yourself"
                onChange={handleChange}
                required
              ></textarea>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Register;
