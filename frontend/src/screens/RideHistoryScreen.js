import React, { useContext } from "react";
import { View, Text, FlatList } from "react-native";
import { AppContext } from "../context/AppContext";

export default function RideHistoryScreen() {
  const { rides } = useContext(AppContext);

  return (
    <View style={{ padding: 20 }}>
      <FlatList
        data={rides}
        keyExtractor={(item) => `${item.ride_id}`}
        ListEmptyComponent={<Text>No rides yet.</Text>}
        renderItem={({ item }) => (
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: "#eee",
              paddingVertical: 8,
            }}
          >
            <Text># {item.ride_id}</Text>
            <Text>ETA: {item.eta} min | Fare: ${item.fare}</Text>
          </View>
        )}
      />
    </View>
  );
}
