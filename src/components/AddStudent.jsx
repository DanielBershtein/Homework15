import { useState } from "react";
import Button from "./Button";

const AddStudent = ({ handleAddStudent }) => {
  const [newStudent, setNewStudent] = useState(null);

  const submit = (event) => {
    event.preventDefault();
    const { name, age, major, university, averageGrade } = newStudent;
    if (!name || age <= 0 || !major || !university || averageGrade <= 0) return;
    handleAddStudent(newStudent);
  };
  const handleChange = (e) => {
    const name = e.target.name;
    // const age = e.target.age;
    // const major = e.target.major;
    // const university = e.target.university;
    // const averageGrade = e.target.averageGrade;
    const value = e.target.value;
    setNewStudent({
      ...newStudent,
      [name]: value,
      // [age]: value,
      // [major]: value,
      // [university]: value,
      // [averageGrade]: value,
    });
  };
  return (
    <>
      <form onSubmit={submit}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          onChange={handleChange}
          value={newStudent.name}
          placeholder="Student name.."
        />
        <label htmlFor="age">Age: </label>
        <input
          type="number"
          onChange={handleChange}
          value={newStudent.age}
          placeholder="Student age.."
        />
        <label htmlFor="major">Major: </label>
        <input
          type="text"
          onChange={handleChange}
          value={newStudent.major}
          placeholder="Student major.."
        />
        <label htmlFor="university">University: </label>
        <input
          type="text"
          onChange={handleChange}
          value={newStudent.university}
          placeholder="Student university.."
        />
        <label htmlFor="averageGrade">Average Grade: </label>
        <input
          type="number"
          onChange={handleChange}
          value={newStudent.averageGrade}
          placeholder="Student average grade.."
        />
        <Button>Add</Button>
      </form>
    </>
  );
};

export default AddStudent;
