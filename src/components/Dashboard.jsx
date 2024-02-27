import { students } from "../data/students";
function Dashboard() {
  return (
    <div className="student-list">
      {students.map((student) => (
        <div className="student" key={student.id}>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Major</th>
                <th>University</th>
                <th>Average Grade</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.major}</td>
                <td>{student.university}</td>
                <td>{student.averageGrade}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
