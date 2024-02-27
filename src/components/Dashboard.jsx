import { students } from "../data/students";
function Dashboard(props) {
  return (
    <table>
      <thead>
        <th>Name</th>
        <th>Age</th>
        <th>Major</th>
        <th>University</th>
        <th>Average Grade</th>
      </thead>
      <tbody>
        <tr>
          <td>{props.name}</td>
          <td>{props.age}</td>
          <td>{props.major}</td>
          <td>{props.university}</td>
          <td>{props.averageGrade}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Dashboard;
