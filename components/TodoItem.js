import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TodoItem = (props) => {
  return (
    <View>
      <FlatList data={props.data} renderItem={
     todo => {
        return <View style={styles.itemContainer}> 
        <Pressable onPress={props.handlePress.bind(this, todo?.item.id)}>
        <Text>{todo?.item.text} + {todo?.item.id}</Text>
        </Pressable>
            
        </View>
     }
      }
      keyExtractor={item => item.id}
      />
    </View>
  )
}

export default TodoItem

const styles = StyleSheet.create({
    itemContainer:{
        borderColor: 'green',
        borderWidth: 1,
        backgroundColor: '#cccccc',
        color: 'white'
    },
    itemText:{
        color: 'black',
        padding: 8
    }
})