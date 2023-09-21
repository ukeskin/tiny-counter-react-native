import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import supabase from "../lib/supabase";
import { InputBox } from "../components/ui";

export default function AutScreen() {
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function signInWithEmail() {
    setLoading(true);
    console.log({ email, password });
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) alert(error.message);
    setLoading(false);
  }

  async function signUpWithEmail() {
    setLoading(true);
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          username: userName,
        },
      },
    });

    alert("Check your email for the login link!");
    if (error) alert(error.message);
    setLoading(false);
  }

  return (
    <View style={styles.container}>
      <InputBox
        autoCapitalize="none"
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />
      <InputBox
        autoCapitalize="none"
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={setPassword}
        value={password}
      />

      <TouchableOpacity onPress={signInWithEmail}>
        <Text>Sign in</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={signUpWithEmail}>
        <Text>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
});
