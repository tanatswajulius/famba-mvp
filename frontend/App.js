import React from "react";
import { AppProvider } from "./src/context/AppContext";
import RootNavigator from "./src/navigation/RootNavigator";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <AppProvider>
      <StatusBar style="auto" />
      <RootNavigator />
    </AppProvider>
  );
}
