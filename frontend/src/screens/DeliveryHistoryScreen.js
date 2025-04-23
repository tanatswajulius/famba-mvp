import React, { useContext } from "react";
import { View, Text, FlatList } from "react-native";
import { AppContext } from "../context/AppContext";

export default function DeliveryHistoryScreen() {
  const { deliveries } = useContext(AppContext);

  return (
    <View style={{ padding: 20 }}>
      <FlatList
        data={deliveries}
        keyExtractor={(item) => `${item.delivery_id}`}
        ListEmptyComponent={<Text>No deliveries yet.</Text>}
        renderItem={({ item }) => (
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: "#eee",
              paddingVertical: 8,
            }}
          >
            <Text># {item.delivery_id}</Text>
            <Text>ETA: {item.eta} min | Fee: ${item.fare}</Text>
          </View>
        )}
      />
    </View>
  );
}
