// import styles from "./StudentPage.module.css";
// import TableStudentComponent from "../components/TableStudentComponent";
// import { BsLink } from "react-icons/bs";
// import Button from "react-bootstrap/esm/Button";
// import { Link } from "react-router-dom";

// const StudentPage = () => {
//   return (
//     <div id={styles.student_page}>
//       <TableStudentComponent />
//     </div>
//   );
// };

// export default StudentPage;
import styles from "./StudentPage.module.css";
import TableStudentComponent from "../components/TableStudentComponent";
import { BsLink } from "react-icons/bs";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";

const StudentPage = () => {
  return (
    <div id={styles.student_page}>
      <div className={styles.students_header}>
        <h2>Alunos cadastrados:</h2>
        <Button>
          <Link to='/form'>Adicione um aluno aqui</Link>
        </Button>
      </div>
      <TableStudentComponent />
    </div>
  );
};

export default StudentPage;
