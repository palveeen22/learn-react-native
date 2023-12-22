import React from "react";
import { SafeAreaView, Dimensions } from "react-native";
import styled from "styled-components/native";

const { width, height } = Dimensions.get("window");

const Section = styled(SafeAreaView)`
  background-color: #ff335f;
  width: ${width}px;
  height: ${height}px;
  flex: 1;
`;

const Container = styled.View`
  width: 100%;
  flex: 1;
`;

const Wrapper = styled.View`
  flex: 1;
  border-color: aqua;
  border-radius: 20px;
  padding: 60px;
`;

const Title = styled.Text`
  text-align: center;
  color: #fff;
  font-size: 30px;
`;

const Box = styled.View`
  flex: 1;
  flex-direction: column;
`;

const LayoutBase = () => {
  return (
    <Section>
      <Wrapper>
        <Box>
          <Title>Pesanaja</Title>
        </Box>
      </Wrapper>
    </Section>
  );
};

export default LayoutBase;

// view flex 1 > flex 1, flex 1, flex 1
