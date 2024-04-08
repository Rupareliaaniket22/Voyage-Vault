import Cities from "../components/Cities.jsx";
import styles from "./CityList.module.css";
import Message from "../components/Message";
import { useCity } from "../Context/CitiesContext";
function CityList() {
  const { data } = useCity();
  if (!data.length) {
    return (
      <Message message="👋 Add your first city by clicking on a city on the map" />
    );
  }
  return (
    <div className={styles.citylist}>
      {data.map((city, index) => (
        <Cities city={city} key={index} />
      ))}
    </div>
  );
}

export default CityList;
