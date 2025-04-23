import React, { useContext, useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import { AppContext } from "../context/AppContext";

export default function SplashScreen({ navigation }) {
  const { token } = useContext(AppContext);

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.replace(token ? "Home" : "Login");
    }, 800);
    return () => clearTimeout(timeout);
  }, [token]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" />
    </View>
  );
}
