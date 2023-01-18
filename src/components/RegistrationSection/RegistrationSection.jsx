import styled from "styled-components";
import MiniForm from "../MiniForm/MiniForm";
import { buttons } from "../../consts/Buttons";
import LoginButton from "../LoginButton/LoginButton";
import LoginLogo from "../LoginLogo/LoginLogo";

const Container = styled.div`
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
`;

const Title = styled.h1`
  margin: 0;
`;

const Separator = styled.p`
  margin: 0;
`;

const RegistrationSection = ({ isBack }) => {
  return (
    <Container>
      <LoginLogo />
      {isBack ? <Title>Welcome Back</Title> : <Title>Welcome</Title>}
      <p>Please enter your details.</p>
      <MiniForm />
      <Separator>OR</Separator>
      {buttons.map((button) => (
        <LoginButton primary>
          {button.icon} {button.text}
        </LoginButton>
      ))}
      <p>
        Don't have an account? <a href="">Sign up</a>
      </p>
    </Container>
  );
};

export default RegistrationSection;
