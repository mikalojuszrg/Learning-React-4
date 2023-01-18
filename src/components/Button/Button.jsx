import styled from "styled-components";

const StyledDiv = styled.div`
  padding: 10px;
  background-color: red;
`;

const StyledText = styled.p`
  color: white;
`;

const Button = () => {
  return (
    <StyledDiv>
      <StyledText>YOYO</StyledText>
    </StyledDiv>
  );
};

export default Button;
