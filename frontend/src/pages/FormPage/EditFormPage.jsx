import React, { useEffect, useState } from "react";
import styles from "./FormPage.module.css";
// import { updateProfile, userProfile } from "../../slices/userSlice";
import { useSelector, useDispatch } from "react-redux";
import Message from "../../components/Message";
import {
  createStudent,
  getStudentById,
  resetMessage,
} from "../../slices/student-slice";
import { useNavigate, useParams } from "react-router-dom";
import { useResetComponentMessage } from "../../hooks/use-reset-component-message";

const EditFormPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const resetMessage = useResetComponentMessage(dispatch);
  console.log("FORMM");
  const { student, error, loading, message, success } = useSelector(
    (state) => state.student
  );
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [age, setAge] = useState("");
  // const [grade, setGrade] = useState("");
  // const [registration, setRegistration] = useState("");
  const [studentData, setStudentData] = useState({});
  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    dispatch(getStudentById(id));
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createStudent(student));

    resetMessage();
  };

  // useEffect(() => {
  //   if (student) {
  //     setName(student.name);
  //     setEmail(student.email);
  //     setAge(student.age);
  //     setGrade(student.grade);
  //     setRegistration(student.registration);
  //   }
  // }, [student]);

  return (
    <div id={styles.edit_profile}>
      <h2>Edite o aluno:</h2>
      <p className={styles.subtitle}>Insira as informações do aluno abaixo:</p>

      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Nome'
          name='name'
          onChange={handleChange}
          value={student.name}
        />
        <input
          type='email'
          placeholder='Email'
          name='email'
          disabled
          value={student.email}
        />
        <input
          type='number'
          placeholder='Idade'
          name='age'
          onChange={handleChange}
          value={student.age}
        />
        <input
          type='text'
          placeholder='Série'
          name='grade'
          onChange={handleChange}
          value={student.grade}
        />
        <input
          type='text'
          placeholder='Código de matrícula'
          name='registration'
          onChange={handleChange}
          value={student.registration}
        />

        {!loading && <input type='submit' value='Atualizar' />}
        {loading && <input type='submit' value='Aguarde...' disabled />}
        {error && <Message msg={error} type='error' />}
        {message && <Message msg={message} type='success' />}
        {console.log("msg", message)}
      </form>
    </div>
  );
};

export default EditFormPage;
