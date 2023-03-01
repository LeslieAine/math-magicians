import { Link, Outlet } from 'react-router-dom';
import styles from '../styles/Nav.module.css';

const Nav = () => (
  <>
    <nav className={styles.nav}>
      <h1 className={styles.title}>Math Magicians</h1>
      <ul className={styles.navList}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/calculator">Calculator</Link>
        </li>
        <li>
          <Link to="/quote">Quote</Link>
        </li>
      </ul>
    </nav>
    <Outlet />
  </>
);

export default Nav;
