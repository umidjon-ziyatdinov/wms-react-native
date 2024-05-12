import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React from 'react'

const TodoInput = (props) => {
  return (
    <View style={styles.inputArea}>
        <TextInput style={styles.textInput} onChangeText={props.handleChange} placeholder='Enter your goal' value={props.value} />
        <Button title='Add goal' onPress={props.handleAdd} />

    </View>
  )
}

export default TodoInput

const styles = StyleSheet.create({
    inputArea: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        marginBottom: 4
    
      },
      textInput: {
        width: '70%',
        marginRight: 8,
        padding: 8,
        borderWidth: 1,
        borderColor: '#cccccc',
    
      },
})