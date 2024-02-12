import React from "react";
import Left from "./Left";
import Right from "./Right";
import styled from "styled-components";

const App = () => {
  return (
    <MainWrap>
      <Left />
      <Right />
    </MainWrap>
  );
};

const MainWrap = styled.div`
  box-sizing: border-box;
  width: 90%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
`;


export default App;
