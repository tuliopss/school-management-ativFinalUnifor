import React from "react";
import styles from "./Auth.module.css";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    // id={styles.register}
    <div id={styles.register}>
      <h2>Crie já sua conta!</h2>
      <p className={styles.subtitle}>Bem vindo ao Admin School</p>

      <form>
        <input type='text' name='name' placeholder='Seu nome' />
        <input type='email' name='email' placeholder='Seu email' />
        <input type='password' name='password' placeholder='Sua senha' />
        <input
          type='password'
          name='confirmPassword'
          placeholder='Confirme Sua senha'
        />
        <input type='text' name='subject' placeholder='Sua disciplina' />
        <input type='submit' value='Cadastrar' />
      </form>

      <p>
        Já tem uma conta? <Link to='/login'>Entre aqui</Link>
      </p>
    </div>
  );
};

export default Register;
