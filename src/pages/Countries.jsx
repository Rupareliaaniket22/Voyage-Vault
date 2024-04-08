import { useCity } from "../Context/CitiesContext";
import styles from "./Countries.module.css";
import CountryList from "../components/CountryList";
function Countries() {
  const { data } = useCity();
  const countries = data.filter((city, index, array) => {
    for (let i = 0; i < index; i++) {
      if (array[i].country === city.country) {
        return false;
      }
    }
    return true;
  });
  console.log(countries);
  return (
    <div className={styles.countries}>
      {countries.map((country, index) => (
        <CountryList name={country.country} key={index} flag={country.emoji} />
      ))}
    </div>
  );
}

export default Countries;
