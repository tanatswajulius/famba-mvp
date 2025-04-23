import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from "../screens/SplashScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import HomeScreen from "../screens/HomeScreen";
import RideRequestScreen from "../screens/RideRequestScreen";
import DeliveryRequestScreen from "../screens/DeliveryRequestScreen";
import RideHistoryScreen from "../screens/RideHistoryScreen";
import DeliveryHistoryScreen from "../screens/DeliveryHistoryScreen";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Ride" component={RideRequestScreen} />
        <Stack.Screen name="Delivery" component={DeliveryRequestScreen} />
        <Stack.Screen name="RideHistory" component={RideHistoryScreen} />
        <Stack.Screen name="DeliveryHistory" component={DeliveryHistoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
