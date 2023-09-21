import { View, Text } from 'react-native'
import React from 'react'

const index = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
        }}
      >
        Tiny Counter
      </Text>
      <Text style={{ fontSize: 20 }}></Text>
    </View>
  )
}

export default index
