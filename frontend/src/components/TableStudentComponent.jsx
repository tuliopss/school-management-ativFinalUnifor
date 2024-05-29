// import Table from "react-bootstrap/Table";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { deleteStudent, getStudents } from "../slices/student-slice";
// import Button from "react-bootstrap/Button";
// import { BsFillEyeFill, BsFillTrash3Fill, BsPencilFill } from "react-icons/bs";
// import styles from "../pages/StudentPage.module.css";

// function TableStudentComponent() {
//   const { students, loading } = useSelector((state) => state.student);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getStudents());
//   }, [dispatch]);

//   const handleDelete = (id) => {
//     dispatch(deleteStudent(id));
//     console.log(students);
//   };

//   if (loading) {
//     return <p>Carregando...</p>;
//   }
//   return (
//     <Table responsive>
//       <thead>
//         <tr>
//           <th>#ID</th>
//           <th>Nome</th>
//           <th>Email</th>
//           <th>Idade</th>
//           <th>Série</th>
//           <th>Ações</th>
//         </tr>
//       </thead>
//       <tbody>
//         {students &&
//           students.map((student) => (
//             <tr key={student._id}>
//               <td>{student._id}</td>
//               <td>{student.name}</td>
//               <td>{student.email}</td>
//               <td>{student.age}</td>
//               <td>{student.grade}</td>
//               <td className={styles.actions}>
//                 <Button
//                   variant='danger'
//                   size='sm'
//                   onClick={() => {
//                     handleDelete(student._id);
//                   }}>
//                   <BsFillTrash3Fill />
//                 </Button>
//                 <Button variant='warning'>
//                   <BsPencilFill />
//                 </Button>
//                 <Button variant='primary'>
//                   <BsFillEyeFill />
//                 </Button>
//               </td>
//             </tr>
//           ))}
//         {/* <tr>
//           <td>1</td>
//           {Array.from({ length: 12 }).map((_, index) => (
//             <td key={index}>Table cell {index}</td>
//           ))}
//         </tr> */}
//       </tbody>
//     </Table>
//   );
// }

// export default TableStudentComponent;
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteStudent, getStudents } from "../slices/student-slice";
import Button from "react-bootstrap/Button";
import { BsFillEyeFill, BsFillTrash3Fill, BsPencilFill } from "react-icons/bs";
import styles from "../pages/StudentPage.module.css";
import { Link } from "react-router-dom";

function TableStudentComponent() {
  const { students, loading } = useSelector((state) => state.student);
  const dispatch = useDispatch();
  console.log("render");
  useEffect(() => {
    dispatch(getStudents());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteStudent(id));
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      {/* <div className={styles.students_header}>
        <h2>Alunos cadastrados:</h2>
        <Link to='/form'>Adicione um aluno aqui</Link>
      </div> */}
      <Table responsive>
        <thead>
          <tr>
            <th>#ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Idade</th>
            <th>Série</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {students &&
            students.map((student) => (
              <tr key={student._id}>
                <td>{student._id}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.age}</td>
                <td>{student.grade}</td>
                <td className={styles.actions}>
                  <Button
                    variant='danger'
                    size='sm'
                    onClick={() => handleDelete(student._id)}>
                    <BsFillTrash3Fill />
                  </Button>
                  <Button variant='warning'>
                    <Link to={`/edit/${student._id}`}>
                      <BsPencilFill />
                    </Link>
                  </Button>
                  <Button variant='primary'>
                    <BsFillEyeFill />
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
}

export default TableStudentComponent;
