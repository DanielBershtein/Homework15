import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/AuthProvider";

const RegisterPage = () => {
  const userNameRef = useRef(null);
  const passwordRef = useRef(null);
  const emailRef = useRef(null);
  const navigate = useNavigate();
  const { handleRegister, user } = useUser();

  useEffect(() => {
    if (user) {
      navigate("/posts");
    }
  }, [navigate, user]);
  const onSubmit = (e) => {
    e.preventDefault();

    const username = userNameRef.current.value;
    const password = passwordRef.current.value;
    const email = emailRef.current.value;

    if (!username.trim() || !password.trim() || !email.trim()) return;

    const newUser = { username, email, password };

    handleRegister(newUser);
  };

  return (
    <section className="register-container">
      <h1>Register form</h1>

      <form onSubmit={onSubmit}>
        <div className="input-wrapper">
          <label htmlFor="email">Email: </label>
          <input type="email" id="email" ref={emailRef} />
        </div>

        <div className="input-wrapper">
          <label htmlFor="username">Username: </label>
          <input type="text" id="username" ref={userNameRef} />
        </div>

        <div className="input-wrapper">
          <label htmlFor="password">Password: </label>
          <input type="password" id="password" ref={passwordRef} />
        </div>

        <button className="btn-register">Register</button>
      </form>
      <div className="auth-switch">
        <p>
          Already have an account?{" "}
          <button onClick={() => navigate("/login")}>Sign in</button>
        </p>
      </div>
    </section>
  );
};

export default RegisterPage;
