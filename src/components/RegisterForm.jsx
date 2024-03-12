import React, { useRef } from "react";

const Register = ({ setShowRegister, handleAuth }) => {
  const userNameRef = useRef(null);
  const passwordRef = useRef(null);
  const emailRef = useRef(null);

  const handleRegister = (e) => {
    e.preventDefault();

    const username = userNameRef.current.value;
    const password = passwordRef.current.value;
    const email = emailRef.current.value;

    if (!username.trim() || !password.trim() || !email.trim()) return;

    handleAuth(username, password, true, email);
  };

  return (
    <section className="register-container">
      <h1>Register form</h1>

      <form onSubmit={handleRegister}>
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
          Already have an account?{"  "}{" "}
          <button onClick={() => setShowRegister(false)}>Sign in</button>
        </p>
      </div>
    </section>
  );
};

export default Register;
