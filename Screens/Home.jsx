import React from "react";
import { Dimensions, SafeAreaView, Button, Image } from "react-native";
import styled from "styled-components/native";

const { width, height } = Dimensions.get("window");

const Container = styled.View`
  flex: 1;
  background-color: #ff335f;
  flex-direction: column;
  padding: 30px;
`;
const Card = styled.View`
  padding: 40px;
  /* background-color: #000000; */
  /* border: 1px; */
`;
const BoxTop = styled.View`
  padding: 30px;
  background-color: #ffffff;
  border: #000000;
  border-radius: 100px;
`;

const TextTop = styled.Text`
  text-align: center;
  color: #ff335f;
  font-size: 15px;
`;

const BoxOne = styled.View`
  flex: 1;
  padding: 40px;
  border: #ffffff;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  text-align: center;
  color: #000000;
  font-size: 30px;
`;

const ButtonBlock = styled.View`
  flex-direction: row;
  justify-content: center;
  gap: 4px;
  padding: 4%;
`;

const ButtonGround = styled.View`
  background-color: #000000;
  border-radius: 40%;
  padding: 4px;
`;

const Home = () => {
  return (
    <Container>
      <SafeAreaView style={{ flex: 1 }}>
        {/* box top */}
        {/* <Card>
          <BoxTop>
            <TextTop>Ini top</TextTop>
          </BoxTop>
        </Card> */}
        {/* box flex selanjutnya */}
        {/* <BoxOne>
          <Title>Box 1!</Title>
        </BoxOne>
        <BoxOne>
          <Title> Box2 !</Title>
        </BoxOne> */}
        {/* <BoxOne>
          <Image source={require("../assets/empty.png")} />
        </BoxOne> */}
        <ButtonBlock>
          <ButtonGround>
            <Button
              color="#ffffff"
              title="Left button"
              onPress={() => Alert.alert("Left button pressed")}
            />
          </ButtonGround>
          <ButtonGround>
            <Button
              color="#ffffff"
              title="Right button"
              onPress={() => Alert.alert("Right button pressed")}
            />
          </ButtonGround>
        </ButtonBlock>
      </SafeAreaView>
    </Container>
  );
};

export default Home;
