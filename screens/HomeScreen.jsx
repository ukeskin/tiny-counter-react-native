import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";

import { AddNewItemButton, Tab } from "../components/ui";
import Card from "../components/Card";
import { getAllCounters, getCounterActivitiesValue } from "../lib/api";

export default function HomeScreen({ navigation }) {
  const [selectedTab, setSelectedTab] = useState("M");
  const [counters, setCounters] = useState([]);

  useEffect(() => {
    getAllCounters().then((counters) => {
      setCounters(counters);

      counters.forEach((counter) => {
        getCounterActivitiesValue(counter.id, selectedTab).then(
          (activities) => {
            let total = 0;
            activities.forEach((activity) => {
              total += activity.value;
            });
            counter.value = total;
            setCounters([...counters]);
          }
        );
      });
    });
  }, [selectedTab]);

  return (
    <View style={styles.container}>
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
      <FlatList
        style={styles.list}
        data={counters}
        numColumns={2}
        renderItem={({ item }) => {
          return <Card counter={item} navigation={navigation} />;
        }}
        keyExtractor={(item) => item.id.toString()}
      />
      <AddNewItemButton navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  list: {
    flex: 1,
  },
});
