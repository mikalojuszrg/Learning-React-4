import styled from "styled-components";

const Image = styled.img`
  width: 100%;
  border-radius: 5rem;
`;

const ImageSection = () => {
  return (
    <div>
      <Image src="https://static.standard.co.uk/2022/09/20/10/Fitness.jpg?width=968&auto=webp&quality=50&crop=968%3A645%2Csmart" />
    </div>
  );
};

export default ImageSection;
