import styles from "./Logo.module.css";
function Logo() {
  return (
    <div className={styles.logoandtitlecontainer}>
      <div className={styles.Logo}>
        <img src="/icon.png" alt="logo"></img>
      </div>
      <p>VoyageVault</p>
    </div>
  );
}
export default Logo;
