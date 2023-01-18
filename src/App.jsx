import styled from "styled-components";
import CustomButton from "./components/CustomButton/CustomButton";
import { useEffect, useState } from "react";
import Button from "./components/Button/Button";
import Card from "./components/Card/Card";
import { weatherApi } from "./consts/Weather";
import CustomInput from "./components/CustomInput/CustomInput";
import LoginPage from "./pages/LoginPage";

const Container = styled.div`
  padding: 40px;
  display: flex;
`;

const TomatoButton = styled(CustomButton)`
  color: tomato;
  border-color: tomato;
`;

function App() {
  const props = { size: "sm", inputColor: "purple" };

  const [weather, setWeather] = useState(undefined);

  useEffect(() => {
    fetch(weatherApi)
      .then((resp) => resp.json())
      .then((response) => {
        setWeather(response);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="App">
      {/* {weather && <Card weather={weather} />}
      <Container>
        <Button />
      </Container>
      <Container>
        <CustomButton>My button</CustomButton>
        <TomatoButton as="a" href="www.google.com">
          My tomato button
        </TomatoButton>
      </Container>
      <Container>
        <CustomInput defaultValue="Mikalojus" />
        <CustomInput defaultValue="Mikalojus" inputColor="red" size="lg" />
        <CustomInput
          defaultValue="Mikalojus"
          inputColor={props.inputColor}
          size={props.size}
        />
      </Container> */}
      <LoginPage />
    </div>
  );
}

export default App;
