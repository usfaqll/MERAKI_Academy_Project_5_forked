import React, { useState, useEffect } from "react";
import "./Register.css";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Button from "react-bootstrap/Button";
import logo from "../assets/pngwing.com.png";
const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("male");
  const [age, setAge] = useState(null);
  const [roleId, setRoleId] = useState(null);
  const [typeOfAccount, setTypeOfAccount] = useState("");
  return (
    <div className="Register-Page">
      <div className="Left-Image">
        <img className="image" src={logo} />
      </div>
      <div className="Right-Inputs">
        <h1>Register</h1>
        <div className="FirstName-LastName">
          <div className="FirstName">
            <Form.Label>First Name:</Form.Label>
            <Form.Control
              type="text"
              style={{
                backgroundColor: "#1e1e1e",
                border: "0",
                color: "white",
              }}
            />
          </div>
          <div className="LastName">
            <Form.Label>Last Name:</Form.Label>
            <Form.Control
              type="text"
              style={{
                backgroundColor: "#1e1e1e",
                border: "0",
                color: "white",
              }}
            />
          </div>
        </div>
        <div className="Email">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            style={{ backgroundColor: "#1e1e1e", border: "0", color: "white" }}
          />
        </div>
        <div className="Password">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            style={{ backgroundColor: "#1e1e1e", border: "0", color: "white" }}
          />
        </div>
        <div className="Age-Gender">
          <div className="Age">
            <Form.Label>Age:</Form.Label>
            <Form.Control
              type="number"
              style={{
                backgroundColor: "#1e1e1e",
                border: "0",
                color: "white",
              }}
            />
          </div>

          <div className="Gender-label">
            <Form.Label>Gender:</Form.Label>
            <div
              className="Gender"
              style={{
                backgroundColor: "#1e1e1e",
                border: "0",
                color: "white",
              }}
            >
              <div className="Male">
                <label style={{ color: "white" }}>
                  <input
                    type="radio"
                    value="Male"
                    checked={gender === "male"}
                    onChange={() => {
                      setGender("male");
                    }}
                  />
                  Male
                </label>
              </div>
              <div className="Female">
                <label style={{ color: "white" }}>
                  <input
                    type="radio"
                    value="Female"
                    checked={gender === "female"}
                    onChange={() => {
                      setGender("female");
                    }}
                  />
                  Female
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="Account">
          <div className="Account-Label"></div>
          <Form.Label>Account:</Form.Label>
          <div
            className="User-Coach"
            style={{ backgroundColor: "#1e1e1e", border: "0", color: "white" }}
          >
            <div className="User">
              {" "}
              <label style={{ color: "white" }}>
                <input
                  type="radio"
                  value="user"
                  checked={roleId === 2}
                  onChange={() => {
                    setRoleId(2);
                  }}
                />
                User
              </label>
            </div>
            <div className="Coach">
              <label style={{ color: "white" }}>
                <input
                  type="radio"
                  value="coach"
                  checked={roleId === 3}
                  onChange={() => {
                    setRoleId(3);
                  }}
                />
                Coach
              </label>
            </div>
          </div>
        </div>
        <div className="Check-Forget">
          <div className="Check">
            <small>check</small>
          </div>
          <div className="Forget">
            <small>Forget Password?</small>
          </div>
        </div>
        <div className="Register-Btn">
          <Button variant="success">Register</Button>
        </div>
        <div className="doYou">
          <small>
            Do you have account?
            <a style={{ color: "#7aad28" }}>create account now</a>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Register;
