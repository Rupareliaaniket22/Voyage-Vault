import styles from "./CountryList.module.css";
function CountryList({ name, flag }) {
  return (
    <div className={styles.countrycontainer}>
      <span>{flag}</span>
      <span>{name}</span>
    </div>
  );
}

export default CountryList;
