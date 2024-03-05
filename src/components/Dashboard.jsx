import students from "../data/students";

function Dashboard(props) {
  return (
    <table>
      <tbody>
        <thead>
          <th>Name</th>
          <th>Age</th>
          <th>Major</th>
          <th>University</th>
          <th>Average Grade</th>
        </thead>
        {props.students.map((student) => (
          <tr key={student.id}>
            <td>{student.name}</td>
            <td>{student.age}</td>
            <td>{student.major}</td>
            <td>{student.university}</td>
            <td>{student.averageGrade}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Dashboard;
