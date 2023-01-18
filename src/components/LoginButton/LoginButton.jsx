import styled from "styled-components";

const LoginButton = styled.button`
  cursor: pointer;
  /* padding: 0.8rem 5rem; */
  padding: 1rem;
  width: 17rem;
  border: 1px solid black;
  border-radius: 0.5rem;
  color: ${(props) => (props.primary ? "black" : "white")};
  background-color: ${(props) => (props.primary ? "white" : "black")};

  &:hover {
    background-color: ${(props) =>
      props.primary ? "rgb(211, 211, 211)" : "rgb(30, 29, 29)"};
  }
`;

export default LoginButton;
