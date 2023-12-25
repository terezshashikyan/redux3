import { Link, Outlet } from "react-router-dom";
import styles from './Layout.module.scss';

function Layout() {
  return (
    <div className={styles.wrapper}>
      <Outlet />
    </div>
  );
}

export default Layout;
