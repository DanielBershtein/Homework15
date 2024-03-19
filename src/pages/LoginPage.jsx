import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/AuthProvider";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { handleLogin, user } = useUser();

  useEffect(() => {
    if (user) {
      navigate("/posts");
    }
  }, [user, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    handleLogin(username, password);
  };

  return (
    <section className="login-container">
      <h1>Login form</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="btn-login">Login</button>
      </form>
      <div className="auth-switch">
        <p>
          Don't have an account?{" "}
          <button onClick={() => navigate("/signup")}>Sign up</button>
        </p>
      </div>
    </section>
  );
};

export default LoginPage;
