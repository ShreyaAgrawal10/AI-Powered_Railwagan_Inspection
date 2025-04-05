import React, { useState } from "react";
import styled from "styled-components";
import { useAuth } from "../context/AuthContext"; // Import authentication context

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth(); // Use login function from context

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Login successful:", data);

        // Call login function from AuthContext with user data
        login(data.user);

        // Redirect to home page
        window.location.href = "/";
      } else {
        setError(data.message || "Invalid email or password");
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <StyledWrapper>
      <form className="form" onSubmit={handleSubmit}>
        <p id="heading">Login</p>
        {error && <p className="error">{error}</p>}
        <div className="field">
          <input
            autoComplete="off"
            placeholder="Email"
            className="input-field"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="field">
          <input
            placeholder="Password"
            className="input-field"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="btn">
          <button className="button1" type="submit">
            Login
          </button>
        </div>
      </form>
    </StyledWrapper>
  );
};

// StyledWrapper remains unchanged
const StyledWrapper = styled.div`
  .error {
    color: red;
    font-size: 14px;
    text-align: center;
    margin-bottom: 10px;
  }
  .form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-left: 2em;
    padding-right: 2em;
    padding-bottom: 0.4em;
    background-color: #171717;
    border-radius: 25px;
    transition: 0.4s ease-in-out;
  }
  .form:hover {
    transform: scale(1.05);
    border: 1px solid black;
  }
  #heading {
    text-align: center;
    margin: 2em;
    color: white;
    font-size: 1.2em;
  }
  .field {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5em;
    border-radius: 25px;
    padding: 0.6em;
    border: none;
    outline: none;
    color: white;
    background-color: #171717;
    box-shadow: inset 2px 5px 10px rgb(5, 5, 5);
  }
  .input-field {
    background: none;
    border: none;
    outline: none;
    width: 100%;
    color: #d3d3d3;
  }
  .btn {
    display: flex;
    justify-content: center;
    margin-top: 2.5em;
    margin-bottom: 2em;
  }
  .button1 {
    width: 100%;
    padding: 0.5em;
    border-radius: 5px;
    border: none;
    outline: none;
    background-color: #252525;
    color: white;
    transition: 0.4s ease-in-out;
  }
  .button1:hover {
    background-color: black;
  }
`;

export default Form;
