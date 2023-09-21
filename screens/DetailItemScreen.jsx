import { View, Text, Button, StyleSheet, FlatList } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Tab } from "../components/ui";
import { getCounterActivitiesValue, getCounterActivities } from "../lib/api";

export default function DetailItemScreen(props) {
  const item = props.route.params.counter;
  const navigation = useNavigation();

  const [selectedTab, setSelectedTab] = useState("D");
  const [activitiesVal, setActivitiesVal] = useState(item.value);
  const [allActivities, setAllActivities] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: item.emoji,
    });
  });

  useEffect(() => {
    getCounterActivities(item.id).then((activities) => {
      setAllActivities(activities);
    });
  }, []);

  useEffect(() => {
    getCounterActivitiesValue(item.id, selectedTab).then((val) => {
      console.log(val);
      setActivitiesVal(val);
    });
  }, [selectedTab]);

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Tab
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        tabs={[
          { title: "D" },
          { title: "W" },
          { title: "M" },
          { title: "Y" },
          { title: "All" },
        ]}
      />
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            marginTop: 10,
            color: "gray",
          }}
        >
          TOTAL
        </Text>
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            alignItems: "flex-end",
            padding: 4,
          }}
        >
          <Text
            style={{
              fontSize: 32,
              fontWeight: "bold",
              color: "black",
            }}
          >
            {activitiesVal}
          </Text>
          <Text
            style={{
              marginBottom: 6,
            }}
          >
            {item.unit}
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          marginVertical: 16,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            marginBottom: 16,
          }}
        >
          All Activities
        </Text>
        <FlatList
          style={{ flex: 1 }}
          data={allActivities}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingVertical: 16,
                  paddingHorizontal: 8,
                  backgroundColor: "white",
                  borderRadius: 8,
                  borderColor: "#c2c2c2",
                  borderWidth: 1,
                  marginBottom: 8,
                }}
              >
                <Text style={{ fontSize: 16 }}>{item.value}</Text>
                <Text style={{ fontSize: 16, color: "gray" }}>
                  {new Date(item.created_at).toLocaleDateString()}
                </Text>
              </View>
            );
          }}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
