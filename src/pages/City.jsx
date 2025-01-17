import { useNavigate, useParams } from "react-router-dom";
import { useCity } from "../Context/CitiesContext";

import styles from "./City.module.css";
import Button from "../components/Button";

function City() {
  const { id } = useParams();
  const { data, setdata } = useCity();
  const navigate = useNavigate();
  console.log(data);
  const selectedCity = data.find((city) => city.id === Number(id)); // Log the selected city
  if (!selectedCity) {
    return <div>Loading...</div>;
  }
  const wikiUrl = `https://en.wikipedia.org/wiki/${selectedCity.cityName}`;
  const dateString = selectedCity.date;
  const [month, day, year] = dateString.split("/");

  const date = new Date(`${day}/${month}/${year}`);

  const options = { month: "long", day: "numeric", year: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);
  return (
    <div className={styles.cardcontainer}>
      <div className={styles.namecontainer}>
        <p>CITY NAME</p>
        <div className={styles.name}>
          <h3>
            <span>{selectedCity.emoji}</span>
            {selectedCity.cityName}
          </h3>
        </div>
      </div>
      <div className={styles.date}>
        <p>You went to {selectedCity.cityName} on:</p>
        <h4>{formattedDate}</h4>
      </div>
      <>
        {selectedCity.notes && selectedCity.notes.length !== 0 && (
          <div className={styles.notes}>
            <p>Your Notes</p>
            <h4>{selectedCity.notes}</h4>
          </div>
        )}
      </>
      <div className={styles.learnmore}>
        <p>LEARN MORE</p>
        <h4>
          <a href={wikiUrl} target="_blank" rel="noopener noreferrer">
            Check out {selectedCity.cityName} on Wikipedia →
          </a>
        </h4>
      </div>
      <Button
        type="Back"
        onclick={() => {
          navigate(-1);
        }}
      >
        <p>← BACK</p>
      </Button>
    </div>
  );
}

export default City;
