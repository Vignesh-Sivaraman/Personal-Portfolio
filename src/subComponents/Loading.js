import styled from "styled-components";

const Box = styled.div`
  width: 100vw;
  height: 100vh;
  background: "#f7f5e6";
  color: "#333a56";

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loading = () => {
  return (
    <Box>
      <h1>Loading...</h1>
    </Box>
  );
};

export default Loading;
