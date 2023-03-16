import styles from '../styles/Home.module.css';

const Home = () => (
  <div className={styles.homeDiv}>
    <h1 className={styles.homeH1}>Welcome to my Math Magicians website!</h1>
    <div className={styles.homeParas}>
      <p className={styles.homeP}>
        Math magicians is a website for all fans of mathematics. 
        It is a Single Page App (SPA) that allows users to:
        <br />
        <br />
        Make simple calculations.
        <br />
        Read a random math-related quote.
      </p>
      <br />
      <p className={styles.homeP}>
        Feel free to check out the calculator and make use of its functions!!!
        <br />
        Also, dont forget to be inspired by our random quotes!
      </p>
    </div>
  </div>
);

export default Home;
