import React, { useEffect, useState } from "react";
import styles from "./FormPage.module.css";
// import { updateProfile, userProfile } from "../../slices/userSlice";
import { useSelector, useDispatch } from "react-redux";
import Message from "../../components/Message";
import { createStudent } from "../../slices/student-slice";
import { useNavigate } from "react-router-dom";
// import Message from "../../components/Message/Message";
// import { useResetComponentMessage } from "../../hooks/useResetComponentMessage";

const FormPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    student: studentState,
    error,
    loading,
    message,
    success,
  } = useSelector((state) => state.student);
  // const resetMessage = useResetComponentMessage(dispatch);

  const [student, setStudent] = useState({});

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createStudent(student));
  };

  useEffect(() => {
    if (success && !error) {
      navigate("/students");
    }
  }, [success, error, navigate]);

  return (
    <div id={styles.edit_profile}>
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
        {console.log("ERRO", error)}
        {message && <Message msg={message} type='success' />}
      </form>
    </div>
  );
};

export default FormPage;
