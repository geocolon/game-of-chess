import Board from "./components/board";
import styles from "./page.module.css";

const Home = () => {

  return (
    <div className={styles.container}>
      <h1>Chess by George Colón</h1>
      <Board />
    </div>
  );
}

export default Home;
