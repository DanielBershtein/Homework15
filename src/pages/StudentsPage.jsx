import React, { useEffect, useState } from "react";
import { postService } from "../services/postService";
import AddStduent from "../components/AddStudent";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/AuthProvider";

const StudentsPage = () => {
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
};

if (!students) return <div>Loading...</div>;
return (
  <>
    <AddStudent addStudent={addStudent} removeStudent={removeStudent} />
  </>
);

export default StudentsPage;
