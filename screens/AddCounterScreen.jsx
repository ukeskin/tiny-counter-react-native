import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";

import { createCounter } from "../lib/api";
import { useNavigation } from "@react-navigation/native";
import units from "../data/units";

export default function AddCounterScreen() {
  const navigation = useNavigation();
  const [data, setData] = useState([]);

  const colors = ["#FF6633", "#FFB399", "#FF33FF", "#FFFF99"];
  const emojis = ["🐶", "🐱", "🐭", "🐹"];

  const handleSubmit = () => {
    createCounter({
      name: "New Counter",
      unit: "Count",
      value: 0,
    }).then((counter) => {
      navigation.navigate("DetailItem", data);
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Name</Text>
        <TextInput
          style={{
            fontSize: 20,
            borderRadius: "10",
            backgroundColor: "#fafafa",
            padding: 16,
          }}
          placeholder="New Counter"
        />
      </View>
      <View style={styles.section}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Color</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 8,
          }}
        >
          {colors.map((color, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.button,
                { backgroundColor: color },
                data.background_color === color && { borderColor: "#fafafa" },
              ]}
              onPress={() => setData({ ...data, background_color: color })}
            ></TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={styles.section}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Icon</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 8,
          }}
        >
          {emojis.map((emoji, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.button,
                { backgroundColor: "#fafafa" },
                data.emoji === emoji && { borderColor: "gray" },
              ]}
              onPress={() => setData({ ...data, emoji: emoji })}
            >
              <Text style={{ fontSize: 20, textAlign: "center" }}>{emoji}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    padding: 20,
  },
  section: {
    padding: 20,
    borderRadius: 8,
    backgroundColor: "#fff",
    gap: 20,
    marginBottom: 20,
  },
  button: {
    height: 50,
    width: 50,
    borderRadius: 100,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
