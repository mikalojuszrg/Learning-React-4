import styles from "./Card.module.scss";
import { FaSnowflake, FaSun } from "react-icons/fa";

const Card = ({ weather }) => {
  const getWeatherIcon = (weathercode) => {
    switch (weathercode) {
      case 71:
        return {
          icon: <FaSnowflake style={{ color: "white" }} />,
          backgroundColor: "blue",
        };
      default:
        return {
          icon: <FaSun style={{ color: "red" }} />,
          backgroundColor: "yellow",
        };
    }
  };

  const { icon, backgroundColor } = getWeatherIcon(
    weather.daily.weathercode[1]
  );

  console.log(weather);
  return (
    <div className={styles.card} style={{ backgroundColor }}>
      <div className={styles.card__info}>
        <p className={styles.card__timezone}>{weather.timezone}</p>
        <p className={styles.card__date}>{new Date().toDateString()}</p>
        <p className={styles.card__temperature}>
          {weather.daily.temperature_2m_min[0]}{" "}
          {weather.daily_units.temperature_2m_min} -{" "}
          {weather.daily.temperature_2m_max[0]}
          {weather.daily_units.temperature_2m_max}
        </p>
        <p className={styles.card__windspeed}>
          {weather.daily.windspeed_10m_max[0]}{" "}
          {weather.daily_units.windspeed_10m_max}
        </p>
      </div>
      <div className={styles.card__icon}>{icon}</div>
    </div>
  );
};

export default Card;
