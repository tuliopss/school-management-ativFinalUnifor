import styles from "./Home.module.css";
import Message from "../components/Message";
import TableTeacherComponent from "../components/TableTeacherComponent";

const Home = () => {
  return (
    <div id={styles.home}>
      <h2>Professores cadastrados:</h2>
      <TableTeacherComponent />
    </div>
  );
};

export default Home;
