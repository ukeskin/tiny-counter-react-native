import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";

function Card(props) {
  const counter = props.counter;
  const navigation = props.navigation;

  return (
    <TouchableHighlight
      key={counter?.id}
      style={styles.box}
      onPress={() =>
        navigation.navigate("DetailScreen", {
          screen: "DetailItemScreen",
          params: { counter },
        })
      }
    >
      <View>
        <View style={styles.row}>
          <Cardemoji
            backgroundColor={counter?.backgroundColor}
            emoji={counter?.emoji}
          />
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            {counter?.value}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.col}></Text>
          <Text
            style={{
              fontSize: 16,
            }}
          >
            {counter?.unit}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginVertical: 10,
    padding: 16,
    flex: 0.5,
    marginHorizontal: 5,
    gap: 24,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  col: {
    flex: 1,
  },
});

function Cardemoji({ emoji, backgroundColor }) {
  return (
    <View
      style={{
        backgroundColor: backgroundColor,
        borderRadius: 100,
        width: 36,
        height: 36,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>{emoji}</Text>
    </View>
  );
}

export default Card;
