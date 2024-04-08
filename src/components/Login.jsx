import { NavLink } from "react-router-dom";
import PageNav from "./PageNav";
import styles from "./Login.module.css";
function Login() {
  return (
    <div className={styles.main}>
      <PageNav className={styles.nav} />
      <div className={styles.loginform}>
        <form>
          <p>Email address</p>
          <input type="email" defaultValue={"Jack@example.com"} />
          <p>Password</p>
          <input type="password" defaultValue={"jack123"} />
          <NavLink to="/App">
            <button>Login</button>
          </NavLink>
        </form>
      </div>
    </div>
  );
}

export default Login;
