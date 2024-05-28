import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { getTeachers } from "../slices/teacher-slice";
import { useEffect } from "react";

function TableTeacherComponent() {
  const { teachers, loading } = useSelector((state) => state.teacher);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTeachers());
  }, [dispatch]);

  if (loading) {
    return <p>Carregando...</p>;
  }
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>#ID</th>
          <th>Nome</th>
          <th>Email</th>
          <th>Disciplina</th>
        </tr>
      </thead>
      <tbody>
        {teachers &&
          teachers.map((teacher) => (
            <tr key={teacher._id}>
              <td>{teacher._id}</td>
              <td>{teacher.name}</td>
              <td>{teacher.email}</td>
              <td>{teacher.subject}</td>
            </tr>
          ))}
        {/* <tr>
          <td>1</td>
          {Array.from({ length: 12 }).map((_, index) => (
            <td key={index}>Table cell {index}</td>
          ))}
        </tr> */}
      </tbody>
    </Table>
  );
}

export default TableTeacherComponent;
