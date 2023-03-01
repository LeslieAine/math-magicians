import styles from '../styles/Quote.module.css';

const Quote = () => (
  <div className={styles.quoteDiv}>
    <h2 className={styles.quote}>
      Mathematics is not about numbers, equations, computations,
      or algorithms: it is about understanding
      <br />
      <br />
      - William Paul Thurston
    </h2>
  </div>
);

export default Quote;
