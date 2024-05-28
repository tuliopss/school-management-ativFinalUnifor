import styles from "./Home.module.css";
import Message from "../components/Message";
import TableTeacherComponent from "../components/TableTeacherComponent";

const Home = () => {
  return (
    <div id={styles.home}>
      <TableTeacherComponent />
    </div>
  );
};

export default Home;
