import styled from "styled-components";
import ImageSection from "../components/ImageSection/ImageSection";
import RegistrationSection from "../components/RegistrationSection/RegistrationSection";

const Container = styled.div`
  display: flex;
  gap: 5rem;
  justify-content: center;
  align-items: center;
`;

const LoginPage = () => {
  return (
    <Container>
      <RegistrationSection isBack={true} />
      <ImageSection />
    </Container>
  );
};

export default LoginPage;
