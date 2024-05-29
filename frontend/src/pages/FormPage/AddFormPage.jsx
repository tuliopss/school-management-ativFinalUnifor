import React, { useEffect, useState } from "react";
import styles from "./FormPage.module.css";
// import { updateProfile, userProfile } from "../../slices/userSlice";
import { useSelector, useDispatch } from "react-redux";
import Message from "../../components/Message";
import { createStudent, resetMessage } from "../../slices/student-slice";
import { useNavigate } from "react-router-dom";
import { useResetComponentMessage } from "../../hooks/use-reset-component-message";

const FormPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const resetMessage = useResetComponentMessage(dispatch);
  const {
    student: studentState,
    error,
    loading,
    message,
    success,
  } = useSelector((state) => state.student);

  const [student, setStudent] = useState({});

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createStudent(student));
    // if (success) {
    //   navigate("/students");
    // }

    resetMessage();
  };

  return (
    <div>
      <h2>Registre um aluno:</h2>
      <p className={styles.subtitle}>Insira as informações do aluno abaixo:</p>

      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Nome'
          name='name'
          onChange={handleChange}
        />
        <input
          type='email'
          placeholder='Email'
          name='email'
          onChange={handleChange}
        />
        <input
          type='number'
          placeholder='Idade'
          name='age'
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder='Série'
          name='grade'
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder='Código de matrícula'
          name='registration'
          onChange={handleChange}
        />

        {!loading && <input type='submit' value='Registrar' />}
        {loading && <input type='submit' value='Aguarde...' disabled />}
        {error && <Message msg={error} type='error' />}
        {message && <Message msg={message} type='success' />}
        {console.log("msg", message)}
      </form>
    </div>
  );
};

export default FormPage;
