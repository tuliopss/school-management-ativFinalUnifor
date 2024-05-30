import React, { useEffect, useState } from "react";
import styles from "./Auth.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register, reset } from "../../slices/auth-slice";
import authService from "../../services/auth-service";
import Message from "../../components/Message";

const Register = () => {
  const [teacher, setTeacher] = useState({});

  const subjects = ["Matemática", "História", "Geografia", "Gramática"];

  const handleChange = (e) => {
    setTeacher({ ...teacher, [e.target.name]: e.target.value });
  };

  const handleSubject = (e) => {
    setTeacher({
      ...teacher,
      subject: e.target.value,
    });
  };

  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(teacher);
    dispatch(register(teacher));
  };

  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

  return (
    // id={styles.register}
    <div id={styles.register}>
      <h2>Crie já sua conta!</h2>
      <p className={styles.subtitle}>Bem vindo ao Admin School</p>

      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          placeholder='Seu nome'
          onChange={handleChange}
        />
        <input
          type='email'
          name='email'
          placeholder='Seu email'
          onChange={handleChange}
        />
        <input
          type='password'
          name='password'
          placeholder='Sua senha'
          onChange={handleChange}
        />
        <input
          type='password'
          name='confirmPassword'
          placeholder='Confirme Sua senha'
          onChange={handleChange}
        />

        <select className='input' onChange={handleSubject} name='subject'>
          <option disabled selected>
            Selecione
          </option>
          {subjects.map((subject) => (
            <option value={subject} key={subject}>
              {subject}
            </option>
          ))}
        </select>
        <br />
        {!loading && <input type='submit' value='Cadastrar' />}
        {loading && <input type='submit' value='Aguarde...' disabled />}
        {error && <Message msg={error} type='error' />}
      </form>

      <p>
        Já tem uma conta? <Link to='/login'>Entre aqui</Link>
      </p>
    </div>
  );
};

export default Register;
