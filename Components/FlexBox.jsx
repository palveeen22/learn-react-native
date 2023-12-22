import React from "react";
import { SafeAreaView, Text, View, StyleSheet } from "react-native";

const ThreeBoxFlex = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.box1}>
          <Text>hello</Text>
        </View>
        <View style={styles.box2}>
          <Text>hello</Text>
        </View>
        <View style={styles.box3}>
          <Text>hello</Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff335f",
    flexDirection: "column",

    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
  },
  box1: {
    width: "100%",
    flex: 1,
    padding: 40,
    borderRadius: "30",
    backgroundColor: "red",
    marginBottom: 10,
  },
  box2: {
    flex: 1,
    width: "100%",
    padding: 40,
    borderRadius: "30",
    backgroundColor: "green",
    marginVertical: 10,
  },
  box3: {
    flex: 1,
    width: "100%",
    padding: 40,
    borderRadius: "30",
    backgroundColor: "blue",
    marginTop: 10,
  },
});

export default ThreeBoxFlex;
