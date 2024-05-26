import styles from "./Auth.module.css";

const Login = () => {
  return (
    <div id={styles.login}>
      <h2>Faça seu login</h2>

      <form>
        <input type='email' name='email' placeholder='Seu email' />
        <input type='password' name='' placeholder='Sua senha' />
        <input type='submit' value='Logar' />
      </form>
    </div>
  );
};

export default Login;
