import { useEffect, useState } from "react";
import Card from "./components/Card/Card";
import { weatherApi } from "./consts/Weather";

function App() {
  const [weather, setWeather] = useState(undefined);

  useEffect(() => {
    fetch(weatherApi)
      .then((resp) => resp.json())
      .then((response) => {
        setWeather(response);
      })
      .catch((error) => console.error(error));
  }, []);

  return <div className="App">{weather && <Card weather={weather} />}</div>;
}

export default App;
