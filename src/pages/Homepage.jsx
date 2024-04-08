import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import styles from "./Homepage.module.css";

function Homepage() {
  return (
    <div className={styles.Home_main}>
      <PageNav />
      <div className={styles.home_hero_section}>
        <h1>
          You travel the world.
          <br />
          <span>VoyageVault</span> Keeps Track of your Adventure.
        </h1>
        <h2>
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </h2>
        <button className={styles.explorenowbtn}>
          <Link to="/Login">Start Tracking Now</Link>
        </button>
      </div>
    </div>
  );
}

export default Homepage;
