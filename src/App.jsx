import Dashboard from "./components/Dashboard";
import studentsArr from "./data/students";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AddStudent from "./components/AddStudent";
import { useEffect, useState } from "react";
import { userService } from "./services/userService";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AuthProvider from "./context/AuthProvider";
import ProfilePage from "./pages/ProfilePage";

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [showRegister, setShowRegister] = useState(false);
  const [students, setStudents] = useState(studentsArr);
  const [id, setId] = useState(studentsArr.length);
  const [svg, setSvg] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const data = await userService.fetchAvatar();
      console.log(data);
    };
  }, []);

  useEffect(() => {
    const loggedInUser = storageService.getLoggedInUser();
    console.log({ loggedInUser });

    if (loggedInUser) {
      setLoggedInUser(loggedInUser);
    }
  }, []);

  useEffect(() => {
    const loadImage = async () => {
      const image = await userService.fetchAvatar();
      if (image) {
        setSvg(image);
      }
    };
    loadImage();
  }, []);

  const handleAddStudent = (newStudent) => {
    newStudent = {
      id: setId((prevData) => prevData++),
      name: newStudent.name,
      major: newStudent.major,
      university: newStudent.university,
      averageGrade: newStudent.averageGrade,
    };

    setStudents([...students, newStudent]);
  };

  const removeStudent = (studentId) => {
    const updatedStudentTable = students.filter(
      (student) => student.id !== studentId
    );
    setStudents(updatedStudentTable);
  };

  const handleAuth = (username, password, isRegister = false, email = "") => {
    if (isRegister) {
      // register
      userService.createUser(username, email, password);
      setShowRegister(false);
    } else {
      // login
      const user = userService.login(username, password);
      if (!user) {
        alert("Invalid credentials");
        setShowRegister(true);
        return;
      }
      setLoggedInUser(user);
    }
  };

  const handleLogout = () => {
    userService.logout();
    setLoggedInUser(null);
  };
  return (
    <main>
      {/* <Header loggedInUser={loggedInUser} handleLogout={handleLogout} />
      !loggedInUser ? ( showRegister ? (
      <Register handleAuth={handleAuth} setShowRegister={setShowRegister} />
      ) : (
      <Login handleAuth={handleAuth} setShowRegister={setShowRegister} />
      ) ) : ( <AddStudent handleAddStudent={handleAddStudent} />
      <h2>Student List</h2>
      <Dashboard
        loggedInUser={loggedInUser}
        students={students}
        removeStudent={removeStudent}
      />
      {loggedInUser.isAdmin ? (
        <Admin users={users} removeUser={removeUser} />
      ) : null}
      <img src={svg} width="100px" height="100px" />
      <Footer /> ) */}
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<RegisterPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </AuthProvider>
    </main>
  );
}

export default App;
