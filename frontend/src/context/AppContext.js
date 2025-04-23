import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [rides, setRides] = useState([]);
  const [deliveries, setDeliveries] = useState([]);

  useEffect(() => {
    (async () => {
      const stored = await AsyncStorage.getItem("token");
      if (stored) setToken(stored);
    })();
  }, []);

  const saveToken = async (t) => {
    setToken(t);
    await AsyncStorage.setItem("token", t);
  };

  const addRide = (r) => setRides((prev) => [r, ...prev]);
  const addDelivery = (d) => setDeliveries((prev) => [d, ...prev]);

  return (
    <AppContext.Provider
      value={{ token, saveToken, rides, addRide, deliveries, addDelivery }}
    >
      {children}
    </AppContext.Provider>
  );
};
