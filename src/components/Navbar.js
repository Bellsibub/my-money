import { Link } from 'react-router-dom';

// hooks
import { useLogout } from 'hooks/useLogout';
import { useAuth } from 'hooks/useAuth';

// styles
import styles from './Navbar.module.css';

const Navbar = () => {
  const { user } = useAuth();
  const { logout } = useLogout();

  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>
          <Link to="/">myMoney</Link>
        </li>
        {!user && (
          <>
            <li className={styles.actions}>
              <Link to="/login">Login</Link>
            </li>
            <li className={styles.actions}>
              <Link to="/signup">Signup</Link>
            </li>
          </>
        )}
        {user && (
          <>
            <li>Hello, {user.displayName}</li>
            <li className={styles.actions}>
              <Link to="/" onClick={logout} className={styles.featuredAction}>
                Logout
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
