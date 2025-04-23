import React, { useState } from "react";
import { View, Button, Alert } from "react-native";
import FormField from "../components/FormField";

const API = "http://localhost:5000";

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    try {
      const res = await fetch(`${API}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (!res.ok) throw new Error("Registration failed");
      Alert.alert("Success", "Account created. Please log in.");
      navigation.replace("Login");
    } catch (err) {
      Alert.alert("Error", err.message);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <FormField placeholder="Email" value={email} onChange={setEmail} />
      <FormField
        placeholder="Password"
        value={password}
        onChange={setPassword}
      />
      <Button title="Register" onPress={register} />
    </View>
  );
}
