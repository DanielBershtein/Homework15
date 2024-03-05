import { useState } from "react";
import Button from "./Button";

const AddStudent = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [major, setMajor] = useState("");
  const [university, setUniversity] = useState("");
  const [averageGrade, setAverageGrade] = useState("");

  const submit = (event) => {
    event.preventDefault();
    const newStudent = { name, age, major, university, averageGrade };
    handleAddStudent(newStudent);
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const age = e.target.age;
    const major = e.target.major;
    const university = e.target.university;
    const averageGrade = e.target.averageGrade;
    const value = e.target.value;
    setNewStudent({
      ...newStudent,
      [name]: value,
      [age]: value,
      [major]: value,
      [university]: value,
      [averageGrade]: value,
    });
  };
  return (
    <>
      <form onSubmit={submit}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          onChange={handleChange}
          value={name}
          placeholder="Student name.."
        />
        <label htmlFor="age">Age: </label>
        <input
          type="text"
          onChange={handleChange}
          value={age}
          placeholder="Student age.."
        />
        <label htmlFor="major">Major: </label>
        <input
          type="text"
          onChange={handleChange}
          value={major}
          placeholder="Student major.."
        />
        <label htmlFor="university">University: </label>
        <input
          type="text"
          onChange={handleChange}
          value={university}
          placeholder="Student university.."
        />
        <label htmlFor="averageGrade">Average Grade: </label>
        <input
          type="text"
          onChange={handleChange}
          value={averageGrade}
          placeholder="Student average grade.."
        />
        <Button />
      </form>
    </>
  );
};

export default AddStudent;
