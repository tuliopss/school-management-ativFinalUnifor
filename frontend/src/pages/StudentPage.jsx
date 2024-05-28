import styles from "./StudentPage.module.css";
import TableStudentComponent from "../components/TableStudentComponent";

const StudentPage = () => {
  return (
    <div id={styles.student_page}>
      {" "}
      <h2>Alunos cadastrados:</h2>
      <TableStudentComponent />
    </div>
  );
};

export default StudentPage;
