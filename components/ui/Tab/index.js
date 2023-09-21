import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Tab({ tabs, selectedTab, setSelectedTab }) {
  return (
    <View style={styles.container}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.title}
          style={[
            styles.tab,
            {
              backgroundColor: selectedTab === tab.title ? '#fff' : 'transparent',
            },
          ]}
          onPress={() => setSelectedTab(tab.title)}
        >
          <Text
            style={[
              styles.text,
              {
                color: selectedTab === tab.title ? '#000' : '#636365',
              },
            ]}
          >
            {tab.title}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
    backgroundColor: '#EDEDEE',
    padding: 8,
    borderRadius: 10,
  },
  tab: {
    borderRadius: 10,
    padding: 10,
    flex: 1,
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
  },
})
