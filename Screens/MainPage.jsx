import React from "react";
import { Dimensions, SafeAreaView, Button, Image } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  background-color: #ff335f;
  flex-direction: column;
  padding: 30px;
`;

const Tittle = styled.Text`
  color: #000000;
  font-size: 30px;
  text-align: center;
`;

const BoxOne = styled.View`
  background-color: #ffffff;
  border-radius: 20px;
  height: 50%;
  padding: 10px;
`;

const MainPage = () => {
  return (
    <Container>
      <SafeAreaView>
        <BoxOne>
          <Tittle>Test</Tittle>
        </BoxOne>
      </SafeAreaView>
    </Container>
  );
};

export default MainPage;
