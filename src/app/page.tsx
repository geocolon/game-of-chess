"use client";
// import Board from "./components/board";
import { Provider } from 'react-redux';
import store from './store';

import Hero from "./components/hero";
import styles from "./page.module.css";


const Home = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Chess by George Colón</h1>
        <Hero />
      </div>
    </Provider>
  );
}

export default Home;