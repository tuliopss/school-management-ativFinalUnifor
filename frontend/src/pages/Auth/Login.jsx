import { useDispatch, useSelector } from "react-redux";
import styles from "./Auth.module.css";
import { login } from "../../slices/auth-slice";
import { useEffect, useState } from "react";
import Message from "../../components/Message";

const Login = () => {
  const [teacher, setTeacher] = useState({});
  const { loading, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTeacher({ ...teacher, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(login(teacher));
  };

  useEffect(() => {}, [dispatch]);

  return (
    <div id={styles.login}>
      <h2>Faça seu login</h2>

      <form onSubmit={handleSubmit}>
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
        {!loading && <input type='submit' value='Entrar' />}
        {loading && <input type='submit' value='Aguarde...' disabled />}
        {error && <Message msg={error} type='error' />}
      </form>
    </div>
  );
};

export default Login;
