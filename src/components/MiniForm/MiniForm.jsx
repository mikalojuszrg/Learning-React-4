import styled from "styled-components";
import LoginButton from "../LoginButton/LoginButton";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const FormInput = styled.input`
  text-indent: 1rem;
  padding: 1rem;
  width: 15rem;
  border: 1px solid black;
  border-radius: 0.5rem;
`;

const MiniForm = () => {
  return (
    <Form>
      <FormInput placeholder="Enter Your Email" />
      <LoginButton>Continue</LoginButton>
    </Form>
  );
};

export default MiniForm;
