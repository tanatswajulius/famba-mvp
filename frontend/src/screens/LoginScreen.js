import React, { useState, useContext } from "react";
import { View, Button, Alert } from "react-native";
import FormField from "../components/FormField";
import { AppContext } from "../context/AppContext";

const API = "http://localhost:5000";

export default function LoginScreen({ navigation }) {
  const { saveToken } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const res = await fetch(`${API}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (!res.ok) throw new Error("Login failed");
      const { token } = await res.json();
      await saveToken(token);
      navigation.replace("Home");
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
      <Button title="Login" onPress={login} />
      <View style={{ marginTop: 12 }}>
        <Button
          title="Need an account? Register"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </View>
  );
}
