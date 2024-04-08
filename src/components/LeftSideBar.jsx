import { NavLink, Outlet } from "react-router-dom";
import styles from "./LeftSideBar.module.css";
import Logo from "./Logo.jsx";
import AppNav from "./AppNav.jsx";
function LeftSideBar() {
  return (
    <div>
      <div className={styles.leftbar}>
        <NavLink to="/">
          <Logo type="Appnav" />
        </NavLink>
        <AppNav />
        <Outlet />
      </div>
    </div>
  );
}

export default LeftSideBar;
