import styles from "./AppLayout.module.css";
import LeftSideBar from "../components/LeftSideBar.jsx";
import Map from "../components/Map.jsx";

function AppLayout() {
  return (
    <div className={styles.main}>
      <LeftSideBar />
      <Map />
    </div>
  );
}

export default AppLayout;
