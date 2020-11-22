import React from "react";
import { Alert, View } from "react-native";
import styled from "styled-components/native";

export const ColourBtns = ({ buttonColours }) => {
  return (
    <View>
      <StyledText>Choose your colour:</StyledText>
      <Container>
        {buttonColours.map((colour) => (
          <CustomButton
            onPress={() => Alert.alert(`You pressed ${colour}!`)}
            title="Press Me"
            accessibilityLabel="Click to change to blue"
            color={colour}
          />
        ))}
      </Container>
    </View>
  );
};

const Container = styled.View`
  flex-direction: row;
`;

const StyledText = styled.Text`
  padding: 10px;
  text-align: center;
`;

const CustomButton = styled.Pressable`
  background-color: ${(props) => props.color};
  border-radius: 50px;
  padding: 40px;
  width: 40px;
  margin: 10px;
`;
