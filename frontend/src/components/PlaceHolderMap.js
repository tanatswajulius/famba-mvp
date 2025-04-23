import React from "react";
import { Image, StyleSheet, View } from "react-native";

export default function PlaceholderMap() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/placeholder-map.png")}
        style={styles.img}
        resizeMode="cover"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#bbb",
    borderRadius: 8,
    overflow: "hidden",
    height: 180,
    marginVertical: 10,
  },
  img: { width: "100%", height: "100%" },
});
