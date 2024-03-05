import Dashboard from "./components/Dashboard";
import studentsArr from "./data/students";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AddStudent from "./components/AddStudent";
import { useState } from "react";

function App() {
  const [students, setStudents] = useState(studentsArr);
  const [id, setId] = useState(studentsArr.length);

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
  return (
    <main>
      <Header />
      <AddStudent handleAddStudent={handleAddStudent} />
      <h2>Student List</h2>
      <Dashboard students={students} />
      <Footer />
    </main>
  );
}

export default App;
