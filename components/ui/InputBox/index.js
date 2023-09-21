import { View, Text, TextInput } from 'react-native'
import React from 'react'

const InputBox = ({ placeholder, label, ...props }) => {
  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 5 }}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        style={{
          width: '100%',
          height: 50,
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 8,
          padding: 10,
          marginBottom: 10,
        }}
        {...props}
      />
    </View>
  )
}

const styles = {
  container: {
    width: '100%',
  },
}


export default InputBox