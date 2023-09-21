import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import units from "../data/units";

export default function SettingsScreen() {
  const [unit, setUnit] = React.useState("Count");
  const navigation = useNavigation();

  const unitsOptions = units.map((unit) => ({
    label: unit.name,
    value: unit.name,
  }));

  return (
    <View
      style={{
        flex: 1,
        padding: 20,
      }}
    >
      {/* select boxes for settings unit select */}
      <TouchableOpacity
        style={{
          backgroundColor: "#fafafa",
          padding: 16,
          borderRadius: 5,
          marginBottom: 10,
          fontSize: 16,
        }}
        onPress={() => {
          navigation.navigate("Picker", {
            title: "Select Unit",
            items: unitsOptions,
            selectedValue: unit,
            onSelect: (item) => {
              setUnit(item.value);
            },
            mode: "tapToSelect",
          });
        }}
      >
        <Text>{unit}</Text>
      </TouchableOpacity>
    </View>
  );
}
