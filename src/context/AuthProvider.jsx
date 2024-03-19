import { createContext, useContext, useEffect, useState } from "react";
import { storageService } from "../services/storageService";
import { userService } from "../services/userService";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const existUser = storageService.getLoggedInUser();
    if (existUser) {
      setUser(existUser);
    }
  }, []);

  const handleRegister = (newUser) => {
    const res = userService.createUser(newUser);
    if (!res) return;
    navigate("/login");
  };

  const handleLogin = (username, password) => {
    const user = userService.login(username, password);
    if (!user) {
      alert("User not found");
      navigate("/signup");
    }
    setUser(user);
    navigate("/students");
  };

  const handleLogout = () => {
    userService.logout();
    setUser(null);
    navigate("/login");
  };

  const value = { user, handleLogin, handleRegister, handleLogout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

export const useUser = () => useContext(AuthContext);
