import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

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
      <View style={styles.section}></View>
      <View style={styles.section}>
        {colors.map((color, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.button,
              { backgroundColor: color },
              data.background_color === color && { borderColor: "#000" },
            ]}
            onPress={() => setSelectedColor(color)}
          >
            <Text style={styles.buttonText}>{emojis[index]}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.section}></View>
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
  },
  button: {
    padding: 20,
    borderRadius: 8,
    backgroundColor: "#fff",
  },
});
