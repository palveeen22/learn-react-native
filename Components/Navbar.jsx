import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Navbar = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Hello World!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 4 * 16, // 4em equivalent in pixels (assuming 16px font size)
    backgroundColor: "papayawhip", // Set the desired background color
  },
  title: {
    fontSize: 1.5 * 16, // 1.5em equivalent in pixels (assuming 16px font size)
    textAlign: "center",
    color: "#bf4f74",
  },
});

export default Navbar;
