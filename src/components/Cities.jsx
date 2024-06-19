import { Link, useNavigate } from "react-router-dom";
import styles from "./Cities.module.css";
import { useCity } from "../Context/CitiesContext";

function Cities({ city }) {
  const { data, setdata } = useCity();
  const dateString = city.date;

  const [month, day, year] = dateString.split("/");

  const date = new Date(`${day}/${month}/${year}`);

  const options = { month: "long", day: "numeric", year: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);

  function HandleRemoveCity(id, e) {
    e.preventDefault();
    setdata(data.filter((current) => current.id !== Number(id)));
  }
  return (
    <div>
      <Link
        className={styles.cityblock}
        to={`${city.id}?lat=${city.position.lat}&lng=${city.position.lng}`}
      >
        <div className={styles.firstsection}>
          <span>{city.emoji}</span>
          <span>{city.cityName}</span>
        </div>
        <div className={styles.secondsection}>
          <span>({formattedDate})</span>
          <span>
            <button onClick={(e) => HandleRemoveCity(city.id, e)}>X</button>
          </span>
        </div>
      </Link>
    </div>
  );
}

export default Cities;
