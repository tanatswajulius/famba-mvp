import React, { useState, useContext } from "react";
import { View, Button, Alert } from "react-native";
import FormField from "../components/FormField";
import { AppContext } from "../context/AppContext";

const API = "http://localhost:5000";

export default function RideRequestScreen({ navigation }) {
  const { token, addRide } = useContext(AppContext);
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");

  const submit = async () => {
    try {
      const res = await fetch(`${API}/ride`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ pickup, dropoff }),
      });
      if (!res.ok) throw new Error("Failed to request ride");
      const data = await res.json();
      addRide(data);
      Alert.alert(
        "Ride confirmed",
        `Driver ${data.driver_name} arriving in ${data.eta} min (fare $${data.fare})`
      );
      navigation.goBack();
    } catch (err) {
      Alert.alert("Error", err.message);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <FormField placeholder="Pickup location" value={pickup} onChange={setPickup} />
      <FormField placeholder="Drop-off location" value={dropoff} onChange={setDropoff} />
      <Button title="Submit Ride" onPress={submit} />
    </View>
  );
}
