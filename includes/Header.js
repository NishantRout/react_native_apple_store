import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shop</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 80,
  },
  title: {
    fontSize: 18,
    marginTop: 30,
  },
});
