import React from "react";
import { View, Button } from "react-native";
import PlaceholderMap from "../components/PlaceHolderMap";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ padding: 20 }}>
      <PlaceholderMap />
      <Button
        title="Get a Ride"
        onPress={() => navigation.navigate("Ride")}
      />
      <View style={{ marginVertical: 12 }} />
      <Button
        title="Send a Delivery"
        onPress={() => navigation.navigate("Delivery")}
      />
      <View style={{ marginVertical: 12 }} />
      <Button
        title="Ride History"
        onPress={() => navigation.navigate("RideHistory")}
      />
      <View style={{ marginVertical: 12 }} />
      <Button
        title="Delivery History"
        onPress={() => navigation.navigate("DeliveryHistory")}
      />
    </View>
  );
}
