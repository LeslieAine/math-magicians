import { NavLink, Outlet, BrowserRouter } from 'react-router-dom';
import styles from '../styles/Nav.module.css';

const Nav = () => (
  <>
    <nav className={styles.nav}>
      <h1 className={styles.title}>Math Magicians</h1>
        <ul className={styles.navList}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="calculator">Calculator</NavLink>
          </li>
          <li>
            <NavLink to="quote">Quote</NavLink>
          </li>
        </ul>
    </nav>
    <Outlet />
  </>
);

export default Nav;
