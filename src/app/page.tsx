// import Board from "./components/board";
import Hero from "./components/hero";
import styles from "./page.module.css";

const Home = () => {

  return (
    <div className={styles.container}>
      <h1>Chess by George Colón</h1>
      <Hero />
    </div>
  );
}

export default Home;
