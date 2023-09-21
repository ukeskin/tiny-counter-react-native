import { StatusBar } from "expo-status-bar";
import React, { Fragment, useLayoutEffect, useMemo, useState } from "react";

import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

export default function PickerScreen({ navigation, route }) {
  const { items, selectedValue, onSelect, mode } = route.params;

  const [selectedItem, setSelectedItem] = useState(
    items.find((item) => item.value === selectedValue)
  );

  const submitWithItem = (item) => {
    onSelect({
      label: item.label,
      value: item.value,
    });
    navigation.goBack();
  };

  const onPressItem = (item) => {
    setSelectedItem(item);
    if (mode === "tapToSelect") {
      submitWithItem(item);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: route.params.title,
    });
  }, [navigation, selectedItem]);

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.containerScroll}
        keyboardShouldPersistTaps="handled"
      >
        {items.map((item, index) => (
          <Fragment key={index}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => onPressItem(item)}
            >
              <Text
                style={[
                  styles.buttonText,
                  selectedItem.value === item.value && styles.buttonMainText,
                ]}
              >
                {item.label}
              </Text>
              {selectedItem.value === item.value && (
                <Text style={styles.buttonIcon}>✓</Text>
              )}
            </TouchableOpacity>
          </Fragment>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 4,
  },
  button: {
    height: 52,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  buttonText: {
    fontSize: 16,
  },
  containerScroll: {
    flex: 1,
    backgroundColor: "#EEEEEE",
    borderRadius: 8,
    margin: 8,
  },
});
