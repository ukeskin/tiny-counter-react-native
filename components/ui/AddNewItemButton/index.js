import React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function AddNewItemButton({ navigation }) {
  return (
    <View style={styles.container}>
      <Icon.Button
        backgroundColor={"transparent"}
        color={"#0584FF"}
        style={styles.button}
        name="plus-circle"
        onPress={() =>
          navigation.navigate("Home", { screen: "AddCounterScreen" })
        }
      >
        Add new item
      </Icon.Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: 12,
  },
});
