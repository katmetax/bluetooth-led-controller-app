import React from "react";
import { Platform, StatusBar } from "react-native";
import styled from "styled-components/native";

import { ColourBtns } from "./components/ColourBtns";
import availableColours from "./config/availableColours";

const App = () => {
  return (
    <Container>
      <StyledText>O SOUND</StyledText>
      <ColourBtns buttonColours={availableColours} />
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  padding-top: ${Platform.OS === "android" ? StatusBar.currentHeight : 0};
`;

const StyledText = styled.Text`
  font-size: 1.5em;
  color: rgb(0, 0, 0);
  box-sizing: border-box;
  display: inline;
  margin: 0px;
  padding: 0px;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  margin-bottom: 20px;
`;

export default App;
