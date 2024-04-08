import { useEffect, useState } from "react";
import styles from "./Form.module.css";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useUrlPosition } from "../hooks/useUrlPosition";
import Message from "../components/Message";
import { useCity } from "../Context/CitiesContext";
import { format, addDays } from "date-fns";

function Form() {
  const Base_Url = "https://api.bigdatacloud.net/data/reverse-geocode-client";
  const navigate = useNavigate();
  const { data, setdata } = useCity();
  const [cityname, setcityname] = useState("");
  const [lat, lng] = useUrlPosition();
  const [selecteddate, setselecteddate] = useState(new Date());
  const [isLoadingGeocoding, setisLoadingGeocoding] = useState(false);
  const [geocodingError, setgeocodingError] = useState("");
  const [date, setdate] = useState("");
  const existingDate = new Date();
  const [notes, setnotes] = useState("");

  const day = existingDate.getDate().toString().padStart(2, "0");
  const month = (existingDate.getMonth() + 1).toString().padStart(2, "0");
  const year = existingDate.getFullYear();

  const formattedDate = `${day}/${month}/${year}`;

  const [country, setcountry] = useState("");
  const [emoji, setemoji] = useState("");

  useEffect(() => {
    async function FetchCityData() {
      try {
        setdate(formattedDate);
        setisLoadingGeocoding(true);
        setgeocodingError("");
        const res = await fetch(`${Base_Url}?latitude=${lat}&longitude=${lng}`);
        const citydata = await res.json();
        if (!citydata.countryCode) {
          throw new Error(
            "That doesn't seem to be a country. Click somewhere else 😉"
          );
        }
        setcityname(citydata.city || citydata.locality || "");
        setemoji(countryCodeToEmoji(citydata.countryCode));
        const countryName = citydata.countryName.replace("(the)", "").trim();
        setcountry(countryName);
      } catch (err) {
        setgeocodingError(err);
      } finally {
        setisLoadingGeocoding(false);
      }
    }
    FetchCityData();
  }, [lat, lng]);

  function handleCityChange(e) {
    setcityname(e.target.value.toUpperCase());
  }

  function HandleSubmit(e) {
    const random = Math.ceil(Math.random() * 1000000000);
    e.preventDefault();
    if (!cityname || !date) return;
    const newCity = {
      cityName: cityname,
      country,
      emoji,
      date: format(selecteddate, "dd/MM/yyyy"),
      notes,
      position: { lat, lng },
      id: random,
    };
    setdata([...data, newCity]);
  }

  function countryCodeToEmoji(countryCode) {
    const upperCaseCountryCode = countryCode.toUpperCase();
    const flagEmojis = upperCaseCountryCode
      .split("")
      .map((char) => String.fromCodePoint(char.charCodeAt(0) + 127397));
    return flagEmojis.join("");
  }

  if (isLoadingGeocoding) {
    return <Message message={"Loading..."} />;
  }

  if (geocodingError) {
    return <Message message={geocodingError.toString()} />;
  }

  return (
    <form className={styles.formContainer} onSubmit={HandleSubmit}>
      <div className={styles.cityname}>
        <label>City Name</label>
        <input
          type="text"
          onChange={handleCityChange}
          value={cityname}
          required
        />
      </div>
      <div className={styles.date}>
        <label>When did you go to {cityname}?</label>
        <div className={styles.datepickerContainer}>
          <input
            type="date"
            value={format(selecteddate, "yyyy-MM-dd")}
            onChange={(e) => setselecteddate(new Date(e.target.value))}
            required
          />
        </div>
      </div>
      <div className={styles.notes}>
        <label>Notes about your trip to {cityname}</label>
        <input
          type="text"
          onChange={(e) => setnotes(e.target.value)}
          value={notes}
        />
      </div>
      <div className={styles.buttons}>
        <Button type="Add" onclick={() => navigate(-1)}>
          <p>ADD</p>
        </Button>
        <Button
          type="Back"
          onclick={(e) => {
            e.preventDefault();
            navigate("/App/cities");
          }}
        >
          <p>←</p>
          <p>BACK</p>
        </Button>
      </div>
    </form>
  );
}

export default Form;
